const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const languageButton = document.querySelector('.lang-toggle');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

const ruToKk = {
  'Меню': 'Мәзір',
  'О проекте': 'Жоба туралы',
  'Материалы': 'Материалдар',
  'Комьюнити': 'Қауымдастық',
  'Единое пространство': 'Біртұтас кеңістік',
  'Bilim AI и ChatGPT EDU': 'Bilim AI және ChatGPT EDU',
  'Инструменты, методические материалы, обучение и профессиональное сообщество для ответственного применения искусственного интеллекта в образовании Казахстана.': 'Қазақстанның білім беру саласында жасанды интеллектіні жауапкершілікпен қолдануға арналған құралдар, әдістемелік материалдар, оқыту және кәсіби қауымдастық.',
  'Возможности платформы': 'Платформа мүмкіндіктері',
  'Плагины': 'Плагиндер',
  'Инструменты для подготовки учебных материалов': 'Оқу материалдарын дайындауға арналған құралдар',
  'Промпты': 'Промпттар',
  'Готовые запросы для учёбы и работы': 'Оқу мен жұмысқа арналған дайын сұраулар',
  'Конкурсы': 'Байқаулар',
  'Проекты и профессиональные инициативы': 'Жобалар мен кәсіби бастамалар',
  'Вебинары': 'Вебинарлар',
  'Обучение, практикумы и записи встреч': 'Оқыту, практикумдар және кездесулер жазбалары',
  'Социальные сети': 'Әлеуметтік желілер',
  'Новости и полезные внешние ресурсы': 'Жаңалықтар мен пайдалы сыртқы ресурстар',
  'Статистика': 'Статистика',
  'Масштаб проекта и динамика развития': 'Жобаның ауқымы мен даму динамикасы',
  'Чемпионы и тренеры': 'Чемпиондар мен тренерлер',
  'Эксперты, лидеры и наставники': 'Сарапшылар, көшбасшылар және тәлімгерлер',
  'Инсайты учителей': 'Мұғалімдер тәжірибесі',
  'Практические материалы педагогов': 'Педагогтерге арналған практикалық материалдар',
  'Новости и события': 'Жаңалықтар мен іс-шаралар',
  'Актуальное': 'Өзекті',
  'Все новости →': 'Барлық жаңалықтар →',
  'Изображение': 'Сурет',
  'Объявление': 'Хабарландыру',
  'Новый этап проекта ChatGPT EDU Kazakhstan': 'ChatGPT EDU Kazakhstan жобасының жаңа кезеңі',
  'Здесь будет короткий анонс события или важного обновления проекта.': 'Мұнда оқиға немесе жобаның маңызды жаңартуы туралы қысқаша хабарландыру жарияланады.',
  'Вебинар': 'Вебинар',
  'Практическое применение ИИ в работе педагога': 'Педагогтің жұмысында ЖИ-ді практикалық қолдану',
  'Карточка вебинара со спикером, языком проведения и ссылкой.': 'Спикер, өткізу тілі және сілтеме көрсетілген вебинар карточкасы.',
  'Подборка методических рекомендаций': 'Әдістемелік ұсынымдар жинағы',
  'Место для новых инструкций, записей и материалов для педагогов.': 'Педагогтерге арналған жаңа нұсқаулықтар, жазбалар және материалдар.',
  '18 сентября 2026': '2026 жылғы 18 қыркүйек',
  '25 сентября 2026': '2026 жылғы 25 қыркүйек',
  '30 сентября 2026': '2026 жылғы 30 қыркүйек',
  'Поддержка на каждом этапе': 'Әр кезеңде қолдау',
  'Написать в': 'Жазу',
  'Открыть': 'Ашу',
  'Позвонить': 'Қоңырау шалу',
  'Bilim AI для образования': 'Білім беруге арналған Bilim AI',
  'Обучение • практика • поддержка': 'Оқу • тәжірибе • қолдау',
  'Быстрый доступ': 'Жылдам қол жеткізу',
  'Популярные ресурсы': 'Танымал ресурстар',
  'Все ресурсы →': 'Барлық ресурстар →',
  'База промптов': 'Промпттар қоры',
  'Готовые решения для школьных предметов': 'Мектеп пәндеріне арналған дайын шешімдер',
  'Методические материалы': 'Әдістемелік материалдар',
  'Пошаговые инструкции и шаблоны': 'Қадамдық нұсқаулықтар мен үлгілер',
  'Записи вебинаров': 'Вебинар жазбалары',
  'Обучающие видео в удобном формате': 'Ыңғайлы форматтағы оқыту бейнелері',
  'Полезные ссылки': 'Пайдалы сілтемелер',
  'Проверенные внешние ресурсы': 'Тексерілген сыртқы ресурстар',
  'Вместе мы сильнее': 'Бірге біз мықтымыз',
  'Сообщество практиков': 'Практиктер қауымдастығы',
  'Обменивайтесь опытом, задавайте вопросы и находите коллег для совместных образовательных проектов.': 'Тәжірибе алмасыңыз, сұрақ қойыңыз және бірлескен білім беру жобаларына әріптестер табыңыз.',
  'Присоединиться': 'Қосылу',
  'Опыт педагогов': 'Педагогтердің тәжірибесі',
  'Совместные проекты': 'Бірлескен жобалар',
  'Идеи для уроков': 'Сабақ идеялары',
  'Поддержка коллег': 'Әріптестер қолдауы',
  'Практический эффект': 'Практикалық нәтиже',
  'Опыт учителей': 'Мұғалімдердің тәжірибесі',
  'Предыдущий отзыв': 'Алдыңғы пікір',
  'Следующий отзыв': 'Келесі пікір',
  'Фото': 'Педагогтің',
  'педагога': 'фотосы',
  'Здесь будет опубликован реальный отзыв педагога о том, как ChatGPT EDU помогает экономить время и улучшать подготовку учебных материалов.': 'Мұнда ChatGPT EDU педагогке уақытын үнемдеуге және оқу материалдарын сапалы дайындауға қалай көмектесетіні туралы нақты пікір жарияланады.',
  'Имя преподавателя': 'Оқытушының аты-жөні',
  'Предмет, школа, регион': 'Пән, мектеп, өңір',
  'Единое пространство для ответственного применения ИИ в образовании.': 'Білім беруде ЖИ-ді жауапкершілікпен қолдануға арналған біртұтас кеңістік.',
  'Проект': 'Жоба',
  'Сообщество': 'Қауымдастық',
  'Нормативные правовые акты': 'Нормативтік құқықтық актілер',
  'Помощь': 'Көмек',
  'Поддержка': 'Қолдау',
  'Гид по сайту': 'Сайт нұсқаулығы',
  'Частые вопросы': 'Жиі қойылатын сұрақтар',
  'Контакты': 'Байланыс',
  'О ПРОЕКТЕ': 'ЖОБА ТУРАЛЫ',
  'ChatGPT EDU для системы образования Казахстана': 'Қазақстанның білім беру жүйесіне арналған ChatGPT EDU',
  'Корпоративное рабочее пространство с современными ИИ-инструментами для педагогов, исследователей, студентов и образовательных организаций.': 'Педагогтерге, зерттеушілерге, студенттерге және білім беру ұйымдарына арналған заманауи ЖИ құралдары бар корпоративтік жұмыс кеңістігі.',
  'лицензий в масштабе проекта': 'жоба ауқымында берілетін лицензия',
  '30 марта 2026': '2026 жылғы 30 наурыз',
  'запуск программы': 'бағдарламаны іске қосу',
  'стоимость доступа для пользователя': 'пайдаланушы үшін қолжетімділік құны',
  'Цель и миссия': 'Мақсат пен миссия',
  'Миссия': 'Миссия',
  'Помочь системе образования Казахстана применять искусственный интеллект ответственно, сохраняя академическую честность, конфиденциальность и самостоятельность мышления.': 'Қазақстанның білім беру жүйесіне академиялық адалдықты, деректердің құпиялылығын және дербес ойлауды сақтай отырып, жасанды интеллектіні жауапкершілікпен қолдануға көмектесу.',
  'Цель': 'Мақсат',
  'Внедрить ChatGPT EDU в образовательный процесс, обучить практическому применению ИИ и повысить качество подготовки специалистов для цифровой экономики Казахстана.': 'ChatGPT EDU-ды білім беру үдерісіне енгізу, ЖИ-ді іс жүзінде қолдануды үйрету және Қазақстанның цифрлық экономикасы үшін мамандарды даярлау сапасын арттыру.',
  'Пользователи': 'Пайдаланушылар',
  'Педагоги и преподаватели': 'Педагогтер мен оқытушылар',
  'Готовят учебные материалы, задания и персональные GPT-ассистенты, работают с документами и данными.': 'Оқу материалдарын, тапсырмаларды және жеке GPT көмекшілерін дайындайды, құжаттармен және деректермен жұмыс істейді.',
  'Исследователи и учёные': 'Зерттеушілер мен ғалымдар',
  'Проводят обзор литературы, анализируют данные, редактируют публикации и готовят грантовые заявки.': 'Әдебиеттерге шолу жасайды, деректерді талдайды, ғылыми жарияланымдарды редакциялайды және гранттық өтінімдер дайындайды.',
  'Студенты': 'Студенттер',
  'Осваивают технологии, разрабатывают проекты и решают профессиональные задачи с соблюдением академической честности.': 'Технологияларды меңгереді, жобалар әзірлейді және академиялық адалдық талаптарын сақтай отырып, кәсіби міндеттерді шешеді.',
  'Администраторы организаций': 'Ұйым әкімшілері',
  'Ведут списки пользователей, выдают учётные данные и управляют доступом на уровне организации.': 'Пайдаланушылар тізімін жүргізеді, есептік жазба деректерін береді және ұйым деңгейіндегі қолжетімділікті басқарады.',
  'Стейкхолдеры проекта': 'Жобаның мүдделі тараптары',
  'Оплата лицензий и сопровождения проекта.': 'Лицензиялар мен жобаны сүйемелдеу шығындарын өтейді.',
  'Участие в предусмотренной проектом верификации.': 'Жобада көзделген тексеруге қатысады.',
  'Предоставление лицензий и поддержка оператора.': 'Лицензияларды ұсынады және операторға қолдау көрсетеді.',
  'Подключение лицензий, ИИ-методология и поддержка пользователей.': 'Лицензияларды қосу, ЖИ әдістемесі және пайдаланушыларды қолдау.',
  'Координация направления, администраторов и политики применения ИИ.': 'Бағытты, әкімшілерді және ЖИ-ді қолдану саясатын үйлестіру.',
  'МИИЦР, МП и МНВО': 'ЖИЦДМ, ОАМ және ҒЖБМ',
  'Администраторы': 'Әкімшілер',
  'Управление учётными записями и передача доступа пользователям.': 'Есептік жазбаларды басқару және пайдаланушыларға қолжетімділік беру.',
  'Принципы доступа': 'Қолжетімділік қағидаттары',
  'Доступ без оплаты': 'Тегін қолжетімділік',
  'Пользователь получает корпоративный уровень ChatGPT EDU за 0 ₸.': 'Пайдаланушы ChatGPT EDU-дың корпоративтік деңгейіне тегін қол жеткізеді.',
  'Конфиденциальность': 'Құпиялылық',
  'Запросы остаются внутри рабочего пространства организации.': 'Сұраулар ұйымның жұмыс кеңістігінде қалады.',
  'Защита данных': 'Деректерді қорғау',
  'Запросы и данные не используются для обучения моделей OpenAI.': 'Сұраулар мен деректер OpenAI модельдерін үйрету үшін пайдаланылмайды.',
  'Управление организацией': 'Ұйымды басқару',
  'Учётные записи и доступы администрируются централизованно.': 'Есептік жазбалар мен қолжетімділік орталықтандырылған түрде басқарылады.',
  'Практическая работа': 'Практикалық жұмыс',
  'Как применяют ChatGPT EDU': 'ChatGPT EDU-ды қалай қолданады',
  'Инструменты помогают в повседневной работе, обучении и исследовательских проектах.': 'Құралдар күнделікті жұмысқа, оқуға және зерттеу жобаларын жүргізуге көмектеседі.',
  'Учебные материалы': 'Оқу материалдары',
  'Лекции, тесты, задания, силлабусы и GPT-ассистенты.': 'Дәрістер, тесттер, тапсырмалар, силлабустар және GPT көмекшілері.',
  'Гранты и отчёты': 'Гранттар мен есептер',
  'Заявки на финансирование и научные отчёты.': 'Қаржыландыруға өтінімдер мен ғылыми есептер.',
  'Научные статьи': 'Ғылыми мақалалар',
  'Подготовка, редактирование, перевод и обзор литературы.': 'Әзірлеу, редакциялау, аудару және әдебиеттерге шолу жасау.',
  'Анализ данных': 'Деректерді талдау',
  'Код, визуализация, статистический анализ и интерпретация результатов.': 'Код, визуализация, статистикалық талдау және нәтижелерді түсіндіру.',
  'Языковая поддержка': 'Тілдік қолдау',
  'Перевод и редактирование материалов для международной коммуникации.': 'Халықаралық байланысқа арналған материалдарды аудару және редакциялау.',
  'Документация': 'Құжаттама',
  'Протоколы, официальные письма, приказы и рабочие документы.': 'Хаттамалар, ресми хаттар, бұйрықтар және жұмыс құжаттары.',
  'Главная': 'Басты бет',
  'Возможности': 'Мүмкіндіктер',
  'Ресурсы': 'Ресурстар',
  'Черновой каркас сайта': 'Сайттың бастапқы нұсқасы',
  'На главную': 'Басты бетке'
};

