import { createHash, randomBytes, randomUUID } from 'node:crypto'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 10

const MAX_BODY_BYTES = 16 * 1024
const TELEGRAM_TIMEOUT_MS = 7000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const MAX_RATE_LIMIT_ENTRIES = 1000

const SERVICE_LABELS = {
  math_lessons: 'Занятия по математике',
  physics_lessons: 'Занятия по физике',
  methodical_material: 'Методическая разработка или урок',
  tests_diagnostics: 'Тесты и диагностика',
  worksheets: 'Задачи и рабочие листы',
  edtech: 'Цифровой образовательный инструмент',
  other: 'Другая задача',
}

const ALLOWED_FIELDS = new Set([
  'name',
  'contact',
  'service',
  'details',
  'deadline',
  'locale',
  'context',
  'consent',
  'website',
])

const REQUIRED_FIELDS = [
  'name',
  'contact',
  'service',
  'details',
  'locale',
  'context',
  'consent',
  'website',
]

const CONTROL_CHARACTERS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/
const SINGLE_LINE_BREAKS = /[\n\t]/
const BODY_TOO_LARGE = Symbol('body-too-large')

const sharedRateLimitStore =
  globalThis.__boyazidContactRateLimitStore ||
  (globalThis.__boyazidContactRateLimitStore = new Map())
const sharedRateLimitSalt =
  globalThis.__boyazidContactRateLimitSalt ||
  (globalThis.__boyazidContactRateLimitSalt =
    process.env.CONTACT_HASH_SALT || randomBytes(32).toString('hex'))

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  })
}

function methodNotAllowed() {
  return jsonResponse({ ok: false, code: 'method_not_allowed' }, 405, {
    Allow: 'POST',
  })
}

function addConfiguredOrigin(origins, value, defaultProtocol = 'https:') {
  if (!value) return

  try {
    const normalized = value.includes('://') ? value : `${defaultProtocol}//${value}`
    origins.add(new URL(normalized).origin)
  } catch {
    // An invalid server-side value is ignored without exposing configuration details.
  }
}

function configuredOrigins() {
  const origins = new Set()

  process.env.CONTACT_ALLOWED_ORIGINS?.split(',').forEach((value) => {
    addConfiguredOrigin(origins, value.trim())
  })
  addConfiguredOrigin(origins, process.env.VERCEL_URL)
  addConfiguredOrigin(origins, process.env.VERCEL_BRANCH_URL)
  addConfiguredOrigin(origins, process.env.VERCEL_PROJECT_PRODUCTION_URL)

  return origins
}

function isAllowedOrigin(request) {
  const fetchSite = request.headers.get('sec-fetch-site')
  if (fetchSite === 'cross-site') return false

  const origin = request.headers.get('origin')
  if (!origin) return process.env.NODE_ENV !== 'production'

  try {
    const parsedOrigin = new URL(origin)
    const isLocalRuntime = process.env.VERCEL !== '1'
    const isLocalOrigin =
      parsedOrigin.protocol === 'http:' &&
      ['localhost', '127.0.0.1', '[::1]'].includes(parsedOrigin.hostname)

    if (isLocalRuntime && isLocalOrigin) return true
    return configuredOrigins().has(parsedOrigin.origin)
  } catch {
    return false
  }
}

function clientRateLimitKey(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const address = forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip')?.trim()
  if (!address) return null

  return createHash('sha256')
    .update(sharedRateLimitSalt)
    .update(':')
    .update(address)
    .digest('hex')
}

function checkRateLimit(request) {
  const key = clientRateLimitKey(request)
  if (!key) return null

  const now = Date.now()

  for (const [storedKey, entry] of sharedRateLimitStore) {
    if (entry.resetAt <= now) sharedRateLimitStore.delete(storedKey)
  }

  if (sharedRateLimitStore.size >= MAX_RATE_LIMIT_ENTRIES) {
    const oldestKey = sharedRateLimitStore.keys().next().value
    if (oldestKey) sharedRateLimitStore.delete(oldestKey)
  }

  const entry = sharedRateLimitStore.get(key)
  if (!entry) {
    sharedRateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return null
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Math.max(1, Math.ceil((entry.resetAt - now) / 1000))
  }

  entry.count += 1
  return null
}

async function readBodyWithLimit(request) {
  if (!request.body) return ''

  const reader = request.body.getReader()
  const chunks = []
  let totalBytes = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    totalBytes += value.byteLength
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel()
      throw BODY_TOO_LARGE
    }
    chunks.push(value)
  }

  const combined = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    combined.set(chunk, offset)
    offset += chunk.byteLength
  }

  return new TextDecoder('utf-8', { fatal: true }).decode(combined)
}

function normalizeText(value, { multiline = false } = {}) {
  if (typeof value !== 'string') return null

  const normalized = value.normalize('NFC').replace(/\r\n?/g, '\n').trim()
  if (CONTROL_CHARACTERS.test(normalized)) return null
  if (!multiline && SINGLE_LINE_BREAKS.test(normalized)) return null

  return normalized
}

