'use client'

import { useEffect, useRef, useState } from 'react'

const CONTENT = {
  uz: {
    languageName: "O'zbekcha",
    nav: {
      about: 'Men haqimda',
      expertise: "Yo'nalishlar",
      materials: 'Materiallar',
      projects: 'Raqamli loyihalar',
      contact: 'Aloqa',
    },
    hero: {
      eyebrow: "NAZARIYA → TUSHUNISH → NATIJA",
      title: 'Murakkab',
      accent: 'tushunarli bo‘ladi.',
      tail: '',
      description: 'Matematika · Fizika · Metodika · EdTech',
      primary: 'Materiallar',
      secondary: 'Ariza qoldirish',
      availability: 'Yangi loyihalar uchun ochiqman',
      focus: ['Matematika', 'Fizika', 'Metodika', 'EdTech'],
      visualLabel: "Ta'lim modeli",
      visualTitle: 'Tushunishdan natijagacha',
      visualSteps: ['Mavzu', 'Tushunish', 'Amaliyot', 'Tekshirish'],
      visualNote: 'Maqsad, mantiq va tekshiruv — yagona tizimda.',
      solverTitle: 'Bosqichma-bosqich yechim',
      solverBadge: '3 bosqich',
      solverFooter: 'Yechim mantiqini ko‘rsataman',
      solverSteps: [
        { formula: '2x + 6 = 14', action: 'Boshlang‘ich tenglama' },
        { formula: '2x = 8', action: 'Har ikki tomondan 6 ni ayiramiz' },
        { formula: 'x = 4', action: '2 ga bo‘lamiz · javob' },
      ],
    },
    about: {
      eyebrow: 'mening yondashuvim',
      title: "Ta'lim × metodika × texnologiya",
      lead: "Matematika va fizika o'qitaman, o'quv materiallarini yarataman.",
      body:
        'Murakkab mavzuni bosqichlarga ajrataman va natijani aniq mezonlar bilan tekshiraman. Kod esa bu jarayonni raqamlashtiradi.',
      principlesTitle: 'Ish tamoyillari',
      principles: [
        'Sodda va aniq tushuntirish',
        'Nazariya → amaliyot → tekshiruv',
        'Materialni auditoriyaga moslash',
      ],
      audiencesTitle: 'Kimlar uchun',
      audiences: [
        {
          number: '01',
          title: "O'quvchilar",
          text: "Tushunish, bo'shliqlarni topish va mashq qilish.",
        },
        {
          number: '02',
          title: "O'qituvchilar",
          text: 'Tayyor dars tuzilmasi, topshiriq va testlar.',
        },
        {
          number: '03',
          title: "Maktab va markazlar",
          text: "Dastur, diagnostika va maxsus ta'lim mahsulotlari.",
        },
      ],
    },
    expertise: {
      eyebrow: 'TA’LIM MAYDONI',
      title: '4 yo‘nalish',
      intro: 'Nazariya. Amaliyot. Natija.',
      items: [
        {
          symbol: '∑',
          index: '01',
          title: "Matematika o'qitish",
          text: 'Nazariya, strategiya va bosqichli amaliyot.',
          points: ['Nazariy tushuntirish', 'Masala yechish'],
        },
        {
          symbol: 'ψ',
          index: '02',
          title: "Fizika o'qitish",
          text: 'Hodisa, formula va masala — yagona mantiqda.',
          points: ['Hodisa va qonunlar', 'Amaliy masalalar'],
        },
        {
          symbol: '∂',
          index: '03',
          title: 'Metodik ishlab chiqish',
          text: 'Maqsad va auditoriyaga mos tayyor material.',
          points: ["Metodik qo'llanmalar", 'Ishchi varaqlar'],
        },
        {
          symbol: 'Δ',
          index: '04',
          title: 'Test va diagnostika',
          text: "Bilimni aniq o'lchaydigan savol va mezonlar.",
          points: ['Diagnostik testlar', 'Javob va mezonlar'],
        },
      ],
    },
    materials: {
      eyebrow: 'MATERIALLAR LABORATORIYASI',
      title: 'Tayyor formatlar',
      intro: 'Himoyalangan demo-ko‘rish.',
      request: "Materialni muhokama qilish",
      items: [
        {
          type: "Qo'llanma",
          title: "Metodik qo'llanmalar",
          text: 'Mavzu tuzilmasi, misollar va amaliy tavsiyalar.',
          meta: ['PDF / DOCX', 'Bosma va raqamli'],
          preview: ['Maqsad va natija', 'Nazariya va misollar', 'Metodik tavsiyalar'],
          tone: 'violet',
          demo: 'mathGuide',
        },
        {
          type: 'Baholash',
          title: 'Test materiallari',
          text: 'Diagnostika va nazorat uchun test, javob va mezonlar.',
          meta: ['Test / Google Forms', 'Javoblar bilan'],
          preview: ['Diagnostika', 'Darajali savollar', 'Baholash mezoni'],
          tone: 'cyan',
          demo: 'physicsDiagnostic',
        },
        {
          type: 'Amaliyot',
          title: "Masalalar va ishchi varaqlar",
          text: 'Oddiydan murakkabga topshiriqlar va mustaqil ish.',
          meta: ['PDF / Print', "O'quvchi uchun"],
          preview: ['Asosiy mashqlar', 'Amaliy masalalar', 'Mustaqil ish'],
          tone: 'amber',
          demo: 'ohmWorksheet',
        },
        {
          type: 'Dars',
          title: 'Dars ishlanmalari',
          text: 'Maqsad, dars bosqichlari, faoliyat va refleksiya.',
          meta: ['PPTX / DOCX', "O'qituvchi uchun"],
          preview: ['Dars ssenariysi', 'Taqdimot rejasi', 'Refleksiya'],
          tone: 'green',
        },
      ],
    },
    process: {
      eyebrow: 'YECHIM TRAYEKTORIYASI',
      title: '4 koordinata',
      items: [
        {
          number: '01',
          title: 'Vazifani aniqlash',
          text: 'Auditoriya, mavzu, maqsad va format.',
        },
        {
          number: '02',
          title: 'Tuzilmani yaratish',
          text: 'Mantiq, murakkablik va tekshiruv usuli.',
        },
        {
          number: '03',
          title: 'Materialni ishlab chiqish',
          text: 'Matn, topshiriq va vizual tuzilma.',
        },
        {
          number: '04',
          title: 'Tekshirish va topshirish',
          text: 'Tekshiruv va kerakli formatda topshirish.',
        },
      ],
    },
    projects: {
      eyebrow: 'EDTECH TIZIMLARI',
      title: 'Raqamli loyihalar',
      intro: 'Ta’lim uchun kod.',
      ready: 'Tayyor',
      development: 'Ishlanmoqda',
      demo: 'Demo',
      nextFocus: 'Keyingi yo‘nalish',
      nextTitle: 'Ta’lim uchun raqamli vositalar',
      nextText: 'Onlayn testlar, diagnostika va materiallar bilan ishlash.',
      items: [
        {
          icon: 'TM',
          category: 'Full-stack ilova',
          title: 'Task Manager',
          text: 'Autentifikatsiya, vazifalar va foydalanuvchi rollari.',
          tags: ['Next.js', 'MongoDB', 'JWT'],
          done: true,
          demo: 'https://project-1-task-manager-amber.vercel.app',
        },
        {
          icon: 'LS',
          category: 'Web servis',
          title: 'Link Shortener',
          text: 'Qisqa havolalar, statistika va foydalanuvchi paneli.',
          tags: ['Next.js', 'MongoDB', 'Analytics'],
          done: false,
          demo: null,
        },
        {
          icon: 'TB',
          category: 'Telegram vosita',
          title: 'Telegram Notes Bot',
          text: 'Telegram orqali eslatmalarni saqlovchi serverless bot.',
          tags: ['Node.js', 'Telegram API', 'MongoDB'],
          done: false,
          demo: null,
        },
      ],
    },
    contact: {
      eyebrow: 'SIGNAL YUBORISH',
      title: 'Vazifani uzating',
      text: 'Javob Telegram orqali.',
      primary: 'Ariza qoldirish',
      response: 'To‘g‘ridan-to‘g‘ri bog‘lanish',
      fallback: 'Forma ishlamasa, telefon orqali bog‘laning.',
      form: {
        badge: 'SIGNAL → TELEGRAM',
        title: 'Yangi vazifa',
        hint: 'Qisqa va aniq.',
        name: 'Sizga qanday murojaat qilay?',
        namePlaceholder: 'Ismingiz',
        replyTo: 'Javob yuborish uchun aloqa',
        replyToPlaceholder: '@username, telefon yoki email',
        service: 'Nima kerak?',
        servicePlaceholder: 'Xizmat turini tanlang',
        services: [
          { value: 'math_lessons', label: 'Matematika mashg‘ulotlari' },
          { value: 'physics_lessons', label: 'Fizika mashg‘ulotlari' },
          { value: 'methodical_material', label: 'Metodik ishlanma yoki dars' },
          { value: 'tests_diagnostics', label: 'Test va diagnostika' },
          { value: 'worksheets', label: 'Masalalar va ishchi varaqlar' },
          { value: 'edtech', label: 'Raqamli ta’lim vositasi' },
          { value: 'other', label: 'Boshqa vazifa' },
        ],
        description: 'Vazifani qisqacha tasvirlang',
        descriptionPlaceholder:
          'Fan, mavzu, auditoriya va kerakli natija haqida yozing. O‘quvchilarning shaxsiy ma’lumotlarini yubormang.',
        deadline: 'Muddat',
        deadlinePlaceholder: 'Masalan: 15-avgustgacha',
        optional: 'ixtiyoriy',
        privacy:
          'Aloqa uchun ma’lumotlarimni qayta ishlashga roziman. Ariza Telegram orqali yuboriladi.',
        note: 'Aloqa ma’lumotlari saytda e’lon qilinmaydi.',
        submit: 'Arizani yuborish',
        sending: 'Yuborilmoqda…',
        successTitle: 'Ariza yuborildi',
        success:
          'Rahmat! Arizangizni oldim va ko‘rsatilgan aloqa orqali siz bilan bog‘lanaman.',
        reference: 'Ariza raqami',
        referenceYours: 'Sizning ariza raqamingiz',
        copyReference: 'Raqamni nusxalash',
        copiedReference: 'Nusxalandi',
        celebrationEyebrow: 'SIGNAL QABUL QILINDI · Φ 01',
        celebrationTitle: 'Aloqa o‘rnatildi',
        celebrationText: 'Vazifa yechim trayektoriyasida.',
        celebrationClose: 'Davom etish',
        celebrationDismiss: 'Animatsiyani yopish',
        errors: {
          validation: 'Maydonlarni tekshiring va yana urinib ko‘ring.',
          rate_limited: 'Juda ko‘p urinish bo‘ldi. Birozdan keyin qayta urinib ko‘ring.',
          service_unconfigured:
            'Onlayn arizalar hali sozlanmagan. Telefon orqali bog‘laning.',
          delivery_failed:
            'Arizani yetkazib bo‘lmadi. Qayta urinib ko‘ring yoki telefon orqali bog‘laning.',
          generic: 'Arizani yuborib bo‘lmadi. Qayta urinib ko‘ring yoki telefon orqali bog‘laning.',
        },
      },
    },
    footer: {
      role: "Matematika va fizika o'qituvchisi · Metodist · Dasturchi",
      built: 'Ta’lim va texnologiya uyg‘unligida',
    },
    demoViewer: {
      open: "Demoni ko'rish",
      similar: "Shunga o'xshash material buyurtma qilish",
      request: 'To‘liq material yaratishni muhokama qilish',
      close: 'Demoni yopish',
      previous: 'Oldingi sahifa',
      next: 'Keyingi sahifa',
      page: 'Sahifa',
      protected: 'Tahrirlanadigan asl fayl saytga joylanmagan',
      badge: 'Portfolio uchun demo-maket',
      noticeTitle: 'Portfolio uchun yaratilgan namoyish maketi',
      notice:
        'Bu material tuzilishi va dizaynini ko‘rsatadigan cheklangan namunadir. Tahrirlanadigan asl fayl va javoblar saytga joylanmagan.',
      language: 'Material tili: ruscha',
      dialog: 'O‘quv materialining namoyish ko‘rinishi',
      imageAlt: 'Suv belgisi tushirilgan namoyish sahifasi',
      blocked: 'Brauzerga faqat namoyish fragmenti yuboriladi',
      stageLabel: 'Hujjat sahifalarini ko‘rish sohasi',
      loading: 'Namoyish sahifasi yuklanmoqda',
      loadError: 'Sahifani yuklab bo‘lmadi',
      retry: 'Qayta urinish',
      printMessage: 'DEMO · BOYAZID — namoyish fragmenti. Asl fayl saytga joylanmagan.',
    },
    mobileMenu: 'Menyuni ochish',
    closeMenu: 'Menyuni yopish',
    navigationLabel: 'Asosiy navigatsiya',
    mobileNavigationLabel: 'Mobil navigatsiya',
    languageSelector: 'Tilni tanlash',
    skip: "Asosiy mazmunga o'tish",
  },
  ru: {
    languageName: 'Русский',
    nav: {
      about: 'Обо мне',
      expertise: 'Направления',
      materials: 'Материалы',
      projects: 'Цифровые проекты',
      contact: 'Контакты',
    },
    hero: {
      eyebrow: 'ТЕОРИЯ → ПОНИМАНИЕ → РЕЗУЛЬТАТ',
      title: 'Сложное',
      accent: 'становится ясным.',
      tail: '',
      description: 'Математика · Физика · Методика · EdTech',
      primary: 'Материалы',
      secondary: 'Оставить заявку',
      availability: 'Открыт к новым проектам',
      focus: ['Математика', 'Физика', 'Методика', 'EdTech'],
      visualLabel: 'Модель обучения',
      visualTitle: 'От понимания к результату',
      visualSteps: ['Тема', 'Понимание', 'Практика', 'Проверка'],
      visualNote: 'Цель, логика и проверка — в одной системе.',
      solverTitle: 'Решение по шагам',
      solverBadge: '3 шага',
      solverFooter: 'Показываю логику решения',
      solverSteps: [
        { formula: '2x + 6 = 14', action: 'Исходное уравнение' },
        { formula: '2x = 8', action: 'Вычитаем 6 из обеих частей' },
        { formula: 'x = 4', action: 'Делим на 2 · ответ' },
      ],
    },
    about: {
      eyebrow: 'мой подход',
      title: 'Образование × методика × технологии',
      lead: 'Преподаю математику и физику, создаю учебные материалы.',
      body:
        'Разбираю сложную тему на шаги и проверяю результат по ясным критериям. Разработка помогает это автоматизировать.',
      principlesTitle: 'Принципы работы',
      principles: [
        'Объяснять ясно и доступно',
        'Теория → практика → проверка',
        'Адаптировать под аудиторию',
      ],
      audiencesTitle: 'Для кого',
      audiences: [
        {
          number: '01',
          title: 'Ученики',
          text: 'Понять тему, найти пробелы и закрепить навык.',
        },
        {
          number: '02',
          title: 'Преподаватели',
          text: 'Получить структуру урока, задания и тесты.',
        },
        {
          number: '03',
          title: 'Школы и центры',
          text: 'Разработать программу, диагностику или спецкурс.',
        },
      ],
    },
    expertise: {
      eyebrow: 'ОБРАЗОВАТЕЛЬНОЕ ПОЛЕ',
      title: '4 направления',
      intro: 'Теория. Практика. Результат.',
      items: [
        {
          symbol: '∑',
          index: '01',
          title: 'Преподавание математики',
          text: 'Теория, стратегия и поэтапная практика.',
          points: ['Теоретическое объяснение', 'Решение задач'],
        },
        {
          symbol: 'ψ',
          index: '02',
          title: 'Преподавание физики',
          text: 'Явление, формула и задача — в одной логике.',
          points: ['Явления и законы', 'Практические задачи'],
        },
        {
          symbol: '∂',
          index: '03',
          title: 'Методическая разработка',
          text: 'Готовый материал под цель и аудиторию.',
          points: ['Методические пособия', 'Рабочие листы'],
        },
        {
          symbol: 'Δ',
          index: '04',
          title: 'Тесты и диагностика',
          text: 'Вопросы и критерии для точной оценки знаний.',
          points: ['Диагностические тесты', 'Ответы и критерии'],
        },
      ],
    },
    materials: {
      eyebrow: 'ЛАБОРАТОРИЯ МАТЕРИАЛОВ',
      title: 'Готовые форматы',
      intro: 'Защищённый демо-просмотр.',
      request: 'Обсудить материал',
      items: [
        {
          type: 'Пособие',
          title: 'Методические пособия',
          text: 'Структура темы, примеры и практические рекомендации.',
          meta: ['PDF / DOCX', 'Печать и онлайн'],
          preview: ['Цель и результат', 'Теория и примеры', 'Рекомендации'],
          tone: 'violet',
          demo: 'mathGuide',
        },
        {
          type: 'Оценивание',
          title: 'Тестовые материалы',
          text: 'Диагностика и контроль с ответами и критериями.',
          meta: ['Тест / Google Forms', 'С ответами'],
          preview: ['Диагностика', 'Уровневые вопросы', 'Критерии оценки'],
          tone: 'cyan',
          demo: 'physicsDiagnostic',
        },
        {
          type: 'Практика',
          title: 'Задачи и рабочие листы',
          text: 'Задания от простого к сложному и самостоятельная работа.',
          meta: ['PDF / Print', 'Для ученика'],
          preview: ['Базовые упражнения', 'Практические задачи', 'Самостоятельная работа'],
          tone: 'amber',
          demo: 'ohmWorksheet',
        },
        {
          type: 'Занятие',
          title: 'Разработки уроков',
          text: 'Цель, этапы, активности и рефлексия урока.',
          meta: ['PPTX / DOCX', 'Для преподавателя'],
          preview: ['Сценарий урока', 'План презентации', 'Рефлексия'],
          tone: 'green',
        },
      ],
    },
    process: {
      eyebrow: 'ТРАЕКТОРИЯ РЕШЕНИЯ',
      title: '4 координаты',
      items: [
        {
          number: '01',
          title: 'Определяем задачу',
          text: 'Аудитория, тема, цель и формат.',
        },
        {
          number: '02',
          title: 'Проектирую структуру',
          text: 'Логика, сложность и способ проверки.',
        },
        {
          number: '03',
          title: 'Разрабатываю материал',
          text: 'Текст, задания и визуальная структура.',
        },
        {
          number: '04',
          title: 'Проверяю и передаю',
          text: 'Проверка и передача в нужном формате.',
        },
      ],
    },
    projects: {
      eyebrow: 'EDTECH-СИСТЕМЫ',
      title: 'Цифровые проекты',
      intro: 'Код для образования.',
      ready: 'Готово',
      development: 'В разработке',
      demo: 'Демо',
      nextFocus: 'Следующий фокус',
      nextTitle: 'Цифровые инструменты для обучения',
      nextText: 'Онлайн-тесты, диагностика и работа с материалами.',
      items: [
        {
          icon: 'TM',
          category: 'Full-stack приложение',
          title: 'Task Manager',
          text: 'Аутентификация, задачи и роли пользователей.',
          tags: ['Next.js', 'MongoDB', 'JWT'],
          done: true,
          demo: 'https://project-1-task-manager-amber.vercel.app',
        },
        {
          icon: 'LS',
          category: 'Веб-сервис',
          title: 'Link Shortener',
          text: 'Короткие ссылки, статистика и кабинет пользователя.',
          tags: ['Next.js', 'MongoDB', 'Analytics'],
          done: false,
          demo: null,
        },
        {
          icon: 'TB',
          category: 'Telegram-инструмент',
          title: 'Telegram Notes Bot',
          text: 'Serverless-бот для хранения заметок в Telegram.',
          tags: ['Node.js', 'Telegram API', 'MongoDB'],
          done: false,
          demo: null,
        },
      ],
    },
    contact: {
      eyebrow: 'ПЕРЕДАТЬ СИГНАЛ',
      title: 'Передайте задачу',
      text: 'Ответ — в Telegram.',
      primary: 'Оставить заявку',
      response: 'Связаться напрямую',
      fallback: 'Если форма не сработает, позвоните по телефону.',
      form: {
        badge: 'СИГНАЛ → TELEGRAM',
        title: 'Новая задача',
        hint: 'Коротко и по существу.',
        name: 'Как к вам обращаться?',
        namePlaceholder: 'Ваше имя',
        replyTo: 'Куда вам ответить?',
        replyToPlaceholder: '@username, телефон или email',
        service: 'Что вам нужно?',
        servicePlaceholder: 'Выберите тип услуги',
        services: [
          { value: 'math_lessons', label: 'Занятия по математике' },
          { value: 'physics_lessons', label: 'Занятия по физике' },
          { value: 'methodical_material', label: 'Методическая разработка или урок' },
          { value: 'tests_diagnostics', label: 'Тесты и диагностика' },
          { value: 'worksheets', label: 'Задачи и рабочие листы' },
          { value: 'edtech', label: 'Цифровой инструмент для обучения' },
          { value: 'other', label: 'Другая задача' },
        ],
        description: 'Кратко опишите задачу',
        descriptionPlaceholder:
          'Укажите предмет, тему, аудиторию и ожидаемый результат. Не отправляйте персональные данные учеников.',
        deadline: 'Срок',
        deadlinePlaceholder: 'Например: до 15 августа',
        optional: 'необязательно',
        privacy:
          'Я согласен(на) на обработку данных для связи. Заявка будет передана через Telegram.',
        note: 'Контактные данные не публикуются на сайте.',
        submit: 'Отправить заявку',
        sending: 'Отправляю…',
        successTitle: 'Заявка отправлена',
        success:
          'Спасибо! Я получил заявку и свяжусь с вами по указанному контакту.',
        reference: 'Номер заявки',
        referenceYours: 'Ваш номер заявки',
        copyReference: 'Скопировать номер',
        copiedReference: 'Скопировано',
        celebrationEyebrow: 'СИГНАЛ ПРИНЯТ · Φ 01',
        celebrationTitle: 'Связь установлена',
        celebrationText: 'Задача вышла на траекторию решения.',
        celebrationClose: 'Продолжить',
        celebrationDismiss: 'Закрыть анимацию',
        errors: {
          validation: 'Проверьте заполненные поля и попробуйте ещё раз.',
          rate_limited: 'Слишком много попыток. Попробуйте немного позже.',
          service_unconfigured:
            'Онлайн-заявки ещё не настроены. Позвоните по телефону.',
          delivery_failed:
            'Не удалось доставить заявку. Попробуйте ещё раз или позвоните.',
          generic: 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните.',
        },
      },
    },
    footer: {
      role: 'Преподаватель математики и физики · Методист · Разработчик',
      built: 'На пересечении образования и технологий',
    },
    demoViewer: {
      open: 'Открыть демо',
      similar: 'Заказать похожий материал',
      request: 'Обсудить разработку полной версии',
      close: 'Закрыть демо',
      previous: 'Предыдущая страница',
      next: 'Следующая страница',
      page: 'Страница',
      protected: 'Редактируемый оригинал не размещён на сайте',
      badge: 'Демо-макет для портфолио',
      noticeTitle: 'Демонстрационный макет, созданный для портфолио',
      notice:
        'Это ограниченный пример структуры и оформления материала. Редактируемый оригинал и ответы на сайте не размещены.',
      language: 'Язык материала: русский',
      dialog: 'Демонстрационный просмотр учебного материала',
      imageAlt: 'Демонстрационная страница с водяным знаком',
      blocked: 'В браузер передаётся только демо-фрагмент',
      stageLabel: 'Область просмотра страниц документа',
      loading: 'Загрузка демонстрационной страницы',
      loadError: 'Не удалось загрузить страницу',
      retry: 'Повторить',
      printMessage: 'DEMO · BOYAZID — демонстрационный фрагмент. Оригинал на сайте не размещён.',
    },
    mobileMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    navigationLabel: 'Основная навигация',
    mobileNavigationLabel: 'Мобильная навигация',
    languageSelector: 'Выбор языка',
    skip: 'Перейти к основному содержанию',
  },
}