const attributeTranslations = {
  'Bilim AI — главная': 'Bilim AI — басты бет',
  'Основная навигация': 'Негізгі навигация',
  'Карта Казахстана с областями в фирменных цветах Bilim AI': 'Bilim AI фирмалық түстеріндегі өңірлер белгіленген Қазақстан картасы',
  'Каналы поддержки': 'Қолдау арналары',
  'Написать в поддержку Bilim AI через WhatsApp': 'WhatsApp арқылы Bilim AI қолдау қызметіне жазу',
  'Открыть Telegram-бот поддержки BilimClass': 'BilimClass қолдау Telegram-ботын ашу',
  'Позвонить в поддержку Bilim AI по номеру плюс семь семьсот триста сорок четыре девяносто пять ноль пять': 'Bilim AI қолдау қызметіне плюс жеті жеті жүз үш жүз қырық төрт тоқсан бес нөл бес нөмірі арқылы қоңырау шалу',
  'Предыдущий отзыв': 'Алдыңғы пікір',
  'Следующий отзыв': 'Келесі пікір',
  'Ключевые показатели проекта': 'Жобаның негізгі көрсеткіштері'
};

const translatedAttributes = Array.from(document.querySelectorAll('[aria-label], [alt], [title]')).map((element) => ({
  element,
  ariaLabel: element.getAttribute('aria-label'),
  alt: element.getAttribute('alt'),
  title: element.getAttribute('title')
}));

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    if (node.parentElement?.closest('script, style')) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  textNodes.push({ node: walker.currentNode, original: walker.currentNode.nodeValue });
}

