// РЕКЛАМНЕ БЛОКИ

function adtop() {
    const adContainer = document.getElementById('adContainer');

    // Создаем элементы
    const adBanner = document.createElement('img');
    const adText = document.createElement('div');

    // Устанавливаем атрибуты и классы
    adBanner.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
    adBanner.alt = 'Роскошный курорт в Дубае';
    adBanner.className = 'ad-banner';

    adText.className = 'ad-text';
    adText.textContent = 'Отдых вашей мечты в Дубае';

    // Добавляем элементы в контейнер
    adContainer.appendChild(adBanner);
    adContainer.appendChild(adText);
};
adtop()

function aside() {
    // Данные для левого aside (большие баннеры)
    const leftAds = [
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=300&q=80",
            alt: "Курорт Дубай"
        },
        {
            src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&h=300&q=80",
            alt: "Пляжный отдых"
        }
    ];

    // Данные для правого aside (маленькие баннеры)
    const rightAds = [
        {
            src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=160&h=200&q=80",
            alt: "Горный курорт"
        },
        {
            src: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=160&h=200&q=80",
            alt: "SPA-курорт"
        }
    ];

    // Функция для создания рекламных блоков
    function generateAds(containerId, adsData) {
        const container = document.getElementById(containerId);

        adsData.forEach(ad => {
            const adDiv = document.createElement('div');
            adDiv.className = 'aside-ad';

            const img = document.createElement('img');
            img.src = ad.src;
            img.alt = ad.alt;
            img.className = 'ad-banner';

            adDiv.appendChild(img);
            container.appendChild(adDiv);
        });
    }

    // Генерация обоих блоков
    generateAds('leftAsideAds', leftAds);   // Левый aside
    generateAds('rightAsideAds', rightAds); // Правый aside
};
aside()


// HEADER
// document.addEventListener('DOMContentLoaded', function() {
function header() {
    const header = document.querySelector('header');

    // Создаем основную структуру header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'flex header';

    // Логотип
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    const logoImg = document.createElement('img');
    logoImg.className = 'logo';
    logoImg.src = '/imgMT/logo.gif';
    logoImg.title = 'словарь Мультитран';
    logoLink.appendChild(logoImg);
    headerDiv.appendChild(logoLink);

    // Правая часть header
    const headerRightDiv = document.createElement('div');
    headerRightDiv.className = 'flex header-right';

    // Кнопки меню
    const menuButtonsDiv = document.createElement('div');
    const dictBtn = document.createElement('a');
    dictBtn.className = 'btn menu-btn1';
    dictBtn.href = '/m.exe?a=1&l1=1&l2=2';
    dictBtn.textContent = 'Словари';

    const forumBtn = document.createElement('a');
    forumBtn.className = 'btn menu-btn2';
    forumBtn.href = '/m.exe?a=2&l1=1&l2=2';
    forumBtn.textContent = 'Форум';

    menuButtonsDiv.appendChild(dictBtn);
    menuButtonsDiv.appendChild(forumBtn);
    headerRightDiv.appendChild(menuButtonsDiv);

    // Контейнер для языка и профиля
    const flexContainer = document.createElement('div');
    flexContainer.className = 'flex';

    // Выбор языка
    const langWrapper = document.createElement('div');
    langWrapper.className = 'lang-wrapper';

    const langCurrent = document.createElement('div');
    const langSpan = document.createElement('span');
    langSpan.textContent = 'Русский';

    const triangleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    triangleSvg.setAttribute('class', 'triangle');
    triangleSvg.setAttribute('viewBox', '0 0 448 512');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z');
    triangleSvg.appendChild(path);

    langCurrent.appendChild(langSpan);
    langCurrent.appendChild(triangleSvg);
    langWrapper.appendChild(langCurrent);

    // Список языков
    const langList = document.createElement('div');
    langList.className = 'lang-list';
    const langUl = document.createElement('ul');

    const languages = [
        { flag: 'flag-ru', name: 'Русский', active: true },
        { flag: 'flag-uk', name: 'English' },
        { flag: 'flag-de', name: 'Deutsch' },
        { flag: 'flag-fr', name: 'Français' },
        { flag: 'flag-es', name: 'Español' },
        { flag: 'flag-is', name: 'עברית' },
        { flag: 'flag-pl', name: 'Polski' },
        { flag: 'flag-cn', name: '中文' },
        { flag: 'flag-ukr', name: 'Українська' }
    ];

    languages.forEach(lang => {
        const li = document.createElement('li');
        const i = document.createElement('i');
        i.className = `sl-flag ${lang.flag}`;
        const span = document.createElement('span');
        span.textContent = lang.name;
        if (lang.active) span.className = 'active';

        li.appendChild(i);
        li.appendChild(span);
        langUl.appendChild(li);
    });

    langList.appendChild(langUl);
    langWrapper.appendChild(langList);
    flexContainer.appendChild(langWrapper);

    // Меню пользователя
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    const userBtn = document.createElement('div');
    userBtn.className = 'btn grey-btn';
    const userLink = document.createElement('a');
    userLink.href = '/m.exe?a=116&UserName=russiangirl';
    userLink.textContent = 'russiangirl';
    userBtn.appendChild(userLink);
    menuContainer.appendChild(userBtn);

    // Выпадающее меню
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    const dropdownUl = document.createElement('ul');

    const menuItems = [
        {
            icon: '<svg viewBox="0 0 24 24"><path fill="#4a76a8" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>',
            text: 'Профиль'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><path fill="#4a76a8" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>',
            text: 'Личные сообщения'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><path fill="#e74c3c" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" /></svg>',
            text: 'Выход'
        }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.icon + item.text;
        dropdownUl.appendChild(li);
    });

    dropdownMenu.appendChild(dropdownUl);
    menuContainer.appendChild(dropdownMenu);
    flexContainer.appendChild(menuContainer);

    // Собираем все вместе
    headerRightDiv.appendChild(flexContainer);
    headerDiv.appendChild(headerRightDiv);
    header.appendChild(headerDiv);
};