const DEMO_DOCUMENTS = {
  mathGuide: {
    pages: ['/previews/math-guide-1.webp', '/previews/math-guide-2.webp'],
    ru: {
      title: 'Квадратные уравнения: от смысла к алгоритму',
      category: 'Методическое пособие',
      subject: 'Математика · Алгебра',
      level: '8 класс · демо-макет',
      description:
        'Фрагмент показывает учебные цели, логику объяснения и примеры заданий разного уровня сложности.',
    },
    uz: {
      title: "Kvadrat tenglamalar: mazmundan algoritmgacha",
      category: 'Metodik qo‘llanma',
      subject: 'Matematika · Algebra',
      level: '8-sinf · demo-maket',
      description:
        'Fragment o‘quv maqsadlarini, tushuntirish mantiqini va turli murakkablikdagi topshiriq namunalarini ko‘rsatadi.',
    },
  },
  physicsDiagnostic: {
    pages: ['/previews/physics-diagnostic-1.webp', '/previews/physics-diagnostic-2.webp'],
    ru: {
      title: 'Входная диагностика: основы механики',
      category: 'Диагностический материал',
      subject: 'Физика · Механика',
      level: '8 класс · демо-макет',
      description:
        'Фрагмент демонстрирует карту проверяемых умений, примеры заданий и один образец критерия оценивания.',
    },
    uz: {
      title: 'Kirish diagnostikasi: mexanika asoslari',
      category: 'Diagnostik material',
      subject: 'Fizika · Mexanika',
      level: '8-sinf · demo-maket',
      description:
        'Fragment tekshiriladigan ko‘nikmalar xaritasini, topshiriq namunalarini va bitta baholash mezoni namunasini ko‘rsatadi.',
    },
  },
  ohmWorksheet: {
    pages: ['/previews/ohm-worksheet-1.webp', '/previews/ohm-worksheet-2.webp'],
    ru: {
      title: 'Закон Ома: исследуем зависимость тока от напряжения',
      category: 'Рабочий лист',
      subject: 'Физика · Электричество',
      level: '8 класс · практикум',
      description:
        'Фрагмент содержит проблемный вопрос, схему цепи, таблицу наблюдений, поле для графика и рефлексию.',
    },
    uz: {
      title: 'Om qonuni: tok kuchining kuchlanishga bog‘liqligini o‘rganamiz',
      category: 'Ish varag‘i',
      subject: 'Fizika · Elektr',
      level: '8-sinf · amaliy ish',
      description:
        'Fragment muammoli savol, elektr zanjiri sxemasi, kuzatuv jadvali, grafik maydoni va refleksiyani o‘z ichiga oladi.',
    },
  },
}