function applyLanguage(language) {
  const isKazakh = language === 'kk';
  document.documentElement.lang = isKazakh ? 'kk' : 'ru';

  textNodes.forEach(({ node, original }) => {
    const value = original.trim();
    const translated = isKazakh ? (ruToKk[value] || value) : value;
    node.nodeValue = original.replace(value, translated);
  });

  translatedAttributes.forEach(({ element, ariaLabel, alt, title }) => {
    if (ariaLabel !== null) element.setAttribute('aria-label', isKazakh ? (attributeTranslations[ariaLabel] || ariaLabel) : ariaLabel);
    if (alt !== null) element.setAttribute('alt', isKazakh ? (attributeTranslations[alt] || alt) : alt);
    if (title !== null) element.setAttribute('title', isKazakh ? (attributeTranslations[title] || title) : title);
  });

  if (document.body.classList.contains('about-page')) {
    document.title = isKazakh ? 'Жоба туралы — Bilim AI' : 'О проекте — Bilim AI';
  } else {
    document.title = 'Bilim AI — ChatGPT EDU Kazakhstan';
  }

  if (languageButton) {
    languageButton.textContent = isKazakh ? 'Рус' : 'Қаз';
    languageButton.setAttribute('aria-label', isKazakh ? 'Сайтты орыс тіліне ауыстыру' : 'Переключить сайт на казахский язык');
  }

  localStorage.setItem('bilim-ai-language', isKazakh ? 'kk' : 'ru');
}

