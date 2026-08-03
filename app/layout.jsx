import './globals.css'

const themeScript = `
  (() => {
    try {
      const savedMode = localStorage.getItem('portfolio-theme')
      const mode = ['light', 'auto', 'dark'].includes(savedMode) ? savedMode : 'auto'
      const darkSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      const resolvedTheme = mode === 'auto' ? (darkSystemTheme ? 'dark' : 'light') : mode
      document.documentElement.dataset.theme = resolvedTheme
      document.documentElement.dataset.themeMode = mode
      document.documentElement.style.colorScheme = resolvedTheme
    } catch (error) {
      document.documentElement.dataset.theme = 'dark'
      document.documentElement.dataset.themeMode = 'auto'
      document.documentElement.style.colorScheme = 'dark'
    }
  })()
`

export const metadata = {
  title: 'ANIQ — математика, физика и методические материалы',
  description:
    'Преподавание математики и физики, разработка методических пособий, тестовых материалов и цифровых образовательных инструментов.',
  keywords: [
    'преподаватель математики',
    'преподаватель физики',
    'методист',
    'методические материалы',
    'тестовые материалы',
    'EdTech',
  ],
  openGraph: {
    title: 'ANIQ — математика и физика понятно',
    description:
      'Математика, физика, методические материалы и цифровые инструменты для образования.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
