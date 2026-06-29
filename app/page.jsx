'use client'
import { useState, useEffect } from 'react'

/* ─── Translations ─── */
const T = {
  uz: {
    nav: { about: 'Haqimda', skills: "Ko'nikmalar", projects: 'Loyihalar', contact: 'Aloqa', cta: 'Muloqot' },
    hero: {
      badge: 'Ish takliflariga ochiqman',
      greeting: 'Salom, men ',
      lines: [
        "Next.js va Node.js bilan backend loyihalar quryapman.",
        "Har bir loyiha orqali yangi narsalar o'rganaman.",
        "Junior backend dasturchi bo'lish yo'lidaman.",
      ],
      btnProjects: "Loyihalarni ko'rish",
      btnContact: "Bog'lanish",
    },
    skills: {
      eyebrow: 'men ishlatiydigan texnologiyalar',
      title: "Ko'nikmalar",
    },
    projects: {
      eyebrow: 'men qurayotganlar',
      title: 'Loyihalar',
      dev: 'Ishlanmoqda',
      github: 'GitHub',
      demo: 'Demo',
      items: [
        { emoji: '✅', title: 'Task Manager',       desc: 'JWT va bcrypt orqali autentifikatsiya, vazifalar CRUD, admin panel. Next.js + MongoDB.',    tags: ['Next.js','MongoDB','JWT'] },
        { emoji: '🔗', title: 'Link Shortener',     desc: "Qisqa URL xizmati: unikal slug, klik statistikasi va foydalanuvchi paneli.",               tags: ['Next.js','MongoDB','Analytics'] },
        { emoji: '🤖', title: 'Telegram Notes Bot', desc: 'Telegram bot orqali eslatmalarni saqlash. Vercel serverless webhook sifatida ishlaydi.',    tags: ['Node.js','Telegram API','MongoDB'] },
      ],
    },
    contact: {
      eyebrow: "bog'lanish",
      title: 'Aloqa',
      desc: "Junior backend lavozimiga ochiqman. Eng tez yo'l — Telegram.",
    },
    footer: { built: "Next.js + Tailwind bilan qurildi · 2025" },
  },
  ru: {
    nav: { about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', contact: 'Контакт', cta: 'Написать' },
    hero: {
      badge: 'Открыт для предложений',
      greeting: 'Привет, я ',
      lines: [
        "Строю backend-проекты на Next.js и Node.js.",
        "С каждым проектом углубляю понимание стека.",
        "На пути к позиции junior backend-разработчика.",
      ],
      btnProjects: 'Посмотреть проекты',
      btnContact: 'Связаться',
    },
    skills: {
      eyebrow: 'технологии, с которыми я работаю',
      title: 'Навыки',
    },
    projects: {
      eyebrow: 'что я строю',
      title: 'Проекты',
      dev: 'В разработке',
      github: 'GitHub',
      demo: 'Демо',
      items: [
        { emoji: '✅', title: 'Task Manager',       desc: 'Аутентификация JWT + bcrypt, CRUD задач, роль admin. Next.js + MongoDB.',                  tags: ['Next.js','MongoDB','JWT'] },
        { emoji: '🔗', title: 'Link Shortener',     desc: 'Сервис коротких ссылок: уникальный слаг, счётчик кликов, личный кабинет.',                tags: ['Next.js','MongoDB','Analytics'] },
        { emoji: '🤖', title: 'Telegram Notes Bot', desc: 'Бот для сохранения заметок. Деплоится как Vercel serverless webhook.',                     tags: ['Node.js','Telegram API','MongoDB'] },
      ],
    },
    contact: {
      eyebrow: 'связаться',
      title: 'Контакт',
      desc: 'Открыт для junior backend-позиций. Самый быстрый способ — Telegram.',
    },
    footer: { built: "Сделано на Next.js + Tailwind · 2025" },
  },
}

const SKILLS = [
  { icon: '⚡', label: 'Backend',   accent: '#6366f1', light: '#eef2ff', items: ['Node.js','NestJS','REST API','JWT / bcrypt'] },
  { icon: '🗄️', label: 'Database', accent: '#059669', light: '#ecfdf5', items: ['MongoDB','Mongoose','Atlas'] },
  { icon: '🎨', label: 'Frontend',  accent: '#0284c7', light: '#e0f2fe', items: ['JavaScript','React','Tailwind CSS','HTML / CSS'] },
  { icon: '🛠️', label: 'Tools',    accent: '#d97706', light: '#fffbeb', items: ['Git & GitHub','Vercel','VS Code','Postman'] },
]

/* ─── Typewriter ─── */
function useTypewriter(lines, speed = 45, pause = 1800) {
  const [text,     setText]     = useState('')
  const [lineIdx,  setLineIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = lines[lineIdx]
    let t
    if (!deleting && charIdx < cur.length) {
      t = setTimeout(() => { setText(cur.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, speed)
    } else if (!deleting && charIdx === cur.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => { setText(cur.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, speed / 2)
    } else {
      setDeleting(false)
      setLineIdx(i => (i + 1) % lines.length)
    }
    return () => clearTimeout(t)
  }, [charIdx, deleting, lineIdx, lines, speed, pause])

  return text
}

/* ─── Scroll reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ─── Icons ─── */
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
)
const ExtIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)
const TgIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.14 13.26l-2.95-.924c-.64-.203-.658-.64.136-.954l11.566-4.46c.537-.194 1.006.131.836.954z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
)
const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
)