const savedLanguage = localStorage.getItem('bilim-ai-language') === 'kk' ? 'kk' : 'ru';
applyLanguage(savedLanguage);

languageButton?.addEventListener('click', () => {
  applyLanguage(document.documentElement.lang === 'kk' ? 'ru' : 'kk');
});

const regionalLicenseData = {
  'Акмолинская область': { kindergarten: { activated: 163, using: 122 }, school: { activated: 4381, using: 3900 } },
  'Актюбинская область': { kindergarten: { activated: 192, using: 143 }, school: { activated: 4176, using: 3429 } },
  'Алматинская область': { kindergarten: { activated: 170, using: 126 }, school: { activated: 5594, using: 5526 } },
  'Атырауская область': { kindergarten: { activated: 74, using: 56 }, school: { activated: 2350, using: 1975 } },
  'Восточно-Казахстанская область': { kindergarten: { activated: 128, using: 100 }, school: { activated: 1283, using: 1098 } },
  'г. Алматы': { kindergarten: { activated: 113, using: 88 }, school: { activated: 3568, using: 3156 } },
  'г. Астана': { kindergarten: { activated: 365, using: 284 }, school: { activated: 4062, using: 3514 } },
  'г. Шымкент': { kindergarten: { activated: 64, using: 37 }, school: { activated: 2478, using: 2470 } },
  'Жамбылская область': { kindergarten: { activated: 458, using: 316 }, school: { activated: 4875, using: 4869 } },
  'Западно-Казахстанская область': { kindergarten: { activated: 232, using: 200 }, school: { activated: 4577, using: 4571 } },
  'Карагандинская область': { kindergarten: { activated: 299, using: 271 }, school: { activated: 3464, using: 3032 } },
  'Костанайская область': { kindergarten: { activated: 260, using: 229 }, school: { activated: 4822, using: 4024 } },
  'Кызылординская область': { kindergarten: { activated: 256, using: 173 }, school: { activated: 4227, using: 4215 } },
  'Мангистауская область': { kindergarten: { activated: 49, using: 33 }, school: { activated: 2329, using: 2009 } },
  'Область Абай': { kindergarten: { activated: 115, using: 88 }, school: { activated: 2189, using: 1801 } },
  'Область Жетісу': { kindergarten: { activated: 159, using: 138 }, school: { activated: 3658, using: 3162 } },
  'Область Ұлытау': { kindergarten: { activated: 21, using: 20 }, school: { activated: 974, using: 763 } },
  'Павлодарская область': { kindergarten: { activated: 280, using: 208 }, school: { activated: 1885, using: 1559 } },
  'Северо-Казахстанская область': { kindergarten: { activated: 135, using: 96 }, school: { activated: 2263, using: 1910 } },
  'Туркестанская область': { kindergarten: { activated: 519, using: 325 }, school: { activated: 11444, using: 11273 } }
};