function validatePayload(payload) {
  if (
    !payload ||
    typeof payload !== 'object' ||
    Array.isArray(payload) ||
    Object.getPrototypeOf(payload) !== Object.prototype
  ) {
    return null
  }

  const keys = Object.keys(payload)
  if (
    keys.some((key) => !ALLOWED_FIELDS.has(key)) ||
    REQUIRED_FIELDS.some((key) => !Object.prototype.hasOwnProperty.call(payload, key))
  ) {
    return null
  }

  const name = normalizeText(payload.name)
  const contact = normalizeText(payload.contact)
  const service = normalizeText(payload.service)
  const details = normalizeText(payload.details, { multiline: true })
  const deadline = normalizeText(payload.deadline ?? '')
  const locale = normalizeText(payload.locale)
  const context = normalizeText(payload.context)
  const website = normalizeText(payload.website)

  if (
    name === null ||
    name.length < 2 ||
    name.length > 80 ||
    contact === null ||
    contact.length < 3 ||
    contact.length > 120 ||
    service === null ||
    !Object.prototype.hasOwnProperty.call(SERVICE_LABELS, service) ||
    details === null ||
    details.length < 20 ||
    details.length > 1500 ||
    deadline === null ||
    deadline.length > 120 ||
    !['ru', 'uz'].includes(locale) ||
    context !== 'contact_section' ||
    payload.consent !== true ||
    website === null
  ) {
    return null
  }

  return {
    name,
    contact,
    service,
    details,
    deadline,
    locale,
    website,
  }
}

function requestId() {
  return `BZ-${randomUUID().replaceAll('-', '').slice(0, 7).toUpperCase()}`
}

function successResponse(id) {
  return jsonResponse({ ok: true, requestId: id })
}

function telegramMessage(payload, id) {
  const submittedAt = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Tashkent',
  }).format(new Date())

  return [
    'Новая заявка с сайта',
    `Номер: ${id}`,
    '',
    `Услуга: ${SERVICE_LABELS[payload.service]}`,
    `Имя: ${payload.name}`,
    `Контакт: ${payload.contact}`,
    `Желаемый срок: ${payload.deadline || 'не указан'}`,
    `Язык формы: ${payload.locale.toUpperCase()}`,
    `Отправлено: ${submittedAt} (Ташкент)`,
    '',
    'Описание задачи:',
    '—',
    payload.details,
  ].join('\n')
}

async function sendToTelegram(payload, id) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim()
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim()

  if (!token || !chatId || !/^\d+:[A-Za-z0-9_-]{20,}$/.test(token)) {
    return 'unconfigured'
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS)

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage(payload, id),
        link_preview_options: {
          is_disabled: true,
        },
      }),
      cache: 'no-store',
      signal: controller.signal,
    })
    const result = await response.json().catch(() => null)

    return response.ok && result?.ok === true ? 'sent' : 'failed'
  } catch {
    return 'failed'
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return jsonResponse({ ok: false, code: 'forbidden' }, 403)
  }

  const contentType = request.headers.get('content-type')?.split(';')[0]?.trim().toLowerCase()
  if (contentType !== 'application/json') {
    return jsonResponse({ ok: false, code: 'unsupported_media_type' }, 415)
  }

  const contentEncoding = request.headers.get('content-encoding')?.trim().toLowerCase()
  if (contentEncoding && contentEncoding !== 'identity') {
    return jsonResponse({ ok: false, code: 'unsupported_media_type' }, 415)
  }

  const declaredLength = Number(request.headers.get('content-length'))
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, code: 'payload_too_large' }, 413)
  }

  const retryAfter = checkRateLimit(request)
  if (retryAfter) {
    return jsonResponse({ ok: false, code: 'rate_limited' }, 429, {
      'Retry-After': String(retryAfter),
    })
  }

  let rawBody
  try {
    rawBody = await readBodyWithLimit(request)
  } catch (error) {
    if (error === BODY_TOO_LARGE) {
      return jsonResponse({ ok: false, code: 'payload_too_large' }, 413)
    }
    return jsonResponse({ ok: false, code: 'validation' }, 400)
  }

  let parsedBody
  try {
    parsedBody = JSON.parse(rawBody)
  } catch {
    return jsonResponse({ ok: false, code: 'validation' }, 400)
  }

  if (
    parsedBody &&
    typeof parsedBody === 'object' &&
    !Array.isArray(parsedBody) &&
    typeof parsedBody.website === 'string' &&
    parsedBody.website.trim()
  ) {
    return successResponse(requestId())
  }

  const payload = validatePayload(parsedBody)
  if (!payload) {
    return jsonResponse({ ok: false, code: 'validation' }, 400)
  }

  const id = requestId()
  const delivery = await sendToTelegram(payload, id)

  if (delivery === 'unconfigured') {
    return jsonResponse({ ok: false, code: 'service_unconfigured' }, 503)
  }
  if (delivery !== 'sent') {
    return jsonResponse({ ok: false, code: 'delivery_failed' }, 502)
  }

  return successResponse(id)
}

export function GET() {
  return methodNotAllowed()
}

export function PUT() {
  return methodNotAllowed()
}

export function PATCH() {
  return methodNotAllowed()
}

export function DELETE() {
  return methodNotAllowed()
}

export function OPTIONS() {
  return methodNotAllowed()
}
