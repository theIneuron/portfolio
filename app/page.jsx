'use client'
import { useState } from 'react'

const t = {
  uz: {
    nav: {
      about: 'Haqimda',
      skills: "Ko'nikmalar",
      projects: 'Loyihalar',
      contact: 'Aloqa',
      cta: 'Muloqot',
    },
    hero: {
      badge: 'Ish takliflariga ochiqman',
      name: 'Boyazid',
      subtitle:
        "Backend dasturchi bo'lish yo'lida — Node.js, Next.js va MongoDB bilan haqiqiy loyihalar quryapman. Har bir loyiha orqali chuqurroq tushunishga intilyapman.",
      btnProjects: 'Loyihalarni ko\'rish',
      btnContact: "Bog'lanish",
      codeStatus: '"quryapman"',
    },
    skills: {
      eyebrow: 'men ishlatiydigan texnologiyalar',
      title: "Ko'nikmalar",
      backend: 'Backend',
      database: "Ma'lumotlar bazasi",
      frontend: 'Frontend',
      tools: 'Asboblar va platformalar',
    },
    projects: {
      eyebrow: 'men qurayotganlar',
      title: 'Loyihalar',
      dev: 'Ishlanmoqda',
      done: 'Tayyor',
      github: 'GitHub',
      demo: 'Demo',
      items: [
        {
          emoji: '✅',
          title: 'Task Manager',
          desc: 'JWT va bcrypt orqali autentifikatsiya, vazifalar CRUD, admin panel. Next.js + MongoDB asosida.',
          tags: ['Next.js', 'MongoDB', 'JWT'],
        },
        {
          emoji: '🔗',
          title: 'Link Shortener',
          desc: "Qisqa URL xizmati: unikal slug generatsiya, klik statistikasi va foydalanuvchi paneli.",
          tags: ['Next.js', 'MongoDB', 'Analytics'],
        },
        {
          emoji: '🤖',
          title: 'Telegram Notes Bot',
          desc: 'Telegram bot orqali eslatmalarni saqlash. Vercel serverless webhook sifatida ishlaydi.',
          tags: ['Node.js', 'Telegram API', 'MongoDB'],
        },
      ],
    },
    contact: {
      eyebrow: "bog'lanish",
      title: 'Aloqa',
      desc: "Junior backend dasturchi lavozimiga va qiziqarli loyihalarga ochiqman. Eng tez bog'lanish yo'li — Telegram.",
    },
    footer: {
      built: "Next.js + Tailwind CSS bilan qurildi · 2025",
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакт',
      cta: 'Написать',
    },
    hero: {
      badge: 'Открыт для предложений',
      name: 'Boyazid',
      subtitle:
        'На пути к backend-разработчику — строю реальные проекты с Node.js, Next.js и MongoDB. С каждым проектом понимаю стек всё глубже.',
      btnProjects: 'Посмотреть проекты',
      btnContact: 'Связаться',
      codeStatus: '"строю"',
    },
    skills: {
      eyebrow: 'технологии, с которыми я работаю',
      title: 'Навыки',
      backend: 'Бэкенд',
      database: 'Базы данных',
      frontend: 'Фронтенд',
      tools: 'Инструменты и платформы',
    },
    projects: {
      eyebrow: 'что я строю',
      title: 'Проекты',
      dev: 'В разработке',
      done: 'Готово',
      github: 'GitHub',
      demo: 'Демо',
      items: [
        {
          emoji: '✅',
          title: 'Task Manager',
          desc: 'Аутентификация через JWT и bcrypt, CRUD задач, роль admin. Стек: Next.js + MongoDB.',
          tags: ['Next.js', 'MongoDB', 'JWT'],
        },
        {
          emoji: '🔗',
          title: 'Link Shortener',
          desc: 'Сервис коротких ссылок: уникальный слаг, счётчик кликов и личный кабинет.',
          tags: ['Next.js', 'MongoDB', 'Analytics'],
        },
        {
          emoji: '🤖',
          title: 'Telegram Notes Bot',
          desc: 'Telegram-бот для сохранения заметок. Деплоится как Vercel serverless webhook.',
          tags: ['Node.js', 'Telegram API', 'MongoDB'],
        },
      ],
    },
    contact: {
      eyebrow: 'связаться',
      title: 'Контакт',
      desc: 'Открыт для junior backend-позиций и интересных проектов. Самый быстрый способ — Telegram.',
    },
    footer: {
      built: 'Сделано на Next.js + Tailwind CSS · 2025',
    },
  },
}

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.14 13.26l-2.95-.924c-.64-.203-.658-.64.136-.954l11.566-4.46c.537-.194 1.006.131.836.954z" />
  </svg>
)