const regionNamesKk = {
  'Акмолинская область': 'Ақмола облысы',
  'Актюбинская область': 'Ақтөбе облысы',
  'Алматинская область': 'Алматы облысы',
  'Атырауская область': 'Атырау облысы',
  'Восточно-Казахстанская область': 'Шығыс Қазақстан облысы',
  'г. Алматы': 'Алматы қ.',
  'г. Астана': 'Астана қ.',
  'г. Шымкент': 'Шымкент қ.',
  'Жамбылская область': 'Жамбыл облысы',
  'Западно-Казахстанская область': 'Батыс Қазақстан облысы',
  'Карагандинская область': 'Қарағанды облысы',
  'Костанайская область': 'Қостанай облысы',
  'Кызылординская область': 'Қызылорда облысы',
  'Мангистауская область': 'Маңғыстау облысы',
  'Область Абай': 'Абай облысы',
  'Область Жетісу': 'Жетісу облысы',
  'Область Ұлытау': 'Ұлытау облысы',
  'Павлодарская область': 'Павлодар облысы',
  'Северо-Казахстанская область': 'Солтүстік Қазақстан облысы',
  'Туркестанская область': 'Түркістан облысы'
};

const mapInteractive = document.querySelector('.kazakhstan-map-interactive');
const mapTooltip = document.querySelector('.map-tooltip');
const mapTooltipTitle = document.querySelector('.map-tooltip-title');
const mapTooltipContent = document.querySelector('.map-tooltip-content');
const mapTooltipSource = document.querySelector('.map-tooltip-source');
const mapHint = document.querySelector('.map-interaction-hint');
const mapRegions = Array.from(document.querySelectorAll('.map-region'));
let activeRegion = null;
let activePoint = null;
let mapTooltipPinned = false;