header()

// ФОРМА

function form() {
    const formContainer = document.getElementById('formContainer');

    // Создаем основную форму
    const form = document.createElement('form');
    form.id = 'translation';
    form.name = 'translation';
    form.action = '/m.exe';
    form.method = 'get';

    // Создаем блок с полем ввода и кнопкой
    const flexDiv = document.createElement('div');
    flexDiv.className = 'flex';

    const spanItem = document.createElement('span');
    spanItem.className = 'form-item';

    const input = document.createElement('input');
    input.id = 'input-trans';
    input.type = 'search';
    input.className = 'input-trans';
    input.name = 's';
    input.autocomplete = 'off';
    input.value = 'fusion';
    input.size = 45;
    input.tabIndex = 1;

    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear-btn';
    clearBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
    `;

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn grey-btn srch-btn';
    submitBtn.value = 'Поиск';
    submitBtn.tabIndex = 2;

    // Собираем структуру формы
    spanItem.appendChild(input);
    spanItem.appendChild(clearBtn);
    flexDiv.appendChild(spanItem);
    flexDiv.appendChild(submitBtn);
    form.appendChild(flexDiv);
    formContainer.appendChild(form);

    // Создаем нижний блок с ссылками
    const formBottom = document.createElement('div');
    formBottom.className = 'form-btm';

    const phrasesLink = document.createElement('a');
    phrasesLink.className = 'btn grey-btn btn-phrases';
    phrasesLink.href = '#phrases';
    phrasesLink.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        к фразам
    `;

    const reversoLink = document.createElement('a');
    reversoLink.title = 'Reverso Context (English⇔Russian)';
    reversoLink.target = '_blank';
    reversoLink.href = 'https://context.reverso.net/перевод/английский-русский/fusion';
    reversoLink.innerHTML = '<font color="#0970ac">Reverso</font><font color="FireBrick">Context</font>';

    const googleLink = document.createElement('a');
    googleLink.title = 'Google Translate';
    googleLink.target = '_blank';
    googleLink.href = 'https://translate.google.com/?sl=auto&text=fusion';
    googleLink.innerHTML = `
        <font color="DodgerBlue">G</font>
        <font color="Crimson">o</font>
        <font color="Orange">o</font>
        <font color="DodgerBlue">g</font>
        <font color="Green">l</font>
        <font color="Crimson">e</font>
        <font color="dimgray">Translate</font>
    `;

    const plusLink = document.createElement('a');
    plusLink.target = '_blank';
    plusLink.href = '/m.exe?a=28&amp;l1=1&amp;l2=2&amp;forcelang=1&amp;select=1&amp;s=fusion';
    plusLink.textContent = '+';

    // Добавляем разделители и собираем нижний блок
    formBottom.appendChild(phrasesLink);
    formBottom.appendChild(document.createTextNode(' '));
    formBottom.appendChild(createSeparator());
    formBottom.appendChild(document.createTextNode(' '));
    formBottom.appendChild(reversoLink);
    formBottom.appendChild(document.createTextNode(' '));
    formBottom.appendChild(createSeparator());
    formBottom.appendChild(document.createTextNode(' '));
    formBottom.appendChild(googleLink);
    formBottom.appendChild(document.createTextNode(' '));
    formBottom.appendChild(createSeparator());
    formBottom.appendChild(document.createTextNode(' '));
    formBottom.appendChild(plusLink);

    formContainer.appendChild(formBottom);

    // Вспомогательная функция для создания разделителя
    function createSeparator() {
        const span = document.createElement('span');
        span.className = 'color-gray';
        span.textContent = '|';
        return span;
    }
};
form()