const NAV_ITEMS = ['about', 'expertise', 'materials', 'contact']
const EXPERTISE_SERVICE_IDS = [
  'math_lessons',
  'physics_lessons',
  'methodical_material',
  'tests_diagnostics',
]
const MATERIAL_SERVICE_IDS = [
  'methodical_material',
  'tests_diagnostics',
  'worksheets',
  'methodical_material',
]
const DEMO_SERVICE_IDS = {
  mathGuide: 'methodical_material',
  physicsDiagnostic: 'tests_diagnostics',
  ohmWorksheet: 'worksheets',
}

function updateDemoQuery(demoId) {
  const url = new URL(window.location.href)
  if (demoId) {
    url.searchParams.set('demo', demoId)
  } else {
    url.searchParams.delete('demo')
  }
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
}

function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')
    const elements = document.querySelectorAll('.reveal')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

const ArrowIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.8 4.2 18.6 19c-.24 1.05-.87 1.31-1.76.82l-4.87-3.6-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.96 9.02-8.16c.39-.35-.09-.54-.61-.19L6.25 12.67 1.45 11.16c-1.04-.33-1.06-1.04.22-1.54L20.45 2.38c.87-.32 1.63.19 1.35 1.82Z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l1.5 4-2 1.5a15 15 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2 2C9.72 21 3 14.28 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path strokeLinecap="round" d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
)

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="8" y="8" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 8V6.8A1.8 1.8 0 0 0 14.2 5H6.8A1.8 1.8 0 0 0 5 6.8v7.4A1.8 1.8 0 0 0 6.8 16H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const LearningSuccessIcon = () => (
  <svg viewBox="0 0 88 88" fill="none" aria-hidden="true">
    <path
      d="M12 22.5c10.5-4.8 20.7-3.2 31.8 4.2v43C32.7 62.8 22.5 61.4 12 65.2V22.5Z"
      fill="currentColor"
      fillOpacity="0.13"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M76 22.5c-10.5-4.8-20.7-3.2-31.8 4.2v43C55.3 62.8 65.5 61.4 76 65.2V22.5Z"
      fill="currentColor"
      fillOpacity="0.07"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M44 27v42.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="m25 42 7 7 13-15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M54 39h13M54 48h10M54 57h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const EDUCATION_SYMBOLS = [
  ['ψ', 'symbol-one'],
  ['E = ħω', 'symbol-two'],
  ['ℏ', 'symbol-three'],
  ['Gμν', 'symbol-four'],
  ['ΔxΔp', 'symbol-five'],
  ['∂ψ/∂t', 'symbol-six'],
  ['Fμν', 'symbol-seven'],
]

const SUCCESS_CELEBRATION_MS = 14000
const FORMULA_STREAM =
  'ψ(x,t) · iℏ∂ψ/∂t = Ĥψ · E = ħω · ΔxΔp ≥ ħ/2 · Gμν + Λgμν = 8πGTμν/c⁴ · Fμν · ∮p·dq'