function formatLicenseNumber(value) {
  return new Intl.NumberFormat(document.documentElement.lang === 'kk' ? 'kk-KZ' : 'ru-RU').format(value);
}

function getMapLabels() {
  return document.documentElement.lang === 'kk'
    ? { school: 'Мектептер', kindergarten: 'Балабақшалар', activated: 'Белсендірді', using: 'Пайдаланып жүр', hint: 'Өңірді таңдаңыз', source: 'Power BI · 19.11.2026 жаңартылды' }
    : { school: 'Школы', kindergarten: 'Детские сады', activated: 'Активировали', using: 'Используют', hint: 'Наведите на область', source: 'Power BI · обновлено 19.11.2026' };
}

function getRegionDisplayName(region) {
  return document.documentElement.lang === 'kk' ? (regionNamesKk[region] || region) : region;
}

function positionMapTooltip(point) {
  if (!mapInteractive || !mapTooltip || !point) return;
  const bounds = mapInteractive.getBoundingClientRect();
  const tooltipHalfWidth = Math.min(155, Math.max(120, bounds.width / 3));
  const isWideMap = bounds.width >= 620;
  const x = isWideMap
    ? bounds.width - tooltipHalfWidth - 12
    : Math.max(tooltipHalfWidth, Math.min(bounds.width - tooltipHalfWidth, point.clientX - bounds.left));
  const y = isWideMap
    ? Math.min(300, bounds.height * .46)
    : Math.max(12, Math.min(bounds.height - 12, point.clientY - bounds.top));
  mapTooltip.style.left = `${x}px`;
  mapTooltip.style.top = `${y}px`;
  mapTooltip.classList.toggle('below', y < 215);
}