export default function Home() {
  const [lang, setLang] = useState('uz')
  const tr = t[lang]

  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-accent font-medium tracking-wide">sultoniiy.dev</span>

          <nav className="hidden sm:flex items-center gap-8 text-sm text-slate-400">
            <a href="#about" className="nav-link hover:text-white transition-colors">{tr.nav.about}</a>
            <a href="#skills" className="nav-link hover:text-white transition-colors">{tr.nav.skills}</a>
            <a href="#projects" className="nav-link hover:text-white transition-colors">{tr.nav.projects}</a>
            <a href="#contact" className="nav-link hover:text-white transition-colors">{tr.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center bg-dark-800 border border-white/5 rounded-lg p-0.5 text-sm font-mono">
              <button
                onClick={() => setLang('uz')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  lang === 'uz'
                    ? 'bg-accent text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  lang === 'ru'
                    ? 'bg-accent text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                RU
              </button>
            </div>

            <a
              href="https://t.me/sultoniiy"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all duration-200"
            >
              {tr.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {tr.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
            {lang === 'uz' ? "Salom, men " : "Привет, я "}
            <span className="gradient-text">{tr.hero.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            {tr.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accentLight text-white font-semibold transition-all duration-200 shadow-lg shadow-accent/25"
            >
              {tr.hero.btnProjects}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-accent/50 text-slate-300 hover:text-white font-semibold transition-all duration-200"
            >
              {tr.hero.btnContact}
            </a>
          </div>

          <div className="mt-16 hidden md:block">
            <div className="inline-block bg-dark-700 border border-white/5 rounded-2xl px-6 py-4 font-mono text-sm text-slate-400">
              <span className="text-purple-400">const</span>
              <span className="text-white"> developer </span>
              <span className="text-slate-500">= </span>
              <span className="text-yellow-400">{'{'}</span>
              <span className="text-green-400 ml-2">name:</span>
              <span className="text-orange-300"> "Boyazid"</span>
              <span className="text-slate-500">, </span>
              <span className="text-green-400">stack:</span>
              <span className="text-orange-300"> {`["Node.js", "Next.js", "MongoDB"]`}</span>
              <span className="text-slate-500">, </span>
              <span className="text-green-400">status:</span>
              <span className="text-sky-400"> {tr.hero.codeStatus}</span>
              <span className="text-yellow-400"> {'}'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-sm mb-3">{tr.skills.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">{tr.skills.title}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Backend */}
            <div className="bg-dark-900 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">{tr.skills.backend}</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Next.js API', 'REST API', 'JWT / bcrypt'].map(s => (
                  <span key={s} className="skill-pill px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-dark-900 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M21 19c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">{tr.skills.database}</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Mongoose', 'Atlas'].map(s => (
                  <span key={s} className="skill-pill px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-dark-900 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">{tr.skills.frontend}</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Tailwind CSS', 'HTML / CSS'].map(s => (
                  <span key={s} className="skill-pill px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-dark-900 border border-white/5 rounded-2xl p-6 sm:col-span-2 lg:col-span-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3">{tr.skills.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {['Git & GitHub', 'Vercel', 'VS Code', 'Postman', 'npm'].map(s => (
                  <span key={s} className="skill-pill px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300 cursor-default">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-sm mb-3">{tr.projects.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">{tr.projects.title}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tr.projects.items.map((project) => (
              <div
                key={project.title}
                className="card-hover bg-dark-800 border border-white/5 rounded-2xl p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-2xl">
                  {project.emoji}
                </div>
                <div className="mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full border"
                    style={{
                      background: 'rgba(251,191,36,0.08)',
                      color: '#fbbf24',
                      borderColor: 'rgba(251,191,36,0.2)'
                    }}>
                    {tr.projects.dev}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs bg-white/5 text-slate-400 font-mono">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <span className="text-sm text-slate-600 flex items-center gap-1.5 cursor-not-allowed select-none">
                    <GitHubIcon /> {tr.projects.github}
                  </span>
                  <span className="text-sm text-slate-600 flex items-center gap-1.5 cursor-not-allowed select-none">
                    <ExternalIcon /> {tr.projects.demo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-dark-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-sm mb-3">{tr.contact.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{tr.contact.title}</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl">{tr.contact.desc}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/sultoniiy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200"
              style={{
                background: 'rgba(34,158,217,0.1)',
                border: '1px solid rgba(34,158,217,0.25)',
                color: '#229ED9',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#229ED9'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,158,217,0.1)'; e.currentTarget.style.color = '#229ED9' }}
            >
              <TelegramIcon />
              Telegram
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white font-semibold transition-all duration-200"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <span className="font-mono text-slate-400">sultoniiy.dev</span>
          <span>{tr.footer.built}</span>
        </div>
      </footer>

    </div>
  )
}