const EducationAmbient = ({ dark = false }) => (
  <div className={`education-ambient ${dark ? 'education-ambient-dark' : ''}`} aria-hidden="true">
    <div className="education-formula-stream">
      <div>
        <span>{FORMULA_STREAM}</span>
        <span>{FORMULA_STREAM}</span>
      </div>
    </div>
    <svg className="physics-wave" viewBox="0 0 1200 240" fill="none">
      <path
        className="physics-wave-primary"
        pathLength="1"
        d="M0 120C75 20 145 20 220 120S365 220 440 120S585 20 660 120S805 220 880 120S1025 20 1100 120S1170 210 1200 166"
      />
      <path
        className="physics-wave-secondary"
        pathLength="1"
        d="M0 120C55 67 108 67 165 120S275 173 330 120S440 67 495 120S605 173 660 120S770 67 825 120S935 173 990 120S1100 67 1200 120"
      />
    </svg>
    <span className="physics-wave-label">ψ(x,t)</span>
    <svg className="education-curve" viewBox="0 0 520 220" fill="none">
      <path className="education-curve-axis" d="M22 188H500M44 204V22" />
      <path
        className="education-curve-line"
        pathLength="1"
        d="M48 176C112 170 124 140 180 137C242 133 249 84 309 87C365 90 387 57 474 36"
      />
      <circle cx="180" cy="137" r="6" />
      <circle cx="309" cy="87" r="6" />
      <circle cx="474" cy="36" r="6" />
    </svg>
    <span className="education-ring education-ring-one" />
    <span className="education-ring education-ring-two" />
    <span className="education-triangle" />
    {EDUCATION_SYMBOLS.map(([symbol, position], index) => (
      <span
        key={symbol}
        className={`education-symbol ${position}`}
        style={{
          '--ambient-delay': `${index * -1.15}s`,
          '--ambient-duration': `${7.2 + (index % 4) * 1.1}s`,
          '--ambient-shift-x': `${18 + (index % 3) * 8}px`,
          '--ambient-shift-y': `${-(20 + (index % 4) * 7)}px`,
          '--ambient-rotation': `${4 + (index % 3) * 2}deg`,
        }}
      >
        {symbol}
      </span>
    ))}
  </div>
)

const PhysicsCore = ({ label }) => (
  <div className="quantum-console" aria-label={label} role="img">
    <div className="quantum-console-bar" aria-hidden="true">
      <span><i /> QUANTUM FIELD / ACTIVE</span>
      <small>φ · 01</small>
    </div>

    <div className="quantum-stage" aria-hidden="true">
      <div className="quantum-crosshair quantum-crosshair-x" />
      <div className="quantum-crosshair quantum-crosshair-y" />
      <div className="quantum-orbit quantum-orbit-a"><i /></div>
      <div className="quantum-orbit quantum-orbit-b"><i /></div>
      <div className="quantum-orbit quantum-orbit-c"><i /></div>
      <div className="quantum-core-pulse" />
      <div className="quantum-core">
        <span>ψ</span>
        <small>x,t</small>
      </div>
      <span className="quantum-formula quantum-formula-a">iℏ∂ψ/∂t = Ĥψ</span>
      <span className="quantum-formula quantum-formula-b">ΔxΔp ≥ ℏ/2</span>
      <span className="quantum-formula quantum-formula-c">E = ℏω</span>
      <span className="quantum-coordinate quantum-coordinate-a">x₁</span>
      <span className="quantum-coordinate quantum-coordinate-b">t₀</span>
    </div>

    <div className="quantum-wave-monitor" aria-hidden="true">
      <span>probability amplitude</span>
      <svg viewBox="0 0 560 92" preserveAspectRatio="none">
        <path className="quantum-wave-grid" d="M0 46H560M140 0V92M280 0V92M420 0V92" />
        <path
          className="quantum-wave-line"
          pathLength="1"
          d="M0 46C35 46 35 12 70 12S105 80 140 80S175 25 210 25S245 67 280 67S315 34 350 34S385 58 420 58S455 40 490 40S525 51 560 51"
        />
      </svg>
      <div><b>0.984</b><small>coherence</small></div>
    </div>

    <div className="quantum-readouts" aria-hidden="true">
      <span><i /> FIELD STABLE</span>
      <span>μ = 10⁻⁶</span>
      <span>Σ P = 1</span>
    </div>
  </div>
)

