import './globals.css'

export const metadata = {
  title: 'Boyazid — преподаватель, методист и разработчик',
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
    title: 'Boyazid — Education × Technology',
    description:
      'Математика, физика, методические материалы и цифровые инструменты для образования.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
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
