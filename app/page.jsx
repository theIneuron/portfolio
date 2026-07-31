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
      eyebrow: "O'qituvchi · Metodist · EdTech",
      title: 'Murakkab mavzularni',
      accent: 'tushunarli tizimga',
      tail: 'aylantiraman.',
      description:
        "Matematika va fizika fanlaridan dars beraman, metodik qo'llanmalar va test materiallarini ishlab chiqaman, ta'lim uchun raqamli vositalar yarataman.",
      primary: "Materiallarni ko'rish",
      secondary: 'Vazifani muhokama qilish',
      availability: 'Hamkorlik va yangi ta’lim loyihalari uchun ochiqman',
      focus: ['Matematika', 'Fizika', 'Metodika', 'EdTech'],
      visualLabel: "Ta'lim modeli",
      visualTitle: 'Tushunishdan natijagacha',
      visualSteps: ['Mavzu', 'Tushunish', 'Amaliyot', 'Tekshirish'],
      visualNote: "Har bir material aniq maqsad, mantiqiy tuzilma va bilimni tekshirish mezoniga ega.",
    },
    about: {
      eyebrow: 'mening yondashuvim',
      title: "Ta'lim, metodika va texnologiya bir nuqtada",
      lead:
        "Mening asosiy faoliyatim — matematika va fizika fanlarini o'qitish hamda sifatli o'quv materiallarini yaratish.",
      body:
        "Murakkab tushunchalarni bosqichma-bosqich tushuntirish, topshiriqlarni o'quv maqsadiga mos tuzish va natijani xolis baholashga e'tibor beraman. Dasturlash ko'nikmalarim esa testlar, botlar va boshqa raqamli ta'lim vositalarini yaratishga yordam beradi.",
      principlesTitle: 'Ish tamoyillari',
      principles: [
        'Murakkab mavzuni sodda va aniq tilda tushuntirish',
        "Nazariya, amaliyot va tekshiruvni yagona tizimga bog'lash",
        "Materialni auditoriya va o'quv maqsadiga moslashtirish",
      ],
      audiencesTitle: 'Kimlar uchun',
      audiences: [
        {
          number: '01',
          title: "O'quvchilar",
          text: "Mavzuni tushunish, bilimdagi bo'shliqlarni aniqlash va tizimli mashq qilish uchun.",
        },
        {
          number: '02',
          title: "O'qituvchilar",
          text: "Tayyor metodik tuzilma, topshiriqlar, testlar va dars materiallari uchun.",
        },
        {
          number: '03',
          title: "Maktab va markazlar",
          text: "O'quv dasturlari, diagnostika va maxsus ta'lim mahsulotlarini ishlab chiqish uchun.",
        },
      ],
    },
    expertise: {
      eyebrow: 'professional yo‘nalishlar',
      title: 'Men nima bilan yordam bera olaman',
      intro:
        "Dars berishdan tortib tayyor metodik mahsulotgacha — mazmun, tuzilma va tekshiruv mezonlarini birgalikda ishlab chiqaman.",
      items: [
        {
          symbol: '∑',
          index: '01',
          title: "Matematika o'qitish",
          text: "Mavzularni mantiqiy ketma-ketlikda tushuntirish, masala yechish strategiyasi va mustahkamlovchi mashqlar.",
          points: ['Nazariy tushuntirish', 'Masala yechish algoritmlari', 'Darajali topshiriqlar'],
        },
        {
          symbol: 'φ',
          index: '02',
          title: "Fizika o'qitish",
          text: "Fizik hodisalarni mazmunan anglash, formulalarni tushunib qo'llash va amaliy masalalar bilan ishlash.",
          points: ['Hodisa va qonunlar', 'Formulalar bilan ishlash', 'Amaliy masalalar'],
        },
        {
          symbol: '◇',
          index: '03',
          title: 'Metodik ishlab chiqish',
          text: "O'quv maqsadi, mavzu mantig'i va auditoriya darajasiga mos qo'llanma hamda dars materiallari.",
          points: ["Metodik qo'llanmalar", 'Dars ishlanmalari', 'Ishchi varaqlar'],
        },
        {
          symbol: '✓',
          index: '04',
          title: 'Test va diagnostika',
          text: "Bilimni aniq o'lchaydigan savollar, darajalar bo'yicha topshiriqlar va tushunarli baholash mezonlari.",
          points: ['Diagnostik testlar', 'Nazorat materiallari', 'Javob va mezonlar'],
        },
      ],
    },
    materials: {
      eyebrow: 'metodik mahsulotlar',
      title: 'Sizning vazifangiz uchun ishlab chiqaman',
      intro:
        "Har bir material tayyor shablon emas — fan, yosh, maqsad va foydalanish formatiga moslab tuziladi.",
      request: "Materialni muhokama qilish",
      items: [
        {
          type: "Qo'llanma",
          title: "Metodik qo'llanmalar",
          text: "Mavzu tuzilmasi, tushuntirish usullari, misollar va o'qituvchi uchun amaliy tavsiyalar.",
          meta: ['PDF / DOCX', 'Bosma va raqamli'],
          preview: ['Maqsad va natija', 'Nazariya va misollar', 'Metodik tavsiyalar'],
          tone: 'violet',
          demo: 'mathGuide',
        },
        {
          type: 'Baholash',
          title: 'Test materiallari',
          text: "Kirish, joriy yoki yakuniy nazorat uchun testlar, javoblar va baholash mezonlari.",
          meta: ['Test / Google Forms', 'Javoblar bilan'],
          preview: ['Diagnostika', 'Darajali savollar', 'Baholash mezoni'],
          tone: 'cyan',
          demo: 'physicsDiagnostic',
        },
        {
          type: 'Amaliyot',
          title: "Masalalar va ishchi varaqlar",
          text: "Oddiydan murakkabga o'tadigan topshiriqlar, mustaqil ish va mavzuni mustahkamlash materiallari.",
          meta: ['PDF / Print', "O'quvchi uchun"],
          preview: ['Asosiy mashqlar', 'Amaliy masalalar', 'Mustaqil ish'],
          tone: 'amber',
          demo: 'ohmWorksheet',
        },
        {
          type: 'Dars',
          title: 'Dars ishlanmalari',
          text: "Dars maqsadi, bosqichlari, faoliyatlar, taqdimot tuzilmasi va yakuniy refleksiya.",
          meta: ['PPTX / DOCX', "O'qituvchi uchun"],
          preview: ['Dars ssenariysi', 'Taqdimot rejasi', 'Refleksiya'],
          tone: 'green',
        },
      ],
    },
    process: {
      eyebrow: 'ish jarayoni',
      title: "G'oyadan tayyor materialgacha",
      items: [
        {
          number: '01',
          title: 'Vazifani aniqlash',
          text: 'Auditoriya, fan, mavzu, maqsad va foydalanish formatini belgilaymiz.',
        },
        {
          number: '02',
          title: 'Tuzilmani yaratish',
          text: "Mazmun mantig'i, murakkablik darajalari va natijani tekshirish usulini rejalayman.",
        },
        {
          number: '03',
          title: 'Materialni ishlab chiqish',
          text: "Matn, topshiriqlar, javoblar va vizual tuzilmani yagona mahsulotga birlashtiraman.",
        },
        {
          number: '04',
          title: 'Tekshirish va topshirish',
          text: "Aniqlik, mantiq va foydalanish qulayligini tekshirib, kerakli formatda taqdim qilaman.",
        },
      ],
    },
    projects: {
      eyebrow: 'texnologiyalar orqali ta’lim',
      title: 'Raqamli loyihalar',
      intro:
        "Dasturlash men uchun alohida yo'nalish bo'lishi bilan birga, ta'lim jarayonini qulayroq va samaraliroq qilish vositasidir.",
      ready: 'Tayyor',
      development: 'Ishlanmoqda',
      demo: 'Demo',
      nextFocus: 'Keyingi yo‘nalish',
      nextTitle: 'Ta’lim uchun raqamli vositalar',
      nextText:
        "Onlayn testlar, bilim diagnostikasi va o'quv materiallari bilan ishlashni soddalashtiruvchi servislar.",
      items: [
        {
          icon: 'TM',
          category: 'Full-stack ilova',
          title: 'Task Manager',
          text: 'JWT va bcrypt orqali autentifikatsiya, vazifalar CRUD va foydalanuvchi rollari.',
          tags: ['Next.js', 'MongoDB', 'JWT'],
          done: true,
          demo: 'https://project-1-task-manager-amber.vercel.app',
        },
        {
          icon: 'LS',
          category: 'Web servis',
          title: 'Link Shortener',
          text: 'Qisqa havolalar, unikal slug, klik statistikasi va foydalanuvchi paneli.',
          tags: ['Next.js', 'MongoDB', 'Analytics'],
          done: false,
          demo: null,
        },
        {
          icon: 'TB',
          category: 'Telegram vosita',
          title: 'Telegram Notes Bot',
          text: 'Telegram orqali eslatmalarni saqlash uchun serverless webhook asosidagi bot.',
          tags: ['Node.js', 'Telegram API', 'MongoDB'],
          done: false,
          demo: null,
        },
      ],
    },
    contact: {
      eyebrow: 'hamkorlik',
      title: "Keling, foydali ta'lim mahsulotini birga yarataylik",
      text:
        "Dars, metodik qo'llanma, test materiallari yoki raqamli ta'lim vositasi kerak bo'lsa, vazifangizni muhokama qilishga tayyorman.",
      primary: 'Telegram botni ochish',
      response: 'To‘g‘ridan-to‘g‘ri bog‘lanish',
      fallback: 'Forma ishlamasa, Telegram botni oching yoki qo‘ng‘iroq qiling.',
      form: {
        badge: 'Ariza → Telegram',
        title: 'Vazifangiz haqida yozing',
        hint: 'Ariza to‘g‘ridan-to‘g‘ri menga keladi. Odatda Telegram yoki telefon orqali javob beraman.',
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
        errors: {
          validation: 'Maydonlarni tekshiring va yana urinib ko‘ring.',
          rate_limited: 'Juda ko‘p urinish bo‘ldi. Birozdan keyin qayting yoki Telegram botni oching.',
          service_unconfigured:
            'Onlayn arizalar hali sozlanmagan. Telegram botni oching yoki qo‘ng‘iroq qiling.',
          delivery_failed:
            'Arizani yetkazib bo‘lmadi. Telegram botni oching yoki keyinroq urinib ko‘ring.',
          generic: 'Arizani yuborib bo‘lmadi. Telegram botni oching yoki keyinroq urinib ko‘ring.',
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
      eyebrow: 'Преподаватель · Методист · EdTech',
      title: 'Превращаю сложные темы',
      accent: 'в понятную систему',
      tail: 'обучения.',
      description:
        'Преподаю математику и физику, разрабатываю методические пособия и тестовые материалы, создаю цифровые инструменты для образования.',
      primary: 'Посмотреть материалы',
      secondary: 'Обсудить задачу',
      availability: 'Открыт к сотрудничеству и новым образовательным проектам',
      focus: ['Математика', 'Физика', 'Методика', 'EdTech'],
      visualLabel: 'Модель обучения',
      visualTitle: 'От понимания к результату',
      visualSteps: ['Тема', 'Понимание', 'Практика', 'Проверка'],
      visualNote:
        'Каждый материал имеет ясную цель, логичную структуру и критерий проверки знаний.',
    },
    about: {
      eyebrow: 'мой подход',
      title: 'Образование, методика и технологии в одной системе',
      lead:
        'Моя основная деятельность — преподавание математики и физики, а также создание качественных учебных материалов.',
      body:
        'Я уделяю внимание последовательному объяснению сложных понятий, соответствию заданий учебной цели и объективной оценке результата. Навыки разработки помогают дополнять этот подход тестами, ботами и другими цифровыми образовательными инструментами.',
      principlesTitle: 'Принципы работы',
      principles: [
        'Объяснять сложные темы ясным и доступным языком',
        'Связывать теорию, практику и проверку в единую систему',
        'Адаптировать материал под аудиторию и учебную цель',
      ],
      audiencesTitle: 'Для кого',
      audiences: [
        {
          number: '01',
          title: 'Ученики',
          text: 'Чтобы понять тему, обнаружить пробелы в знаниях и выстроить системную практику.',
        },
        {
          number: '02',
          title: 'Преподаватели',
          text: 'Чтобы получить методическую структуру, задания, тесты и материалы к занятиям.',
        },
        {
          number: '03',
          title: 'Школы и центры',
          text: 'Чтобы разработать учебные программы, диагностику и специализированные продукты.',
        },
      ],
    },
    expertise: {
      eyebrow: 'профессиональные направления',
      title: 'С чем я могу помочь',
      intro:
        'От проведения занятий до готового методического продукта — прорабатываю содержание, структуру и критерии проверки.',
      items: [
        {
          symbol: '∑',
          index: '01',
          title: 'Преподавание математики',
          text: 'Последовательное объяснение тем, стратегии решения задач и упражнения для закрепления материала.',
          points: ['Теоретическое объяснение', 'Алгоритмы решения задач', 'Задания разного уровня'],
        },
        {
          symbol: 'φ',
          index: '02',
          title: 'Преподавание физики',
          text: 'Понимание физических явлений, осмысленное применение формул и работа с практическими задачами.',
          points: ['Явления и законы', 'Работа с формулами', 'Практические задачи'],
        },
        {
          symbol: '◇',
          index: '03',
          title: 'Методическая разработка',
          text: 'Пособия и материалы, выстроенные под учебную цель, логику темы и уровень аудитории.',
          points: ['Методические пособия', 'Разработки уроков', 'Рабочие листы'],
        },
        {
          symbol: '✓',
          index: '04',
          title: 'Тесты и диагностика',
          text: 'Вопросы, которые точно измеряют знания, задания по уровням и прозрачные критерии оценки.',
          points: ['Диагностические тесты', 'Контрольные материалы', 'Ответы и критерии'],
        },
      ],
    },
    materials: {
      eyebrow: 'методические продукты',
      title: 'Разработаю материал под вашу задачу',
      intro:
        'Каждый материал создаётся не по готовому шаблону, а с учётом предмета, возраста, цели и формата использования.',
      request: 'Обсудить материал',
      items: [
        {
          type: 'Пособие',
          title: 'Методические пособия',
          text: 'Структура темы, способы объяснения, примеры и практические рекомендации для преподавателя.',
          meta: ['PDF / DOCX', 'Печать и онлайн'],
          preview: ['Цель и результат', 'Теория и примеры', 'Рекомендации'],
          tone: 'violet',
          demo: 'mathGuide',
        },
        {
          type: 'Оценивание',
          title: 'Тестовые материалы',
          text: 'Входные, текущие или итоговые тесты с ответами и прозрачными критериями оценивания.',
          meta: ['Тест / Google Forms', 'С ответами'],
          preview: ['Диагностика', 'Уровневые вопросы', 'Критерии оценки'],
          tone: 'cyan',
          demo: 'physicsDiagnostic',
        },
        {
          type: 'Практика',
          title: 'Задачи и рабочие листы',
          text: 'Задания от простого к сложному для самостоятельной работы и закрепления темы.',
          meta: ['PDF / Print', 'Для ученика'],
          preview: ['Базовые упражнения', 'Практические задачи', 'Самостоятельная работа'],
          tone: 'amber',
          demo: 'ohmWorksheet',
        },
        {
          type: 'Занятие',
          title: 'Разработки уроков',
          text: 'Цель, этапы и активности урока, структура презентации и итоговая рефлексия.',
          meta: ['PPTX / DOCX', 'Для преподавателя'],
          preview: ['Сценарий урока', 'План презентации', 'Рефлексия'],
          tone: 'green',
        },
      ],
    },
    process: {
      eyebrow: 'процесс работы',
      title: 'От идеи до готового материала',
      items: [
        {
          number: '01',
          title: 'Определяем задачу',
          text: 'Фиксируем аудиторию, предмет, тему, учебную цель и формат использования.',
        },
        {
          number: '02',
          title: 'Проектирую структуру',
          text: 'Планирую логику содержания, уровни сложности и способ проверки результата.',
        },
        {
          number: '03',
          title: 'Разрабатываю материал',
          text: 'Объединяю текст, задания, ответы и визуальную структуру в единый продукт.',
        },
        {
          number: '04',
          title: 'Проверяю и передаю',
          text: 'Проверяю точность, логику и удобство, затем передаю в необходимом формате.',
        },
      ],
    },
    projects: {
      eyebrow: 'образование через технологии',
      title: 'Цифровые проекты',
      intro:
        'Разработка для меня — и самостоятельное направление, и способ сделать обучение удобнее и эффективнее.',
      ready: 'Готово',
      development: 'В разработке',
      demo: 'Демо',
      nextFocus: 'Следующий фокус',
      nextTitle: 'Цифровые инструменты для обучения',
      nextText:
        'Онлайн-тесты, диагностика знаний и сервисы, упрощающие работу с учебными материалами.',
      items: [
        {
          icon: 'TM',
          category: 'Full-stack приложение',
          title: 'Task Manager',
          text: 'Аутентификация JWT и bcrypt, CRUD задач и управление ролями пользователей.',
          tags: ['Next.js', 'MongoDB', 'JWT'],
          done: true,
          demo: 'https://project-1-task-manager-amber.vercel.app',
        },
        {
          icon: 'LS',
          category: 'Веб-сервис',
          title: 'Link Shortener',
          text: 'Короткие ссылки, уникальный slug, статистика переходов и кабинет пользователя.',
          tags: ['Next.js', 'MongoDB', 'Analytics'],
          done: false,
          demo: null,
        },
        {
          icon: 'TB',
          category: 'Telegram-инструмент',
          title: 'Telegram Notes Bot',
          text: 'Бот для хранения заметок на основе serverless webhook и Telegram API.',
          tags: ['Node.js', 'Telegram API', 'MongoDB'],
          done: false,
          demo: null,
        },
      ],
    },
    contact: {
      eyebrow: 'сотрудничество',
      title: 'Давайте создадим полезный образовательный продукт',
      text:
        'Если вам нужен урок, методическое пособие, тестовые материалы или цифровой инструмент для образования — готов обсудить задачу.',
      primary: 'Открыть Telegram-бота',
      response: 'Связаться напрямую',
      fallback: 'Если форма не сработает, откройте Telegram-бота или позвоните.',
      form: {
        badge: 'Заявка → Telegram',
        title: 'Расскажите о задаче',
        hint: 'Заявка придёт напрямую мне. Обычно отвечаю в Telegram или по телефону.',
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
        errors: {
          validation: 'Проверьте заполненные поля и попробуйте ещё раз.',
          rate_limited: 'Слишком много попыток. Попробуйте позже или откройте Telegram-бота.',
          service_unconfigured:
            'Онлайн-заявки ещё не настроены. Откройте Telegram-бота или позвоните.',
          delivery_failed:
            'Не удалось доставить заявку. Откройте Telegram-бота или попробуйте позже.',
          generic: 'Не удалось отправить заявку. Откройте Telegram-бота или попробуйте позже.',
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

const NAV_ITEMS = ['about', 'expertise', 'materials', 'projects', 'contact']

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

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5m0-5-9 9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
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
  const menuButtonRef = useRef(null)
  const mobileNavRef = useRef(null)
  const demoPageRef = useRef(0)
  const demoModalRef = useRef(null)
  const demoCloseRef = useRef(null)
  const demoStatusRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const contactStatusRef = useRef(null)
  const tr = CONTENT[lang]
  const demoDocument = activeDemo ? DEMO_DOCUMENTS[activeDemo] : null
  const demoContent = demoDocument ? demoDocument[lang] : null

  useScrollReveal()

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
    } catch {
      setContactStatus('error')
      setContactResult({ code: 'generic' })
    }
  }

  return (
    <div className="site-shell">
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
              <a key={item} href={`#${item}`}>
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
                onClick={closeMenu}
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
                <a href="#contact" className="button button-secondary">
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

            <div className="hero-visual reveal" aria-label={tr.hero.visualTitle}>
              <div className="visual-formula visual-formula-one" aria-hidden="true">
                F = ma
              </div>
              <div className="visual-formula visual-formula-two" aria-hidden="true">
                ∫ f(x)dx
              </div>

              <div className="learning-card">
                <div className="learning-card-top">
                  <span className="learning-label">{tr.hero.visualLabel}</span>
                  <span className="learning-code">EDU·01</span>
                </div>

                <div className="learning-graphic" aria-hidden="true">
                  <div className="graphic-axis graphic-axis-x" />
                  <div className="graphic-axis graphic-axis-y" />
                  <svg viewBox="0 0 420 180" role="presentation">
                    <defs>
                      <linearGradient id="curveGradient" x1="0" x2="1">
                        <stop offset="0%" stopColor="#6d5dfc" />
                        <stop offset="100%" stopColor="#12b8a6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M18 151 C 72 150, 96 138, 132 119 S 204 76, 250 74 S 330 65, 398 18"
                      fill="none"
                      stroke="url(#curveGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    {[18, 132, 250, 398].map((x, index) => (
                      <circle
                        key={x}
                        cx={x}
                        cy={[151, 119, 74, 18][index]}
                        r="7"
                        fill="#fff"
                        stroke={index < 2 ? '#6d5dfc' : '#12b8a6'}
                        strokeWidth="4"
                      />
                    ))}
                  </svg>
                </div>

                <h2>{tr.hero.visualTitle}</h2>
                <div className="learning-steps">
                  {tr.hero.visualSteps.map((step, index) => (
                    <div key={step}>
                      <span>{index + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>

                <div className="learning-note">
                  <span aria-hidden="true">i</span>
                  <p>{tr.hero.visualNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container-wide">
            <div className="about-layout">
              <div>
                <p className="section-eyebrow reveal">{tr.about.eyebrow}</p>
                <h2 className="section-title reveal">{tr.about.title}</h2>
              </div>
              <div className="about-copy reveal">
                <p className="about-lead">{tr.about.lead}</p>
                <p>{tr.about.body}</p>

                <div className="principles">
                  <p className="principles-title">{tr.about.principlesTitle}</p>
                  {tr.about.principles.map((principle) => (
                    <div key={principle}>
                      <span>
                        <CheckIcon />
                      </span>
                      <p>{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="audience-wrap">
              <p className="audience-label reveal">{tr.about.audiencesTitle}</p>
              <div className="audience-grid">
                {tr.about.audiences.map((audience) => (
                  <article className="audience-card reveal" key={audience.title}>
                    <span>{audience.number}</span>
                    <div>
                      <h3>{audience.title}</h3>
                      <p>{audience.text}</p>
                    </div>
                  </article>
                ))}
              </div>
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
              {tr.expertise.items.map((item) => (
                <article className="expertise-card reveal" key={item.title}>
                  <div className="expertise-top">
                    <span className="expertise-symbol" aria-hidden="true">
                      {item.symbol}
                    </span>
                    <span className="expertise-index">{item.index}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <span aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="materials" className="section section-white">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow reveal">{tr.materials.eyebrow}</p>
                <h2 className="section-title reveal">{tr.materials.title}</h2>
              </div>
              <p className="section-intro reveal">{tr.materials.intro}</p>
            </div>

            <div className="materials-grid">
              {tr.materials.items.map((item, index) => (
                <article className={`material-card tone-${item.tone} reveal`} key={item.title}>
                  <div className="material-preview" aria-hidden="true">
                    <div className="preview-top">
                      <span>{item.type}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <div className="preview-title-line" />
                    <div className="preview-line preview-line-long" />
                    <div className="preview-line preview-line-medium" />
                    <div className="preview-items">
                      {item.preview.map((previewItem, previewIndex) => (
                        <div key={previewItem}>
                          <span>{previewIndex + 1}</span>
                          <p>{previewItem}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="material-content">
                    <div className="material-meta">
                      {item.meta.map((meta) => (
                        <span key={meta}>{meta}</span>
                      ))}
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
                      <a href="#contact">
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

        <section className="section process-section">
          <div className="process-glow" aria-hidden="true" />
          <div className="container-wide">
            <p className="section-eyebrow section-eyebrow-light reveal">{tr.process.eyebrow}</p>
            <h2 className="section-title section-title-light reveal">{tr.process.title}</h2>

            <div className="process-grid">
              {tr.process.items.map((item, index) => (
                <article className="process-item reveal" key={item.number}>
                  <div className="process-number">{item.number}</div>
                  {index < tr.process.items.length - 1 && (
                    <div className="process-connector" aria-hidden="true">
                      <ArrowIcon />
                    </div>
                  )}
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-soft">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow reveal">{tr.projects.eyebrow}</p>
                <h2 className="section-title reveal">{tr.projects.title}</h2>
              </div>
              <p className="section-intro reveal">{tr.projects.intro}</p>
            </div>

            <div className="next-focus reveal">
              <div className="next-focus-icon" aria-hidden="true">
                <span>∑</span>
                <span>01</span>
              </div>
              <div>
                <p>{tr.projects.nextFocus}</p>
                <h3>{tr.projects.nextTitle}</h3>
                <span>{tr.projects.nextText}</span>
              </div>
              <a href="#contact" className="circle-link" aria-label={tr.contact.primary}>
                <ArrowIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="projects-grid">
              {tr.projects.items.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <div className="project-top">
                    <span className="project-icon">{project.icon}</span>
                    <span className={`project-status ${project.done ? 'done' : ''}`}>
                      <span aria-hidden="true" />
                      {project.done ? tr.projects.ready : tr.projects.development}
                    </span>
                  </div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-text">{project.text}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalIcon />
                        {tr.projects.demo}
                      </a>
                    ) : (
                      <span className="disabled-link">
                        <ExternalIcon />
                        {tr.projects.demo}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-grid-pattern" aria-hidden="true" />
          <div className="container-wide contact-inner">
            <div className="contact-copy">
              <p className="section-eyebrow section-eyebrow-light reveal">{tr.contact.eyebrow}</p>
              <h2 className="reveal">{tr.contact.title}</h2>
              <p className="reveal">{tr.contact.text}</p>
              <div className="contact-card reveal">
                <p>{tr.contact.response}</p>
                <span className="contact-fallback-note">{tr.contact.fallback}</span>
                <a
                  href="https://t.me/neworders_byslt_bot?start=portfolio_contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-link-icon telegram">
                    <TelegramIcon />
                  </span>
                  <span>
                    <small>Telegram</small>
                    @neworders_byslt_bot
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

      <footer className="site-footer">
        <div className="container-wide footer-inner">
          <div className="footer-brand">
            <span className="brand-symbol" aria-hidden="true">
              B
            </span>
            <div>
              <strong>Boyazid</strong>
              <p>{tr.footer.role}</p>
            </div>
          </div>
          <div className="footer-note">
            <span>{tr.footer.built}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

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

                <a
                  className="demo-request-button"
                  href={`https://t.me/neworders_byslt_bot?start=demo_${activeDemo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TelegramIcon />
                  {tr.demoViewer.request}
                  <ArrowIcon />
                </a>
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