/* ─── Page ─── */
export default function Home() {
  const [lang, setLang] = useState('uz')
  const tr    = T[lang]
  const typed = useTypewriter(tr.hero.lines)
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ══ NAVBAR ══ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80"
        style={{ background: 'rgba(248,250,252,0.85)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          <span className="font-mono font-bold text-lg"
            style={{ background:'linear-gradient(135deg,#6366f1,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            sultoniiy.dev
          </span>

          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-500">
            {['about','skills','projects','contact'].map(k => (
              <a key={k} href={`#${k}`} className="nav-link hover:text-slate-900 transition-colors">
                {tr.nav[k]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-xl p-0.5 text-sm font-mono bg-slate-100 border border-slate-200">
              {['uz','ru'].map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className="px-3 py-1.5 rounded-lg transition-all duration-200 uppercase font-semibold"
                  style={lang === l
                    ? { background:'linear-gradient(135deg,#6366f1,#818cf8)', color:'#fff' }
                    : { color:'#64748b' }}>
                  {l}
                </button>
              ))}
            </div>

            <a href="https://t.me/sultoniiy" target="_blank" rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background:'linear-gradient(135deg,#6366f1,#818cf8)', boxShadow:'0 4px 14px rgba(99,102,241,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 6px 20px rgba(99,102,241,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 4px 14px rgba(99,102,241,0.35)' }}>
              {tr.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden"
        style={{ background:'linear-gradient(160deg, #f0f4ff 0%, #faf5ff 40%, #e0f2fe 100%)' }}>

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-1 absolute top-1/4 left-1/6 w-96 h-96 rounded-full"
            style={{ background:'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', filter:'blur(50px)' }}/>
          <div className="blob-2 absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full"
            style={{ background:'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)', filter:'blur(50px)' }}/>
          <div className="blob-1 absolute top-2/3 left-2/3 w-64 h-64 rounded-full"
            style={{ background:'radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)', filter:'blur(40px)', animationDelay:'4s' }}/>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">

          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background:'rgba(99,102,241,0.1)', border:'1.5px solid rgba(99,102,241,0.25)', color:'#4f46e5' }}>
            <span className="pulse-dot"><span/></span>
            {tr.hero.badge}
          </div>

          {/* Heading */}
          <h1 className="reveal text-5xl sm:text-7xl font-extrabold leading-tight mb-6 text-slate-900">
            {tr.hero.greeting}
            <span className="gradient-text">Boyazid</span>
          </h1>

          {/* Typewriter */}
          <div className="reveal h-10 flex items-center mb-10">
            <p className="text-xl sm:text-2xl font-medium text-slate-500">
              {typed}
              <span className="cursor-blink text-indigo-500 ml-0.5">|</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="reveal flex flex-wrap gap-4">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
              style={{ background:'linear-gradient(135deg,#6366f1,#818cf8)', boxShadow:'0 8px 25px rgba(99,102,241,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 30px rgba(99,102,241,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 25px rgba(99,102,241,0.4)' }}>
              {tr.hero.btnProjects} <ArrowIcon/>
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-700 border-2 border-slate-200 bg-white transition-all duration-200"
              onMouseEnter={e => { e.currentTarget.style.borderColor='#818cf8'; e.currentTarget.style.color='#4f46e5' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.color='#334155' }}>
              {tr.hero.btnContact}
            </a>
          </div>

          {/* Floating code block */}
          <div className="reveal float-anim mt-16 hidden md:inline-block rounded-2xl px-6 py-4 font-mono text-sm bg-white border border-slate-200 shadow-xl shadow-indigo-100">
            <span className="text-violet-600">const</span>
            <span className="text-slate-800"> developer </span>
            <span className="text-slate-400">= </span>
            <span className="text-amber-500">{'{'}</span>
            <span className="text-emerald-600"> name:</span>
            <span className="text-orange-500"> "Boyazid"</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-600">stack:</span>
            <span className="text-orange-500"> {"["}Node.js, Next.js, MongoDB{"]"}</span>
            <span className="text-slate-400">, </span>
            <span className="text-emerald-600">open:</span>
            <span className="text-sky-500"> true</span>
            <span className="text-amber-500"> {'}'}</span>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-sm font-mono font-semibold mb-3" style={{ color:'#6366f1' }}>{tr.skills.eyebrow}</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-slate-900 mb-12">{tr.skills.title}</h2>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map(cat => (
              <div key={cat.label}
                className="reveal glow-card rounded-2xl p-6 border-2 border-slate-100 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: cat.light }}>
                  {cat.icon}
                </div>
                <h3 className="text-slate-800 font-bold mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(s => (
                    <span key={s} className="skill-pill px-2.5 py-1 rounded-full text-xs font-medium cursor-default border border-slate-200 text-slate-500 bg-slate-50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" className="py-20 px-6" style={{ background:'#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-sm font-mono font-semibold mb-3" style={{ color:'#6366f1' }}>{tr.projects.eyebrow}</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-slate-900 mb-12">{tr.projects.title}</h2>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tr.projects.items.map(p => (
              <div key={p.title}
                className="reveal glow-card bg-white border-2 border-slate-100 rounded-2xl p-6 flex flex-col shadow-sm">

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background:'#eef2ff' }}>
                  {p.emoji}
                </div>

                <span className="self-start text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background:'#fef3c7', color:'#d97706', border:'1.5px solid #fde68a' }}>
                  {tr.projects.dev}
                </span>

                <h3 className="text-slate-900 font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background:'#eef2ff', color:'#6366f1' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <span className="flex items-center gap-1.5 text-sm text-slate-300 cursor-not-allowed select-none">
                    <GitHubIcon/> {tr.projects.github}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-300 cursor-not-allowed select-none">
                    <ExtIcon/> {tr.projects.demo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-sm font-mono font-semibold mb-3" style={{ color:'#6366f1' }}>{tr.contact.eyebrow}</p>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{tr.contact.title}</h2>
          <p className="reveal text-lg text-slate-500 mb-10 max-w-xl">{tr.contact.desc}</p>

          <div className="reveal flex flex-wrap gap-4">
            <a href="https://t.me/sultoniiy" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
              style={{ background:'linear-gradient(135deg,#0284c7,#38bdf8)', boxShadow:'0 6px 20px rgba(14,165,233,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(14,165,233,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(14,165,233,0.35)' }}>
              <TgIcon/> Telegram
            </a>

            <a href="tel:+998949560127"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
              style={{ background:'linear-gradient(135deg,#059669,#34d399)', boxShadow:'0 6px 20px rgba(5,150,105,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(5,150,105,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(5,150,105,0.35)' }}>
              <PhoneIcon/> +998 94 956 01 27
            </a>

            <a href="https://github.com/theIneuron" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-slate-700 border-2 border-slate-200 bg-white transition-all duration-200"
              onMouseEnter={e => { e.currentTarget.style.borderColor='#6366f1'; e.currentTarget.style.color='#4f46e5' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.color='#334155' }}>
              <GitHubIcon/> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="py-8 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <span className="font-mono font-bold"
            style={{ background:'linear-gradient(135deg,#6366f1,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            sultoniiy.dev
          </span>
          <span>{tr.footer.built}</span>
        </div>
      </footer>

    </div>
  )
}