function renderMapTooltip() {
  if (!activeRegion || !mapTooltip || !mapTooltipTitle || !mapTooltipContent) return;
  const data = regionalLicenseData[activeRegion];
  if (!data) return;
  const labels = getMapLabels();
  mapTooltipTitle.textContent = getRegionDisplayName(activeRegion);
  mapTooltipContent.innerHTML = [
    ['school', labels.school],
    ['kindergarten', labels.kindergarten]
  ].map(([key, title]) => `
    <div class="map-tooltip-group">
      <strong>${title}</strong>
      <div class="map-tooltip-metrics">
        <div class="map-tooltip-metric"><span>${labels.activated}</span><b>${formatLicenseNumber(data[key].activated)}</b></div>
        <div class="map-tooltip-metric"><span>${labels.using}</span><b>${formatLicenseNumber(data[key].using)}</b></div>
      </div>
    </div>`).join('');
  if (mapTooltipSource) mapTooltipSource.textContent = labels.source;
  positionMapTooltip(activePoint);
}

function showRegionTooltip(region, event, pinned = false) {
  if (!mapTooltip || !regionalLicenseData[region]) return;
  mapRegions.forEach((area) => area.classList.toggle('is-active', area.dataset.region === region));
  activeRegion = region;
  mapTooltipPinned = pinned || mapTooltipPinned;
  if (event?.clientX) {
    activePoint = { clientX: event.clientX, clientY: event.clientY };
  } else {
    const area = mapRegions.find((item) => item.dataset.region === region);
    const areaBounds = area?.getBoundingClientRect();
    if (areaBounds) activePoint = { clientX: areaBounds.left + areaBounds.width / 2, clientY: areaBounds.top + areaBounds.height / 2 };
  }
  mapTooltip.hidden = false;
  renderMapTooltip();
}

function hideRegionTooltip(force = false) {
  if (!mapTooltip || (mapTooltipPinned && !force)) return;
  mapTooltip.hidden = true;
  mapRegions.forEach((area) => area.classList.remove('is-active'));
  activeRegion = null;
  activePoint = null;
  if (force) mapTooltipPinned = false;
}

mapRegions.forEach((area) => {
  const region = area.dataset.region;
  area.setAttribute('tabindex', '0');
  area.setAttribute('role', 'button');
  area.addEventListener('pointerenter', (event) => {
    if (!mapTooltipPinned) showRegionTooltip(region, event);
  });
  area.addEventListener('pointermove', (event) => {
    if (!mapTooltipPinned && activeRegion === region) {
      activePoint = { clientX: event.clientX, clientY: event.clientY };
      positionMapTooltip(activePoint);
    }
  });
  area.addEventListener('focus', () => showRegionTooltip(region));
  area.addEventListener('blur', () => hideRegionTooltip());
  area.addEventListener('click', (event) => {
    event.stopPropagation();
    const wasPinned = mapTooltipPinned && activeRegion === region;
    mapTooltipPinned = !wasPinned;
    if (wasPinned) hideRegionTooltip(true);
    else showRegionTooltip(region, event, true);
  });
  area.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      area.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: activePoint?.clientX || 0, clientY: activePoint?.clientY || 0 }));
    }
    if (event.key === 'Escape') hideRegionTooltip(true);
  });
});

mapInteractive?.addEventListener('pointerleave', () => hideRegionTooltip());
document.addEventListener('click', (event) => {
  if (mapTooltipPinned && !event.target.closest('.kazakhstan-map-interactive')) hideRegionTooltip(true);
});

function updateMapLanguage() {
  const labels = getMapLabels();
  if (mapHint) mapHint.textContent = labels.hint;
  mapRegions.forEach((area) => {
    const region = area.dataset.region;
    const data = regionalLicenseData[region];
    if (!data) return;
    area.setAttribute('aria-label', `${getRegionDisplayName(region)}. ${labels.school}: ${labels.activated.toLowerCase()} ${formatLicenseNumber(data.school.activated)}, ${labels.using.toLowerCase()} ${formatLicenseNumber(data.school.using)}. ${labels.kindergarten}: ${labels.activated.toLowerCase()} ${formatLicenseNumber(data.kindergarten.activated)}, ${labels.using.toLowerCase()} ${formatLicenseNumber(data.kindergarten.using)}.`);
  });
  if (activeRegion) renderMapTooltip();
}

updateMapLanguage();
languageButton?.addEventListener('click', updateMapLanguage);