function sampledPath(equation, samples = 72, startX = 34, endX = 346) {
  return Array.from({ length: samples }, (_, index) => {
    const ratio = index / (samples - 1)
    const x = startX + (endX - startX) * ratio
    const y = equation(ratio, x)
    return `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join('')
}

const MaterialSimulation = ({ index }) => {
  const [progress, setProgress] = useState(0.28 + index * 0.14)
  const [inView, setInView] = useState(false)
  const [interacting, setInteracting] = useState(false)
  const simulationRef = useRef(null)

  useEffect(() => {
    const element = simulationRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || interacting || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setProgress((current) => (current + 0.0075) % 1)
    }, 70)
    return () => window.clearInterval(timer)
  }, [inView, interacting])

  const handlePointerMove = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    const bounds = event.currentTarget.getBoundingClientRect()
    setProgress(Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width)))
  }

  const handleTap = (event) => {
    if (event.pointerType === 'mouse') return
    setProgress((current) => (current + 0.23) % 1)
  }

  const axis = <path className="simulation-axis" d="M30 134H350M42 146V14" />

  let formula = 'f(x)'
  let readout = `a = ${(0.7 + progress * 1.8).toFixed(2)}`
  let simulation

  if (index === 0) {
    const factor = 0.0022 + progress * 0.0019
    const vertexX = 158 + progress * 48
    const curve = sampledPath((ratio, x) => 28 + (x - vertexX) ** 2 * factor)
    const markerX = 72 + progress * 244
    const markerY = 28 + (markerX - vertexX) ** 2 * factor
    const slope = 2 * factor * (markerX - vertexX)
    const tangentStartX = markerX - 46
    const tangentEndX = markerX + 46
    const tangentStartY = markerY - slope * 46
    const tangentEndY = markerY + slope * 46

    formula = 'f(x) = ax² + bx + c'
    simulation = (
      <>
        {axis}
        <path className="simulation-curve" d={curve} />
        <path
          className="simulation-tangent"
          d={`M${tangentStartX.toFixed(1)} ${tangentStartY.toFixed(1)}L${tangentEndX.toFixed(1)} ${tangentEndY.toFixed(1)}`}
        />
        <circle className="simulation-marker-halo" cx={markerX} cy={markerY} r="13" />
        <circle className="simulation-marker" cx={markerX} cy={markerY} r="5" />
        <circle className="simulation-vertex" cx={vertexX} cy="28" r="3.5" />
      </>
    )
  } else if (index === 1) {
    const phase = progress * Math.PI * 2
    const probability = sampledPath(
      (ratio) => 132 - Math.sin(ratio * Math.PI * 3 + phase) ** 2 * (80 - ratio * 22)
    )
    const markerX = 48 + progress * 286
    const ratio = (markerX - 34) / 312
    const markerY = 132 - Math.sin(ratio * Math.PI * 3 + phase) ** 2 * (80 - ratio * 22)

    formula = 'P(x) = |ψ(x)|²'
    readout = `P = ${Math.max(0.01, (1 - Math.abs(progress - 0.5) * 1.45)).toFixed(2)}`
    simulation = (
      <>
        {axis}
        <path className="simulation-curve simulation-probability" d={probability} />
        <path className="simulation-measurement" d={`M${markerX} 18V136`} />
        <circle className="simulation-marker-halo" cx={markerX} cy={markerY} r="15" />
        <circle className="simulation-marker" cx={markerX} cy={markerY} r="5.5" />
      </>
    )
  } else if (index === 2) {
    const voltage = 1 + progress * 11
    const resistance = 2.5 + (1 - progress) * 5.5
    const current = voltage / resistance
    const endY = 30 + resistance * 5.4
    const markerX = 66 + progress * 256
    const markerY = 134 - ((134 - endY) * (markerX - 42)) / 304

    formula = 'I = U / R'
    readout = `${voltage.toFixed(1)} V  ·  ${current.toFixed(2)} A`
    simulation = (
      <>
        {axis}
        <path className="simulation-curve simulation-ohm" d={`M42 134L346 ${endY.toFixed(1)}`} />
        <path className="simulation-guide" d={`M${markerX} ${markerY}V134M42 ${markerY}H${markerX}`} />
        <circle className="simulation-marker-halo" cx={markerX} cy={markerY} r="15" />
        <circle className="simulation-marker" cx={markerX} cy={markerY} r="5.5" />
      </>
    )
  } else {
    const phase = progress * Math.PI * 2
    const waveOne = sampledPath((ratio) => 78 + Math.sin(ratio * Math.PI * 4) * 23)
    const waveTwo = sampledPath((ratio) => 78 + Math.sin(ratio * Math.PI * 4 + phase) * 23)
    const result = sampledPath(
      (ratio) => 78 + (Math.sin(ratio * Math.PI * 4) + Math.sin(ratio * Math.PI * 4 + phase)) * 21
    )

    formula = 'ψ = ψ₁ + ψ₂'
    readout = `Δφ = ${(progress * 2).toFixed(2)}π`
    simulation = (
      <>
        {axis}
        <path className="simulation-wave-secondary" d={waveOne} />
        <path className="simulation-wave-secondary simulation-wave-two" d={waveTwo} />
        <path className="simulation-curve simulation-interference" d={result} />
      </>
    )
  }

  return (
    <div
      ref={simulationRef}
      className={`material-simulation simulation-${index + 1} ${interacting ? 'is-interacting' : ''}`}
      onPointerEnter={() => setInteracting(true)}
      onPointerLeave={() => setInteracting(false)}
      onPointerMove={handlePointerMove}
      onPointerUp={handleTap}
      aria-hidden="true"
    >
      <div className="simulation-readout">
        <span>{formula}</span>
        <strong>{readout}</strong>
      </div>
      <svg viewBox="0 0 380 160" preserveAspectRatio="none">
        {simulation}
      </svg>
      <div className="simulation-scan" />
    </div>
  )
}

const SCROLL_FIELD_FORMULAS = [
  'Gμν + Λgμν',
  '∫ ℒ d⁴x',
  'iℏ∂t|ψ⟩',
  'Rμν − ½Rgμν',
  '∇ · E = ρ/ε₀',
  'S = ∫ p dq',
  'ΔEΔt ≥ ℏ/2',
  '□φ + m²φ = 0',
]

const ScrollPhysicsField = () => (
  <div className="scroll-physics-field" aria-hidden="true">
    <div className="scroll-field-nebula" />
    <div className="scroll-spacetime-sheet" />

    <svg className="scroll-wave-ribbon" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        pathLength="1"
        d="M0 164C96 28 196 28 292 164S488 300 584 164S780 28 876 164S1072 300 1168 164S1354 44 1440 136"
      />
      <path
        pathLength="1"
        d="M0 164C72 92 144 92 216 164S360 236 432 164S576 92 648 164S792 236 864 164S1008 92 1080 164S1224 236 1296 164S1380 106 1440 142"
      />
    </svg>

    <svg className="scroll-trajectory" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <defs>
        <linearGradient id="scrollTrajectoryGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8d7bff" />
          <stop offset="48%" stopColor="#58bfff" />
          <stop offset="100%" stopColor="#55f1d8" />
        </linearGradient>
      </defs>
      <path
        className="scroll-trajectory-ghost"
        pathLength="1"
        d="M-40 742C132 650 154 272 350 318C534 361 467 712 684 661C873 617 763 208 1011 265C1174 303 1176 592 1468 448"
      />
      <path
        className="scroll-trajectory-line"
        pathLength="1"
        d="M-40 742C132 650 154 272 350 318C534 361 467 712 684 661C873 617 763 208 1011 265C1174 303 1176 592 1468 448"
      />
      <g className="scroll-trajectory-nodes">
        <circle cx="350" cy="318" r="7" />
        <circle cx="684" cy="661" r="7" />
        <circle cx="1011" cy="265" r="7" />
        <circle cx="1360" cy="494" r="7" />
      </g>
      <circle className="scroll-trajectory-marker-halo" cx="0" cy="0" r="18" />
      <circle className="scroll-trajectory-marker" cx="0" cy="0" r="7" />
    </svg>

    <div className="scroll-equation-cloud">
      {SCROLL_FIELD_FORMULAS.map((formula, index) => (
        <span key={formula} style={{ '--field-index': index }}>
          {formula}
        </span>
      ))}
    </div>

    <div className="scroll-tunnel">
      {Array.from({ length: 9 }, (_, index) => (
        <i key={index} style={{ '--ring-index': index }} />
      ))}
      <b>ψ</b>
    </div>

    <div className="scroll-particles">
      {Array.from({ length: 22 }, (_, index) => (
        <i
          key={index}
          style={{
            '--particle-x': `${(index * 47) % 101}%`,
            '--particle-y': `${(index * 73) % 97}%`,
            '--particle-shift': `${-260 - (index % 5) * 115}px`,
            '--particle-size': `${2 + (index % 3)}px`,
          }}
        />
      ))}
    </div>

    <div className="scroll-contact-target">
      <span />
      <i />
      <b>FORM · Φ</b>
    </div>

  </div>
)

export default function Home() {
  const [lang, setLang] = useState('uz')
  const [localeInitialized, setLocaleInitialized] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState(null)
  const [demoPage, setDemoPage] = useState(0)
  const [demoImageStatus, setDemoImageStatus] = useState('loading')
  const [demoImageRetry, setDemoImageRetry] = useState(0)
  const [contactStatus, setContactStatus] = useState('idle')
  const [contactResult, setContactResult] = useState(null)
  const [contactDetailsLength, setContactDetailsLength] = useState(0)
  const [celebrationOpen, setCelebrationOpen] = useState(false)
  const [referenceCopied, setReferenceCopied] = useState(false)
  const menuButtonRef = useRef(null)
  const mobileNavRef = useRef(null)
  const demoPageRef = useRef(0)
  const demoModalRef = useRef(null)
  const demoCloseRef = useRef(null)
  const demoStatusRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const contactStatusRef = useRef(null)
  const celebrationPanelRef = useRef(null)
  const celebrationCloseRef = useRef(null)
  const celebrationReturnFocusRef = useRef(null)
  const contactScrollFrameRef = useRef(null)
  const tr = CONTENT[lang]
  const demoDocument = activeDemo ? DEMO_DOCUMENTS[activeDemo] : null
  const demoContent = demoDocument ? demoDocument[lang] : null

  useScrollReveal()

  useEffect(
    () => () => {
      if (contactScrollFrameRef.current) {
        window.cancelAnimationFrame(contactScrollFrameRef.current)
      }
    },
    []
  )

  useEffect(() => {
    let frame = null
    const updatePointerField = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return
      if (frame) window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const x = event.clientX
        const y = event.clientY
        const normalizedX = (x / window.innerWidth - 0.5).toFixed(3)
        const normalizedY = (y / window.innerHeight - 0.5).toFixed(3)
        document.documentElement.style.setProperty('--pointer-x', `${x}px`)
        document.documentElement.style.setProperty('--pointer-y', `${y}px`)
        document.documentElement.style.setProperty('--field-x', normalizedX)
        document.documentElement.style.setProperty('--field-y', normalizedY)
      })
    }

    window.addEventListener('pointermove', updatePointerField, { passive: true })
    return () => {
      window.removeEventListener('pointermove', updatePointerField)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compactMotion = window.matchMedia('(max-width: 759px)')
    const scene = {
      nebula: document.querySelector('.scroll-field-nebula'),
      sheet: document.querySelector('.scroll-spacetime-sheet'),
      wave: document.querySelector('.scroll-wave-ribbon'),
      equations: document.querySelector('.scroll-equation-cloud'),
      tunnel: document.querySelector('.scroll-tunnel'),
      target: document.querySelector('.scroll-contact-target'),
      trajectoryPath: document.querySelector('.scroll-trajectory-line'),
      trajectoryMarker: document.querySelector('.scroll-trajectory-marker'),
      trajectoryMarkerHalo: document.querySelector('.scroll-trajectory-marker-halo'),
      particles: Array.from(document.querySelectorAll('.scroll-particles i')),
    }
    let frame = null

    const updateScrollField = () => {
      frame = null
      if (reducedMotion.matches) {
        root.style.setProperty('--scroll-progress', '0')
        root.style.setProperty('--contact-progress', '0')
        return
      }

      const scrollTop = window.scrollY
      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const scrollProgress = Math.min(1, Math.max(0, scrollTop / scrollRange))
      const contactSection = document.querySelector('#contact')
      let contactProgress = 0

      if (contactSection) {
        const contactTop = contactSection.getBoundingClientRect().top + scrollTop
        const approachStart = contactTop - window.innerHeight * 1.35
        const approachDistance = window.innerHeight * 1.2
        contactProgress = Math.min(1, Math.max(0, (scrollTop - approachStart) / approachDistance))
      }

      root.style.setProperty('--scroll-progress', scrollProgress.toFixed(4))
      root.style.setProperty('--contact-progress', contactProgress.toFixed(4))
      root.style.setProperty('--scroll-offset', `${scrollTop.toFixed(1)}px`)
      root.style.setProperty('--scroll-percent', `${(scrollProgress * 100).toFixed(2)}%`)

      if (scene.trajectoryPath) {
        scene.trajectoryPath.style.strokeDashoffset = String(1 - scrollProgress)
        const point = scene.trajectoryPath.getPointAtLength(
          scene.trajectoryPath.getTotalLength() * scrollProgress
        )
        scene.trajectoryMarker?.setAttribute('cx', point.x.toFixed(2))
        scene.trajectoryMarker?.setAttribute('cy', point.y.toFixed(2))
        scene.trajectoryMarkerHalo?.setAttribute('cx', point.x.toFixed(2))
        scene.trajectoryMarkerHalo?.setAttribute('cy', point.y.toFixed(2))
      }

      if (compactMotion.matches) return

      if (scene.nebula) {
        scene.nebula.style.transform = `translate3d(${-9 * scrollProgress}%, ${-7 * scrollProgress}%, 0) scale(${1 + scrollProgress * 0.2 + contactProgress * 0.26})`
        scene.nebula.style.opacity = String(0.55 + contactProgress * 0.3)
      }
      if (scene.sheet) {
        scene.sheet.style.transform = `rotateX(67deg) translateY(${-240 * scrollProgress}px) scale(${1 + contactProgress * 0.82})`
        scene.sheet.style.backgroundPosition = `0 ${-360 * scrollProgress}px, ${160 * scrollProgress}px 0`
        scene.sheet.style.opacity = String(0.24 + contactProgress * 0.34)
      }
      if (scene.wave) {
        scene.wave.style.top = `${36 - scrollProgress * 18}%`
        scene.wave.style.left = `${-12 - scrollProgress * 20}%`
        scene.wave.style.transform = `rotate(${-7 + scrollProgress * 17}deg) scale(${1 + contactProgress * 0.5})`
        scene.wave.style.opacity = String(0.2 + contactProgress * 0.2)
      }
      if (scene.equations) {
        scene.equations.style.transform = `translateY(${-170 * scrollProgress}px) scale(${1 + scrollProgress * 0.16})`
        scene.equations.style.opacity = String(0.42 - contactProgress * 0.12)
      }
      if (scene.tunnel) {
        scene.tunnel.style.left = `${70 + contactProgress * 2}%`
        scene.tunnel.style.top = `${49 + contactProgress * 3}%`
        scene.tunnel.style.opacity = String(0.14 + contactProgress * 0.82)
        scene.tunnel.style.transform = `translate(-50%, -50%) rotate(${scrollProgress * 105}deg) scale(${0.52 + scrollProgress * 0.28 + contactProgress * 1.35})`
      }
      if (scene.target) {
        scene.target.style.opacity = String(contactProgress)
        scene.target.style.transform = `translate(-50%, -50%) scale(${0.35 + contactProgress * 0.65})`
      }
      scene.particles.forEach((particle, index) => {
        const shift = -260 - (index % 5) * 115
        particle.style.transform = `translateY(${scrollProgress * shift}px) scale(${0.8 + contactProgress * 1.7})`
        particle.style.opacity = String(0.25 + contactProgress * 0.45)
      })
    }

    const requestScrollUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateScrollField)
    }

    updateScrollField()
    window.addEventListener('scroll', requestScrollUpdate, { passive: true })
    window.addEventListener('resize', requestScrollUpdate)
    reducedMotion.addEventListener?.('change', requestScrollUpdate)
    compactMotion.addEventListener?.('change', requestScrollUpdate)

    return () => {
      window.removeEventListener('scroll', requestScrollUpdate)
      window.removeEventListener('resize', requestScrollUpdate)
      reducedMotion.removeEventListener?.('change', requestScrollUpdate)
      compactMotion.removeEventListener?.('change', requestScrollUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const urlLanguage = query.get('lang')
    const urlDemo = query.get('demo')
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    const preferredLanguage = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'uz'
    const initialLanguage =
      urlLanguage === 'ru' || urlLanguage === 'uz'
        ? urlLanguage
        : savedLanguage === 'ru' || savedLanguage === 'uz'
          ? savedLanguage
          : preferredLanguage
    setLang(initialLanguage)
    setLocaleInitialized(true)
    if (urlDemo && Object.prototype.hasOwnProperty.call(DEMO_DOCUMENTS, urlDemo)) {
      setActiveDemo(urlDemo)
    }
  }, [])

  useEffect(() => {
    if (!localeInitialized) return
    document.documentElement.lang = lang
    window.localStorage.setItem('portfolio-language', lang)
  }, [lang, localeInitialized])

  useEffect(() => {
    if (!window.location.hash) return undefined
    const frame = window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        menuButtonRef.current?.focus()
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen && mobileNavRef.current?.contains(document.activeElement)) {
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    if (contactStatus !== 'success' && contactStatus !== 'error') return undefined
    const frame = window.requestAnimationFrame(() => contactStatusRef.current?.focus())
    return () => window.cancelAnimationFrame(frame)
  }, [contactStatus])

  useEffect(() => {
    if (!celebrationOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const backgroundElements = Array.from(
      document.querySelectorAll('.site-shell > :not(.success-celebration)')
    )
    const backgroundState = backgroundElements.map((element) => ({
      element,
      ariaHidden: element.getAttribute('aria-hidden'),
      hadInert: element.hasAttribute('inert'),
    }))

    document.body.style.overflow = 'hidden'
    backgroundElements.forEach((element) => {
      element.setAttribute('aria-hidden', 'true')
      element.setAttribute('inert', '')
    })

    const focusFrame = window.requestAnimationFrame(() => celebrationCloseRef.current?.focus())
    const closeTimer = window.setTimeout(
      () => setCelebrationOpen(false),
      SUCCESS_CELEBRATION_MS
    )
    const handleCelebrationKeys = (event) => {
      if (event.key === 'Escape') setCelebrationOpen(false)
      if (event.key !== 'Tab' || !celebrationPanelRef.current) return

      const focusable = celebrationPanelRef.current.querySelectorAll('button:not([disabled])')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (!celebrationPanelRef.current.contains(document.activeElement)) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleCelebrationKeys)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.clearTimeout(closeTimer)
      window.removeEventListener('keydown', handleCelebrationKeys)
      document.body.style.overflow = previousOverflow
      backgroundState.forEach(({ element, ariaHidden, hadInert }) => {
        if (ariaHidden === null) {
          element.removeAttribute('aria-hidden')
        } else {
          element.setAttribute('aria-hidden', ariaHidden)
        }
        if (!hadInert) element.removeAttribute('inert')
      })
      celebrationReturnFocusRef.current?.focus({ preventScroll: true })
    }
  }, [celebrationOpen])

  useEffect(() => {
    if (!activeDemo || !demoDocument) return undefined

    const previousOverflow = document.body.style.overflow
    const backgroundElements = Array.from(
      document.querySelectorAll('.site-shell > :not(.demo-overlay)')
    )
    const backgroundState = backgroundElements.map((element) => ({
      element,
      ariaHidden: element.getAttribute('aria-hidden'),
      hadInert: element.hasAttribute('inert'),
    }))

    document.body.style.overflow = 'hidden'
    document.body.classList.add('preview-open')
    backgroundElements.forEach((element) => {
      element.setAttribute('aria-hidden', 'true')
      element.setAttribute('inert', '')
    })

    const focusFrame = window.requestAnimationFrame(() => demoCloseRef.current?.focus())
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase()

      if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'p')) {
        event.preventDefault()
        return
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        setActiveDemo(null)
        updateDemoQuery(null)
        return
      }

      const eventTarget = event.target instanceof Element ? event.target : null
      const isInteractive = eventTarget?.closest(
        'button, a, input, select, textarea, [contenteditable="true"]'
      )
      const isInsideViewer = Boolean(eventTarget && demoModalRef.current?.contains(eventTarget))

      if (
        event.key === 'ArrowRight' &&
        isInsideViewer &&
        !isInteractive &&
        demoPageRef.current < demoDocument.pages.length - 1
      ) {
        event.preventDefault()
        const nextPage = demoPageRef.current + 1
        demoPageRef.current = nextPage
        setDemoImageStatus('loading')
        setDemoImageRetry(0)
        setDemoPage(nextPage)
      }

      if (
        event.key === 'ArrowLeft' &&
        isInsideViewer &&
        !isInteractive &&
        demoPageRef.current > 0
      ) {
        event.preventDefault()
        const nextPage = demoPageRef.current - 1
        demoPageRef.current = nextPage
        setDemoImageStatus('loading')
        setDemoImageRetry(0)
        setDemoPage(nextPage)
      }

      if (event.key === 'Tab' && demoModalRef.current) {
        const focusable = demoModalRef.current.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (!demoModalRef.current.contains(document.activeElement)) {
          event.preventDefault()
          ;(event.shiftKey ? last : first).focus()
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    const keepFocusInside = (event) => {
      if (!demoModalRef.current?.contains(event.target)) {
        demoCloseRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('focusin', keepFocusInside, true)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('focusin', keepFocusInside, true)
      document.body.style.overflow = previousOverflow
      document.body.classList.remove('preview-open')
      backgroundState.forEach(({ element, ariaHidden, hadInert }) => {
        if (ariaHidden === null) {
          element.removeAttribute('aria-hidden')
        } else {
          element.setAttribute('aria-hidden', ariaHidden)
        }
        if (!hadInert) element.removeAttribute('inert')
      })
      const focusTarget =
        lastFocusedRef.current?.isConnected && lastFocusedRef.current
          ? lastFocusedRef.current
          : document.querySelector('#main')
      focusTarget?.focus({ preventScroll: true })
      lastFocusedRef.current = null
    }
  }, [activeDemo, demoDocument])

  useEffect(() => {
    if (!activeDemo) return undefined
    const previousMessage = document.body.dataset.previewPrintMessage
    document.body.dataset.previewPrintMessage = tr.demoViewer.printMessage
    return () => {
      if (previousMessage === undefined) {
        delete document.body.dataset.previewPrintMessage
      } else {
        document.body.dataset.previewPrintMessage = previousMessage
      }
    }
  }, [activeDemo, tr.demoViewer.printMessage])

  const changeLanguage = (nextLanguage) => {
    setLang(nextLanguage)
    setMenuOpen(false)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', nextLanguage)
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }

  const closeMenu = () => {
    if (mobileNavRef.current?.contains(document.activeElement)) {
      menuButtonRef.current?.focus()
    }
    setMenuOpen(false)
  }
  const openDemo = (demoId) => {
    lastFocusedRef.current = document.activeElement
    demoPageRef.current = 0
    setDemoPage(0)
    setDemoImageStatus('loading')
    setDemoImageRetry(0)
    setActiveDemo(demoId)
    updateDemoQuery(demoId)
  }
  const closeDemo = () => {
    setActiveDemo(null)
    updateDemoQuery(null)
  }
  const selectDemoPage = (nextPage) => {
    if (nextPage === demoPage) return
    demoPageRef.current = nextPage
    setDemoImageStatus('loading')
    setDemoImageRetry(0)
    setDemoPage(nextPage)
  }
  const previousDemoPage = () => selectDemoPage(Math.max(demoPage - 1, 0))
  const nextDemoPage = () =>
    selectDemoPage(Math.min(demoPage + 1, (demoDocument?.pages.length || 1) - 1))
  const retryDemoImage = () => {
    setDemoImageStatus('loading')
    setDemoImageRetry((current) => current + 1)
    window.requestAnimationFrame(() => demoStatusRef.current?.focus())
  }
  const handleMaterialCardMotion = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width))
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height))
    event.currentTarget.style.setProperty('--card-tilt-x', `${(0.5 - y) * 4.5}deg`)
    event.currentTarget.style.setProperty('--card-tilt-y', `${(x - 0.5) * 5.5}deg`)
    event.currentTarget.style.setProperty('--card-glow-x', `${(x * 100).toFixed(1)}%`)
    event.currentTarget.style.setProperty('--card-glow-y', `${(y * 100).toFixed(1)}%`)
  }
  const resetMaterialCardMotion = (event) => {
    event.currentTarget.style.setProperty('--card-tilt-x', '0deg')
    event.currentTarget.style.setProperty('--card-tilt-y', '0deg')
    event.currentTarget.style.setProperty('--card-glow-x', '50%')
    event.currentTarget.style.setProperty('--card-glow-y', '50%')
  }
  const scrollToContactForm = (event, serviceId) => {
    event?.preventDefault()
    setMenuOpen(false)

    const contactSection = document.querySelector('#contact')
    if (!contactSection) return

    if (contactScrollFrameRef.current) {
      window.cancelAnimationFrame(contactScrollFrameRef.current)
    }

    const serviceField = contactSection.querySelector('select[name="service"]')
    if (serviceField && serviceId) {
      serviceField.value = serviceId
      serviceField.dispatchEvent(new Event('change', { bubbles: true }))
    }

    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0
    const startY = window.scrollY
    const orderForm = contactSection.querySelector('#order-form')
    const scrollTarget = window.innerWidth >= 900 && orderForm ? orderForm : contactSection
    const destinationY = Math.max(
      0,
      scrollTarget.getBoundingClientRect().top + startY - headerHeight
    )
    const distance = destinationY - startY
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reducedMotion ? 0 : 1250

    const finishTransition = () => {
      contactScrollFrameRef.current = null
      contactSection.classList.remove('contact-target-active')
      window.requestAnimationFrame(() => contactSection.classList.add('contact-target-active'))
      const url = new URL(window.location.href)
      url.hash = 'contact'
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    }

    if (!duration || Math.abs(distance) < 2) {
      window.scrollTo(0, destinationY)
      finishTransition()
      return
    }

    const startedAt = performance.now()
    const animateScroll = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration)
      const easedProgress = 1 - Math.pow(1 - progress, 4)
      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        contactScrollFrameRef.current = window.requestAnimationFrame(animateScroll)
      } else {
        finishTransition()
      }
    }

    contactScrollFrameRef.current = window.requestAnimationFrame(animateScroll)
  }
  const requestOrderFromDemo = () => {
    const serviceId = DEMO_SERVICE_IDS[activeDemo] || 'methodical_material'
    closeDemo()
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => scrollToContactForm(null, serviceId))
    })
  }
  const handleContactSubmit = async (event) => {
    event.preventDefault()
    if (contactStatus === 'sending') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      service: formData.get('service'),
      details: formData.get('details'),
      deadline: formData.get('deadline'),
      locale: lang,
      context: 'contact_section',
      consent: formData.get('consent') === 'accepted',
      website: formData.get('website'),
    }

    setContactStatus('sending')
    setContactResult(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.ok) {
        setContactStatus('error')
        setContactResult({ code: result?.code || 'generic' })
        return
      }

      form.reset()
      setContactDetailsLength(0)
      setContactStatus('success')
      setContactResult({ requestId: result.requestId || null })
      setReferenceCopied(false)
      celebrationReturnFocusRef.current = form.querySelector('button[type="submit"]')
      setCelebrationOpen(true)
    } catch {
      setContactStatus('error')
      setContactResult({ code: 'generic' })
    }
  }

  const copyRequestReference = async () => {
    const reference = contactResult?.requestId
    if (!reference) return

    try {
      await navigator.clipboard.writeText(reference)
      setReferenceCopied(true)
      return
    } catch {
      const copyField = document.createElement('textarea')
      copyField.value = reference
      copyField.setAttribute('readonly', '')
      copyField.style.position = 'fixed'
      copyField.style.opacity = '0'
      document.body.appendChild(copyField)
      copyField.select()
      const copied = document.execCommand('copy')
      copyField.remove()
      if (copied) setReferenceCopied(true)
    }
  }

  return (
    <div className="site-shell">
      <ScrollPhysicsField />
      <div className="global-pointer-field" aria-hidden="true" />
      <div className="scroll-page-meter" aria-hidden="true">
        <span>FIELD / DEPTH</span>
        <i><b /></i>
        <strong>Φ</strong>
      </div>
      <a className="skip-link" href="#main">
        {tr.skip}
      </a>

      <header className="site-header">
        <div className="container-wide header-inner">
          <a href="#about" className="brand" onClick={closeMenu} aria-label="Boyazid">
            <span className="brand-symbol" aria-hidden="true">
              B
            </span>
            <span>
              <span className="brand-name">Boyazid</span>
              <span className="brand-role">education × technology</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label={tr.navigationLabel}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={item === 'contact' ? (event) => scrollToContactForm(event) : undefined}
              >
                {tr.nav[item]}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="language-switch" aria-label={tr.languageSelector}>
              {['uz', 'ru'].map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => changeLanguage(language)}
                  className={lang === language ? 'active' : ''}
                  aria-pressed={lang === language}
                  aria-label={CONTENT[language].languageName}
                >
                  {language}
                </button>
              ))}
            </div>

            <a
              className="header-contact"
              href="#contact"
              onClick={(event) => scrollToContactForm(event)}
            >
              {tr.nav.contact}
              <ArrowIcon />
            </a>

            <button
              ref={menuButtonRef}
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? tr.closeMenu : tr.mobileMenu}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          ref={mobileNavRef}
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="container-wide" aria-label={tr.mobileNavigationLabel}>
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={
                  item === 'contact'
                    ? (event) => scrollToContactForm(event)
                    : closeMenu
                }
                tabIndex={menuOpen ? undefined : -1}
              >
                <span>0{index + 1}</span>
                {tr.nav[item]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex="-1">
        <section id="about" className="hero-section">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <EducationAmbient dark />

          <div className="container-wide hero-layout">
            <div className="hero-copy">
              <div className="hero-eyebrow reveal">
                <span className="availability-dot" aria-hidden="true" />
                {tr.hero.eyebrow}
              </div>

              <h1 className="hero-title reveal">
                {tr.hero.title}{' '}
                <span className="gradient-ink">{tr.hero.accent}</span>{' '}
                {tr.hero.tail}
              </h1>

              <p className="hero-description reveal">{tr.hero.description}</p>

              <div className="hero-buttons reveal">
                <a href="#materials" className="button button-primary">
                  {tr.hero.primary}
                  <ArrowIcon />
                </a>
                <a
                  href="#contact"
                  className="button button-secondary"
                  onClick={(event) => scrollToContactForm(event)}
                >
                  {tr.hero.secondary}
                </a>
              </div>

              <div className="hero-availability reveal">
                <span className="availability-icon">
                  <CheckIcon />
                </span>
                {tr.hero.availability}
              </div>

              <div className="focus-list reveal" aria-label={tr.hero.eyebrow}>
                {tr.hero.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal">
              <PhysicsCore label={tr.hero.visualTitle} />
            </div>
          </div>
        </section>

        <section id="expertise" className="section section-soft">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow reveal">{tr.expertise.eyebrow}</p>
                <h2 className="section-title reveal">{tr.expertise.title}</h2>
              </div>
              <p className="section-intro reveal">{tr.expertise.intro}</p>
            </div>

            <div className="expertise-grid">
              {tr.expertise.items.map((item, index) => (
                <a
                  className="expertise-card reveal"
                  href="#contact"
                  key={item.title}
                  onClick={(event) => scrollToContactForm(event, EXPERTISE_SERVICE_IDS[index])}
                  aria-label={`${item.title} — ${tr.contact.primary}`}
                >
                  <span className="card-field-glow" aria-hidden="true" />
                  <div className="expertise-top">
                    <span className="expertise-symbol" aria-hidden="true">
                      {item.symbol}
                    </span>
                    <span className="expertise-index">{item.index}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="card-orbit-link" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="materials" className="section section-white materials-section">
          <div className="container-wide materials-container">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow reveal">{tr.materials.eyebrow}</p>
                <h2 className="section-title reveal">{tr.materials.title}</h2>
              </div>
              <p className="section-intro reveal">{tr.materials.intro}</p>
            </div>

            <div className="materials-grid">
              {tr.materials.items.map((item, index) => (
                <article
                  className={`material-card tone-${item.tone} reveal`}
                  key={item.title}
                  onPointerMove={handleMaterialCardMotion}
                  onPointerLeave={resetMaterialCardMotion}
                >
                  <div className="material-preview" aria-hidden="true">
                    <div className="preview-top">
                      <span>{item.type}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <MaterialSimulation index={index} />
                  </div>

                  <div className="material-content">
                    <div className="material-meta">
                      <span>{item.meta[0]}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="material-actions">
                      {item.demo && (
                      <button
                        type="button"
                        data-demo-trigger={item.demo}
                        onClick={() => openDemo(item.demo)}
                      >
                        <EyeIcon />
                        {tr.demoViewer.open}
                        </button>
                      )}
                      <a
                        href="#contact"
                        onClick={(event) => scrollToContactForm(event, MATERIAL_SERVICE_IDS[index])}
                      >
                        {item.demo ? tr.demoViewer.similar : tr.materials.request}
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-grid-pattern" aria-hidden="true" />
          <EducationAmbient dark />
          <div className="container-wide contact-inner">
            <div className="contact-copy">
              <p className="section-eyebrow section-eyebrow-light reveal">{tr.contact.eyebrow}</p>
              <h2 className="reveal">{tr.contact.title}</h2>
              <p className="reveal">{tr.contact.text}</p>
              <div className="contact-card reveal">
                <p>{tr.contact.response}</p>
                <span className="contact-fallback-note">{tr.contact.fallback}</span>
                <a
                  href="https://t.me/sultoniiy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-link-icon telegram">
                    <TelegramIcon />
                  </span>
                  <span>
                    <small>Telegram</small>
                    @sultoniiy
                  </span>
                  <ArrowIcon />
                </a>
                <a href="tel:+998949560127">
                  <span className="contact-link-icon phone">
                    <PhoneIcon />
                  </span>
                  <span>
                    <small>Phone</small>
                    +998 94 956 01 27
                  </span>
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <form
              id="order-form"
              className="contact-form reveal"
              onSubmit={handleContactSubmit}
              aria-labelledby="contact-form-title"
              aria-busy={contactStatus === 'sending'}
            >
              <div className="contact-form-target-lock" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <div className="contact-form-header">
                <span>{tr.contact.form.badge}</span>
                <h3 id="contact-form-title">{tr.contact.form.title}</h3>
                <p>{tr.contact.form.hint}</p>
              </div>

              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>
                    {tr.contact.form.name} <b aria-hidden="true">*</b>
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    minLength="2"
                    maxLength="80"
                    placeholder={tr.contact.form.namePlaceholder}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>
                    {tr.contact.form.replyTo} <b aria-hidden="true">*</b>
                  </span>
                  <input
                    type="text"
                    name="contact"
                    autoComplete="email"
                    minLength="3"
                    maxLength="120"
                    placeholder={tr.contact.form.replyToPlaceholder}
                    required
                  />
                </label>

                <label className="contact-field contact-field-full">
                  <span>
                    {tr.contact.form.service} <b aria-hidden="true">*</b>
                  </span>
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      {tr.contact.form.servicePlaceholder}
                    </option>
                    {tr.contact.form.services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="contact-field contact-field-full">
                  <span className="contact-field-label">
                    <span>
                      {tr.contact.form.description} <b aria-hidden="true">*</b>
                    </span>
                    <small aria-live="off">{contactDetailsLength}/1500</small>
                  </span>
                  <textarea
                    name="details"
                    minLength="20"
                    maxLength="1500"
                    rows="6"
                    placeholder={tr.contact.form.descriptionPlaceholder}
                    onInput={(event) => setContactDetailsLength(event.currentTarget.value.length)}
                    required
                  />
                </label>

                <label className="contact-field contact-field-full">
                  <span className="contact-field-label">
                    <span>{tr.contact.form.deadline}</span>
                    <small>{tr.contact.form.optional}</small>
                  </span>
                  <input
                    type="text"
                    name="deadline"
                    maxLength="120"
                    placeholder={tr.contact.form.deadlinePlaceholder}
                  />
                </label>
              </div>

              <div className="contact-website-field" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex="-1"
                />
              </div>

              <label className="contact-consent">
                <input type="checkbox" name="consent" value="accepted" required />
                <span aria-hidden="true">
                  <CheckIcon />
                </span>
                <em>{tr.contact.form.privacy}</em>
              </label>

              <button
                className="contact-submit"
                type="submit"
                disabled={contactStatus === 'sending'}
              >
                {contactStatus === 'sending' ? (
                  <span className="contact-submit-spinner" aria-hidden="true" />
                ) : (
                  <TelegramIcon />
                )}
                {contactStatus === 'sending'
                  ? tr.contact.form.sending
                  : tr.contact.form.submit}
                {contactStatus !== 'sending' && <ArrowIcon />}
              </button>

              <div className="contact-form-feedback" aria-live="polite">
                {contactStatus === 'success' && (
                  <div
                    ref={contactStatusRef}
                    className="contact-form-status success"
                    role="status"
                    tabIndex="-1"
                  >
                    <span aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <div>
                      <strong>{tr.contact.form.successTitle}</strong>
                      <p>{tr.contact.form.success}</p>
                      {contactResult?.requestId && (
                        <small>
                          {tr.contact.form.reference}: {contactResult.requestId}
                        </small>
                      )}
                    </div>
                  </div>
                )}
                {contactStatus === 'error' && (
                  <div
                    ref={contactStatusRef}
                    className="contact-form-status error"
                    role="alert"
                    tabIndex="-1"
                  >
                    <span aria-hidden="true">!</span>
                    <div>
                      <strong>
                        {tr.contact.form.errors[contactResult?.code]
                          ? tr.contact.form.errors[contactResult.code]
                          : tr.contact.form.errors.generic}
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              <p className="contact-form-note">
                <LockIcon />
                {tr.contact.form.note}
              </p>
            </form>
          </div>
        </section>
      </main>

      {celebrationOpen && (
        <div className="success-celebration">
          <div className="success-celebration-grid" aria-hidden="true" />
          <div className="success-burst" aria-hidden="true" />
          <section
            ref={celebrationPanelRef}
            className="success-celebration-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-celebration-title"
            aria-describedby="success-celebration-description"
          >
            <button
              ref={celebrationCloseRef}
              className="success-celebration-close"
              type="button"
              onClick={() => setCelebrationOpen(false)}
              aria-label={tr.contact.form.celebrationDismiss}
            >
              <CloseIcon />
            </button>

            <div className="success-scene" aria-hidden="true">
              <div className="success-detector-beam" />
              <svg className="success-signal-wave" viewBox="0 0 620 120" preserveAspectRatio="none">
                <path
                  pathLength="1"
                  d="M0 60H92L116 59L132 16L153 104L176 60H235L250 46L266 75L281 60H345L365 25L387 94L409 60H472L487 52L501 67L516 60H620"
                />
              </svg>
              <div className="success-orbit success-orbit-outer">
                <span>ψ</span>
                <span>E = ħω</span>
                <span>ℏ</span>
              </div>
              <div className="success-orbit success-orbit-inner">
                <span>Δp</span>
                <span>Gμν</span>
              </div>
              <div className="success-particles">
                {Array.from({ length: 18 }, (_, index) => (
                  <i
                    key={index}
                    style={{
                      '--particle-angle': `${index * 20}deg`,
                      '--particle-distance': `${118 + (index % 4) * 26}px`,
                      '--particle-delay': `${(index % 5) * 0.06}s`,
                    }}
                  />
                ))}
              </div>
              <div className="success-core-halo" />
              <div className="success-core">
                <LearningSuccessIcon />
              </div>
              <div className="success-coordinates">
                <span>x: 41.311</span>
                <span>t: NOW</span>
                <span>P: 1.000</span>
              </div>
            </div>

            <div className="success-celebration-copy">
              <span>{tr.contact.form.celebrationEyebrow}</span>
              <h2 id="success-celebration-title">{tr.contact.form.celebrationTitle}</h2>
              <p id="success-celebration-description">{tr.contact.form.celebrationText}</p>
              {contactResult?.requestId && (
                <div className={`success-reference-card ${referenceCopied ? 'copied' : ''}`}>
                  <span>{tr.contact.form.referenceYours}</span>
                  <div>
                    <strong>{contactResult.requestId}</strong>
                    <button
                      type="button"
                      onClick={copyRequestReference}
                      aria-label={referenceCopied
                        ? tr.contact.form.copiedReference
                        : tr.contact.form.copyReference}
                    >
                      {referenceCopied ? <CheckIcon /> : <CopyIcon />}
                      <span aria-live="polite">
                        {referenceCopied
                          ? tr.contact.form.copiedReference
                          : tr.contact.form.copyReference}
                      </span>
                    </button>
                  </div>
                </div>
              )}
              <button type="button" onClick={() => setCelebrationOpen(false)}>
                <CheckIcon />
                {tr.contact.form.celebrationClose}
              </button>
            </div>

            <div className="success-celebration-progress" aria-hidden="true">
              <span />
            </div>
          </section>
        </div>
      )}

      {demoDocument && demoContent && (
        <div
          className="demo-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDemo()
          }}
        >
          <section
            ref={demoModalRef}
            className="demo-modal"
            role="dialog"
            aria-modal="true"
            aria-label={tr.demoViewer.dialog}
            aria-describedby="demo-viewer-notice"
            onContextMenu={(event) => event.preventDefault()}
          >
            <header className="demo-modal-header">
              <div className="demo-modal-brand">
                <span className="brand-symbol" aria-hidden="true">
                  B
                </span>
                <span>
                  <strong>Boyazid</strong>
                  <small>{tr.demoViewer.badge}</small>
                </span>
              </div>
              <div className="demo-protection-label">
                <LockIcon />
                {tr.demoViewer.protected}
              </div>
              <button
                ref={demoCloseRef}
                className="demo-close-button"
                type="button"
                onClick={closeDemo}
                aria-label={tr.demoViewer.close}
              >
                <CloseIcon />
              </button>
            </header>

            <div className="demo-modal-body">
              <aside className="demo-sidebar">
                <span className="demo-category">{demoContent.category}</span>
                <h2>{demoContent.title}</h2>
                <p>{demoContent.description}</p>

                <div className="demo-meta-list">
                  <span>{demoContent.subject}</span>
                  <span>{demoContent.level}</span>
                  <span>{tr.demoViewer.language}</span>
                </div>

                <div id="demo-viewer-notice" className="demo-notice">
                  <span>
                    <LockIcon />
                  </span>
                  <div>
                    <strong>{tr.demoViewer.noticeTitle}</strong>
                    <p>{tr.demoViewer.notice}</p>
                  </div>
                </div>

                <div className="demo-thumbnails" aria-label={tr.demoViewer.page}>
                  {demoDocument.pages.map((page, index) => (
                    <button
                      key={page}
                      type="button"
                      className={demoPage === index ? 'active' : ''}
                      onClick={() => selectDemoPage(index)}
                      aria-label={`${tr.demoViewer.page} ${index + 1}`}
                      aria-pressed={demoPage === index}
                    >
                      <img src={page} alt="" draggable="false" />
                      <span>
                        {tr.demoViewer.page} {index + 1}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="demo-request-button"
                  onClick={requestOrderFromDemo}
                >
                  <TelegramIcon />
                  {tr.demoViewer.request}
                  <ArrowIcon />
                </button>
              </aside>

              <div
                className="demo-stage"
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
                onCopy={(event) => event.preventDefault()}
                tabIndex="0"
                role="region"
                aria-label={tr.demoViewer.stageLabel}
                aria-keyshortcuts="ArrowLeft ArrowRight"
              >
                <div className="demo-stage-toolbar" aria-live="polite" aria-atomic="true">
                  <span>
                    {tr.demoViewer.page} {demoPage + 1} / {demoDocument.pages.length}
                  </span>
                  <span>
                    <LockIcon />
                    {tr.demoViewer.blocked}
                  </span>
                </div>

                <div className="demo-page-frame">
                  {demoImageStatus !== 'loaded' && (
                    <div
                      ref={demoStatusRef}
                      className={`demo-image-status ${demoImageStatus === 'error' ? 'error' : ''}`}
                      role={demoImageStatus === 'error' ? 'alert' : 'status'}
                      tabIndex="-1"
                    >
                      {demoImageStatus === 'loading' ? (
                        <>
                          <span className="demo-loading-spinner" aria-hidden="true" />
                          <strong>{tr.demoViewer.loading}</strong>
                        </>
                      ) : (
                        <>
                          <strong>{tr.demoViewer.loadError}</strong>
                          <button type="button" onClick={retryDemoImage}>
                            {tr.demoViewer.retry}
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  <img
                    key={`${demoDocument.pages[demoPage]}-${demoImageRetry}`}
                    className={`demo-page-image ${demoImageStatus === 'loaded' ? 'loaded' : ''}`}
                    src={`${demoDocument.pages[demoPage]}${demoImageRetry ? `?retry=${demoImageRetry}` : ''}`}
                    alt={`${tr.demoViewer.imageAlt}: ${demoContent.title}, ${tr.demoViewer.page} ${demoPage + 1}`}
                    draggable="false"
                    decoding="async"
                    onLoad={() => setDemoImageStatus('loaded')}
                    onError={() => setDemoImageStatus('error')}
                  />
                  <div className="demo-screen-watermark" aria-hidden="true">
                    <span>DEMO · BOYAZID</span>
                    <span>DEMO · BOYAZID</span>
                    <span>DEMO · BOYAZID</span>
                  </div>
                </div>

                <div className="demo-pagination">
                  <button
                    type="button"
                    onClick={previousDemoPage}
                    disabled={demoPage === 0}
                    aria-label={tr.demoViewer.previous}
                  >
                    <ArrowIcon />
                    <span>{tr.demoViewer.previous}</span>
                  </button>

                  <div aria-hidden="true">
                    {demoDocument.pages.map((page, index) => (
                      <span key={page} className={demoPage === index ? 'active' : ''} />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextDemoPage}
                    disabled={demoPage === demoDocument.pages.length - 1}
                    aria-label={tr.demoViewer.next}
                  >
                    <span>{tr.demoViewer.next}</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