// КНОПКА ОЧИСТКИ ФОРМЫ

function clearBtn() {
    const input = document.getElementById('input-trans');
    const clearBtn = document.querySelector('.clear-btn');

    // Проверяем при загрузке страницы
    updateClearButton();

    // Следим за вводом текста
    input.addEventListener('input', updateClearButton);

    // Очищаем поле и скрываем кнопку при клике
    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        input.focus(); // Фокус остается в поле (опционально)
    });

    // Функция для показа/скрытия кнопки
    function updateClearButton() {
        if (input.value.trim() !== '') {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
    }
}

clearBtn()


function dictTop() {
    const dictContainer = document.getElementById('dict-top');

    // 1. Генерация блока с частями речи
    const speechParts = document.createElement('div');
    speechParts.id = 'speech-parts';

    const speechSpan = document.createElement('span');
    speechSpan.className = 'small';

    const partsOfSpeech = [
        { text: 'существительное', href: '#noun' },
        { text: 'существительное', href: '#noun' },
        { text: 'глагол', href: '#verb' },
        { text: 'прилагательное', href: '#adjective' }
    ];

    partsOfSpeech.forEach((part, index) => {
        const link = document.createElement('a');
        link.href = part.href;
        link.textContent = part.text;
        speechSpan.appendChild(link);

        if (index < partsOfSpeech.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'color-gray';
            separator.textContent = '|';
            speechSpan.appendChild(document.createTextNode(' '));
            speechSpan.appendChild(separator);
            speechSpan.appendChild(document.createTextNode(' '));
        }
    });

    speechParts.appendChild(speechSpan);
    dictContainer.appendChild(speechParts);

    // 2. Генерация серой линии с заголовком слова
    const grayLine = document.createElement('div');
    grayLine.className = 'grayline';

    const wordLine = document.createElement('div');
    wordLine.className = 'word-line';

    // Якорь
    const anchor = document.createElement('a');
    anchor.name = 'noun';

    // Заголовок h1
    const heading = document.createElement('h1');
    const headingLink = document.createElement('a');
    headingLink.href = '/m.exe?a=118&s=fusion&l1=1&l2=2&init=1';
    headingLink.textContent = 'fusion';
    heading.appendChild(headingLink);

    // Транскрипция
    const transcription = document.createElement('span');
    transcription.className = 'color-gray';
    transcription.textContent = "['fju:ʒ(ə)n]";

    // Часть речи
    const partOfSpeech = document.createElement('em');
    const posSpan = document.createElement('span');
    posSpan.className = 'color-gray';
    posSpan.textContent = 'сущ.';
    partOfSpeech.appendChild(posSpan);

    // Аудиоплеер
    const audio = document.createElement('audio');
    audio.id = 'myAudio';
    const source = document.createElement('source');
    source.src = '../Sounds/English/fusion.mp3';
    source.type = 'audio/mpeg';
    audio.appendChild(source);
    audio.appendChild(document.createTextNode('This HTML5 player is not supported by your browser'));

    const playButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    playButton.id = 'play';
    playButton.classList.add('play');
    playButton.setAttribute('width', '18');
    playButton.setAttribute('height', '18');
    playButton.setAttribute('viewBox', '0 0 640 512');
    playButton.addEventListener('click', aud_play_pause);
    //  или 
    // playButton.setAttribute('onclick', 'aud_play_pause()');

    // Кнопка play
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z');

    playButton.appendChild(path);

    // Ссылка на ударения
    const accentsDiv = document.createElement('div');
    const accentsSpan = document.createElement('span');
    accentsSpan.className = 'small';
    const accentsLink = document.createElement('a');
    accentsLink.href = '/m.exe?a=467&s=fusion&l1=1&l2=2';
    accentsLink.textContent = 'ударения';
    accentsSpan.appendChild(accentsLink);
    accentsDiv.appendChild(accentsSpan);

    // Собираем word-line
    wordLine.appendChild(anchor);
    wordLine.appendChild(heading);
    wordLine.appendChild(document.createTextNode(' '));
    wordLine.appendChild(transcription);
    wordLine.appendChild(document.createTextNode(' '));
    wordLine.appendChild(partOfSpeech);
    wordLine.appendChild(document.createTextNode(' '));
    wordLine.appendChild(audio);
    wordLine.appendChild(playButton);

    // Собираем grayline
    grayLine.appendChild(wordLine);
    grayLine.appendChild(accentsDiv);

    dictContainer.appendChild(grayLine);

    // 3. Генерация всех словарных статей
    const dictionaryEntries = [
        {
            subject: 'общ.',
            title: 'Общая лексика',
            entries: [
                'слияние', 'плавка', 'коалиция', 'расплавление',
                'расплавленная масса', 'объединение', 'джаз-рок',
                'термоядерная реакция', 'выплавление', 'расплавка',
                'расплавливание', 'срощение', 'сплав', 'расплав'
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=0'
        },
        {
            subject: 'Gruzovik',
            title: 'Общая лексика',
            entries: [
                { text: 'расплавка', note: '= расплавление' },
                { text: 'расплавливание', note: '= расплавление' },
                'слитие',
                'слитность',
                { text: 'срощение', note: '= сращение' }
            ],
            href: '/m.exe?a=116&UserName=Gruzovik'
        },
        {
            subject: 'автомат.',
            title: 'Автоматика',
            entries: [
                { text: 'сочетание', note: 'напр., датчиков' },
                { text: 'сопоставление', note: 'данных' },
                { text: 'слияние', note: 'данных' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=371'
        },
        {
            subject: 'агрохим.',
            title: 'Агрохимия',
            entries: [
                { text: 'обесфторивание', note: 'фосфата' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=769'
        },
        {
            subject: 'атом.эн.',
            title: 'Атомная и термоядерная энергетика',
            entries: [
                { text: 'термояд', note: 'breakthrough for computing, fusion, and batteries <a href="/m.exe?a=116&UserName=MichaelBurov" title="30.07.2023">MichaelBurov</a>' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=245'
        },
        {
            subject: 'бизн.',
            title: 'Бизнес',
            entries: ['интеграция'],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=291'
        },
        {
            subject: 'биотех.',
            title: 'Биотехнология',
            entries: [
                'встраивание',
                { text: 'фузоморфогенез', note: '<a href="/m.exe?a=116&UserName=Игорь_2006" title="3.08.2018">Игорь_2006</a>' },
                { text: 'слияние', note: 'объединение цитоплазматического и генетического материала гетерологичных клеток (напр., донора и реципиента), в результате чего донорские СК приобретают характеристики клеток реципиента <a href="/m.exe?a=116&UserName=Игорь_2006" title="3.08.2018">Игорь_2006</a>' },
                { text: 'фьюжн', note: 'объединение цитоплазматического и генетического материала гетерологичных клеток (напр., донора и реципиента), в результате чего донорские СК приобретают характеристики клеток реципиента <a href="/m.exe?a=116&UserName=Игорь_2006" title="3.08.2018">Игорь_2006</a>' },
                { text: 'слияние, фьюжн', note: 'объединение цитоплазматического и генетического материала гетерологичных клеток (напр., донора и реципиента), в результате чего донорские СК приобретают характеристики клеток реципиента <a href="/m.exe?a=116&UserName=Игорь_2006" title="6.07.2009">Игорь_2006</a>' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=226'
        },
        {
            subject: 'воен.',
            title: 'Военный термин',
            entries: [
                { text: 'синтез', note: 'ядра атома <a href="/m.exe?a=116&UserName=Киселев">Киселев</a>' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=24'
        },
        {
            subject: 'воен., тех.',
            title: 'Военный термин, Техника',
            entries: ['расплавленное состояние'],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=24'
        },
        {
            subject: 'горн.',
            title: 'Горное дело',
            entries: [
                { text: 'прожигание', note: 'скважин' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=78'
        },
        {
            subject: 'делов.',
            title: 'Деловая лексика',
            entries: [
                { text: 'совмещение цифровых данных', note: 'в DICOM формате КТ с МРТ или ПЭТ-КТ <a href="/m.exe?a=116&UserName=Natalya+Rovina" title="9.11.2017">Natalya Rovina</a>' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=170'
        },
        {
            subject: 'деф.',
            title: 'Дефектоскопия',
            entries: [
                { text: 'расплав', note: 'сплавление' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=465'
        },
        {
            subject: 'золот., обогащ.',
            title: 'Золотодобыча, Обогащение полезных ископаемых',
            entries: [
                { text: 'тигельная плавка', note: '<a href="/m.exe?a=116&UserName=Derzhavin" title="20.11.2010">Derzhavin</a>' }
            ],
            href: '/m.exe?a=110&l1=1&l2=2&s=fusion&sc=592'
        }
    ];

    // Функция для создания словарного блока
    function createDictionaryBlock(entry) {
        const block = document.createElement('div');
        block.className = 'dict-block';

        // Блок с темой
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'dict-subj';
        const subjectLink = document.createElement('a');
        subjectLink.href = entry.href;
        subjectLink.title = entry.title;
        subjectLink.textContent = entry.subject;
        subjectDiv.appendChild(subjectLink);

        // Блок с переводами
        const entryDiv = document.createElement('div');
        entryDiv.className = 'dict-entry';

        entry.entries.forEach((item, index) => {
            if (typeof item === 'object') {
                // Элемент с примечанием
                const link = document.createElement('a');
                link.href = `/m.exe?s=${encodeURIComponent(item.text)}&l1=2&l1=1`;
                link.textContent = item.text;
                entryDiv.appendChild(link);

                if (item.note) {
                    const noteSpan = document.createElement('span');
                    noteSpan.className = 'color-gray';
                    noteSpan.innerHTML = ` (${item.note})`;
                    entryDiv.appendChild(noteSpan);
                }
            } else {
                // Простой элемент
                const link = document.createElement('a');
                link.href = `/m.exe?s=${encodeURIComponent(item)}&l1=2&l1=1`;
                link.textContent = item;
                entryDiv.appendChild(link);
            }

            // Добавляем разделитель
            if (index < entry.entries.length - 1) {
                entryDiv.appendChild(document.createTextNode('; '));
            }
        });

        block.appendChild(subjectDiv);
        block.appendChild(entryDiv);

        return block;
    }

    // Добавляем все словарные статьи в контейнер
    dictionaryEntries.forEach(entry => {
        dictContainer.appendChild(createDictionaryBlock(entry));
    });

};
dictTop()

// PHRASES

function phrases() {
    const dictPhrases = document.getElementById('dict-phrases');

    // Создаем структуру
    const grayline = document.createElement('div');
    grayline.className = 'grayline sticky-bottom';

    const wordLine = document.createElement('div');
    wordLine.className = 'word-line';

    const anchor = document.createElement('a');
    anchor.name = 'phrases';

    const div = document.createElement('div');
    div.textContent = 'fusion:';

    const phraseLink = document.createElement('a');
    phraseLink.id = 'phraseCountLink';
    phraseLink.href = '/m.exe?a=3&l1=1&l2=2&s=fusion';

    const span = document.createElement('span');
    span.id = 'phraseCount';
    phraseLink.appendChild(span);
    phraseLink.appendChild(document.createTextNode(' фраз'));


    const button = document.createElement('button');
    button.className = 'btn menu-btn2 btn-phrases-btm';
    button.id = 'toggleCheckboxes';
    button.textContent = 'Очистить';

    // Собираем grayline
    wordLine.appendChild(anchor);
    wordLine.appendChild(div);
    wordLine.appendChild(phraseLink);

    grayline.appendChild(wordLine);
    grayline.appendChild(button);

    // Создаем контейнер фраз
    const phrasesContainer = document.createElement('div');
    phrasesContainer.className = 'phrases-container';

    // Массив данных для фраз
    const phrasesData = [
        { text: 'Авиационная медицина', count: 1, sc: 479 },
        { text: 'Майкрософт', count: 1, sc: 847 },
        { text: 'Почвоведение', count: 1, sc: 520 },
        { text: 'Авиация', count: 2, sc: 4 },
        { text: 'Макаров', count: 78, sc: 517 },
        { text: 'Природные ресурсы и охрана природы', count: 2, sc: 1067 },
        { text: 'Автоматика', count: 26, sc: 371 },
        { text: 'Маркетинг', count: 2, sc: 746 },
        { text: 'Программирование', count: 2, sc: 357 },
        { text: 'Автомобили', count: 1, sc: 59 },
        { text: 'Математика', count: 2, sc: 41 },
        { text: 'Программное обеспечение', count: 1, sc: 879 },
        { text: 'Авиационная медицина', count: 1, sc: 479 },
        { text: 'Майкрософт', count: 1, sc: 847 },
        { text: 'Почвоведение', count: 1, sc: 520 },
        { text: 'Авиация', count: 2, sc: 4 },
        { text: 'Макаров', count: 78, sc: 517 },
        { text: 'Природные ресурсы и охрана природы', count: 2, sc: 1067 },
        { text: 'Автоматика', count: 26, sc: 371 },
        { text: 'Маркетинг', count: 2, sc: 746 },
        { text: 'Программирование', count: 2, sc: 357 },
        { text: 'Автомобили', count: 1, sc: 59 },
        { text: 'Математика', count: 2, sc: 41 },
        { text: 'Программное обеспечение', count: 1, sc: 879 },
        { text: 'Авиационная медицина', count: 1, sc: 479 },
        { text: 'Майкрософт', count: 1, sc: 847 },
        { text: 'Почвоведение', count: 1, sc: 520 },
        { text: 'Авиация', count: 2, sc: 4 },
        { text: 'Макаров', count: 78, sc: 517 },
        { text: 'Природные ресурсы и охрана природы', count: 2, sc: 1067 },
        { text: 'Автоматика', count: 26, sc: 371 },
        { text: 'Маркетинг', count: 2, sc: 746 },
        { text: 'Программирование', count: 2, sc: 357 },
        { text: 'Автомобили', count: 1, sc: 59 },
        { text: 'Математика', count: 2, sc: 41 },
        { text: 'Программное обеспечение', count: 1, sc: 879 },
        { text: 'Авиационная медицина', count: 1, sc: 479 },
        { text: 'Майкрософт', count: 1, sc: 847 },
        { text: 'Почвоведение', count: 1, sc: 520 },
        { text: 'Авиация', count: 2, sc: 4 },
        { text: 'Макаров', count: 78, sc: 517 },
        { text: 'Природные ресурсы и охрана природы', count: 2, sc: 1067 },
        { text: 'Автоматика', count: 26, sc: 371 },
        { text: 'Маркетинг', count: 2, sc: 746 },
        { text: 'Программирование', count: 2, sc: 357 },
        { text: 'Автомобили', count: 1, sc: 59 },
        { text: 'Математика', count: 2, sc: 41 },
        { text: 'Программное обеспечение', count: 1, sc: 879 }
    ];

    // Создаем пары фраз
    for (let i = 0; i < phrasesData.length; i++) {
        const phrasePair = document.createElement('div');
        phrasePair.className = 'phrase-pair';

        const phras = document.createElement('div');
        phras.className = 'phras';

        const link = document.createElement('a');
        link.href = `/m.exe?a=3&sc=${phrasesData[i].sc}&s=fusion&l1=1&l2=2`;
        link.textContent = phrasesData[i].text;

        const phrasCnt = document.createElement('div');
        phrasCnt.className = 'phras_cnt';
        phrasCnt.textContent = phrasesData[i].count;

        phras.appendChild(link);
        phrasePair.appendChild(phras);
        phrasePair.appendChild(phrasCnt);

        phrasesContainer.appendChild(phrasePair);
    }



    // Добавляем все элементы в основной контейнер
    dictPhrases.appendChild(grayline);
    dictPhrases.appendChild(phrasesContainer);

    const phrasePairs = document.querySelectorAll('.phrase-pair');
    const themesCount = phrasePairs.length;
    const text = document.createTextNode(` в ${themesCount} тематиках`);
    wordLine.appendChild(text);

    // Установим количество фраз (примерное значение)
    // document.getElementById('phraseCount').textContent = '100';


};
phrases()

function phrasecounter() {

    let allChecked = true; // состояние toggle

    // function updatePhraseCount() {
    //     const checkboxes = document.querySelectorAll('.phras-checkbox');
    //     let total = 0;

    //     checkboxes.forEach(checkbox => {
    //         if (checkbox.checked) {
    //             const cntElement = checkbox.closest('.phrase-pair').querySelector('.phras_cnt');
    //             total += parseInt(cntElement.textContent) || 0;
    //         }
    //     });

    //     document.getElementById('phraseCount').textContent = total;
    //     document.getElementById('phraseCountLink').href =
    //         `/m.exe?a=3&l1=1&l2=2&s=fusion&p=${Array.from(checkboxes)
    //             .filter(cb => cb.checked)
    //             .map(cb => cb.dataset.sc)
    //             .join(',')}`;
    // }

    function updatePhraseCount() {
        const checkboxes = document.querySelectorAll('.phras-checkbox');
        let total = 0;
        let visibleThemes = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const cntElement = checkbox.closest('.phrase-pair').querySelector('.phras_cnt');
                total += parseInt(cntElement.textContent) || 0;
                visibleThemes++; // Считаем количество выбранных тематик
            }
        });

        document.getElementById('phraseCount').textContent = total;
        document.getElementById('phraseCountLink').href =
            `/m.exe?a=3&l1=1&l2=2&s=fusion&p=${Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.dataset.sc)
                .join(',')}`;

        // Обновляем счетчик тематик
        const themeCountElements = document.querySelectorAll('.word-line');
        themeCountElements.forEach(element => {
            const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
            textNodes.forEach(node => {
                if (node.nodeValue.includes('тематиках')) {
                    node.nodeValue = ` в ${visibleThemes} тематиках`;
                }
            });
        });
    }

    function addCheckboxes() {
        const phrasElements = document.querySelectorAll('.phrase-pair .phras');

        phrasElements.forEach(phras => {
            // Проверяем, не добавлен ли уже чекбокс
            if (phras.querySelector('.phras-checkbox')) return;

            const link = phras.querySelector('a');
            if (!link) return;

            // Извлекаем sc параметр из ссылки
            const scMatch = link.href.match(/sc=(\d+)/);
            if (!scMatch) return;
            const scValue = scMatch[1];

            // Создаем обертку для позиционирования
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            wrapper.style.paddingLeft = '22px';

            // Создаем чекбокс
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'phras-checkbox';
            checkbox.checked = allChecked;
            checkbox.dataset.sc = scValue; // Сохраняем значение sc

            checkbox.addEventListener('change', updatePhraseCount);

            // Переносим содержимое в обертку
            wrapper.appendChild(checkbox);
            while (phras.firstChild) {
                wrapper.appendChild(phras.firstChild);
            }
            phras.appendChild(wrapper);
        });

        updatePhraseCount();
    }

    document.getElementById('toggleCheckboxes').addEventListener('click', () => {
        allChecked = !allChecked;
        const checkboxes = document.querySelectorAll('.phras-checkbox');

        checkboxes.forEach(cb => {
            cb.checked = allChecked;
        });

        updatePhraseCount();

        // Меняем текст кнопки
        document.getElementById('toggleCheckboxes').textContent = allChecked
            ? 'Очистить'
            : 'Выделить все';
    });

    document.addEventListener('DOMContentLoaded', () => {
        addCheckboxes();

    });

    // Обновляем счетчик при загрузке страницы
    window.addEventListener('load', updatePhraseCount);

}

phrasecounter()

// ФУТЕР
function footer() {
    const footer = document.querySelector('footer.grayline');

    // Очищаем футер (на случай, если там есть что-то по умолчанию)
    footer.innerHTML = '';

    // Создаем первую колонку
    const column1 = document.createElement('div');
    column1.className = 'column';

    // Ссылки для первой колонки
    const link1 = document.createElement('a');
    link1.className = 'ft-mrg';
    link1.href = '/m.exe?a=104&l1=1&l2=2&s=fusion';
    link1.textContent = 'Добавить словарную статью';

    const link2 = document.createElement('a');
    link2.className = 'ft-mrg';
    link2.href = '/m.exe?l1=1&l2=2&s=fusion&act1=26';
    link2.textContent = 'Сообщить об ошибке';

    const link3 = document.createElement('a');
    link3.className = 'ft-mrg';
    link3.href = 'javascript://';
    link3.setAttribute('onclick', "GetShortUrl('ll1=1&ll2=2&s=fusion', '2')");
    link3.textContent = 'Короткая ссылка';

    const link4 = document.createElement('a');
    link4.href = '#top';
    link4.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="blue" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Вверх
    `;

    // Добавляем ссылки в первую колонку
    column1.appendChild(link1);
    column1.appendChild(link2);
    column1.appendChild(link3);
    column1.appendChild(link4);

    // Создаем вторую колонку
    const column2 = document.createElement('div');
    column2.className = 'column';

    // Ссылки для второй колонки
    const linksData = [
        { href: '/m.exe?a=44', text: 'Купить словарь' },
        { href: '/m.exe?a=421', text: 'Соглашение пользователя' },
        { href: '/m.exe?a=24&action=0&s=fusion', text: 'Настройки' },
        { href: '/m.exe?a=5&m=485', text: 'Способы выбора языков' },
        { href: '/m.exe?a=382', text: 'Контакты' }
    ];

    linksData.forEach(linkData => {
        const link = document.createElement('a');
        link.className = 'ft-mrg';
        link.href = linkData.href;
        link.textContent = linkData.text;
        column2.appendChild(link);
    });

    // Добавляем колонки в футер
    footer.appendChild(column1);
    footer.appendChild(column2);
};
footer()