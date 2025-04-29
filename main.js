// Данные для карточек
const spaceObjects = [
    {
        id: 1,
        title: "Солнце",
        type: "star",
        image: "images/planets/sun.jpg",
        description: "Солнце - это звезда в центре нашей Солнечной системы. Это почти идеальная сфера горячей плазмы, нагретая до накала ядерными реакциями в её ядре.",
        facts: [
            "Солнце составляет 99.86% массы всей Солнечной системы",
            "Оно производит энергию, эквивалентную 100 миллиардам водородных бомб каждую секунду",
            "Солнцу требуется около 225-250 миллионов лет, чтобы совершить один оборот вокруг центра Млечного Пути"
        ],
        size: "Диаметр: 1,392,700 км",
        temp: "Температура ядра: ~15 млн °C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 2,
        title: "Меркурий",
        type: "planet",
        image: "images/planets/mercury.jpg",
        description: "Меркурий - самая маленькая планета в Солнечной системе и ближайшая к Солнцу. Это каменистая планета с кратерированной поверхностью, похожей на Луну.",
        facts: [
            "Год на Меркурии длится всего 88 земных дней",
            "Несмотря на близость к Солнцу, на Меркурии есть водяной лед в постоянно затененных кратерах на полюсах",
            "Меркурий не имеет естественных спутников"
        ],
        size: "Диаметр: 4,880 км",
        temp: "Температура: от -173°C до 427°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 3,
        title: "Венера",
        type: "planet",
        image: "images/planets/venus.jpg",
        description: "Венера - вторая планета от Солнца, названная в честь римской богини любви и красоты. Это самая горячая планета в нашей системе, несмотря на то, что Меркурий ближе к Солнцу.",
        facts: [
            "Венера вращается в обратном направлении по сравнению с другими планетами",
            "Атмосферное давление на поверхности Венеры в 92 раза больше, чем на Земле",
            "Венера - самый яркий естественный объект на ночном небе после Луны"
        ],
        size: "Диаметр: 12,104 км",
        temp: "Температура: ~462°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 4,
        title: "Земля",
        type: "planet",
        image: "images/planets/earth.jpg",
        description: "Земля - третья планета от Солнца и единственное известное место во Вселенной, где существует жизнь. Это самая плотная планета в Солнечной системе.",
        facts: [
            "Земля - единственная планета, не названная в честь божества",
            "71% поверхности Земли покрыто водой",
            "У Земли есть один естественный спутник - Луна"
        ],
        size: "Диаметр: 12,742 км",
        temp: "Температура: от -89°C до 58°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 5,
        title: "Марс",
        type: "planet",
        image: "images/planets/mars.jpg",
        description: "Марс - четвертая планета от Солнца, часто называемая 'Красной планетой' из-за оксида железа на её поверхности. Это место активных исследований и потенциальной колонизации.",
        facts: [
            "На Марсе находится самая высокая гора в Солнечной системе - Олимп (21,9 км)",
            "Марс имеет два небольших спутника - Фобос и Деймос",
            "Сутки на Марсе длятся всего на 40 минут дольше, чем на Земле"
        ],
        size: "Диаметр: 6,779 км",
        temp: "Температура: от -153°C до 20°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 6,
        title: "Юпитер",
        type: "planet",
        image: "images/planets/jupiter.jpg",
        description: "Юпитер - пятая планета от Солнца и самая большая в Солнечной системе. Это газовый гигант, состоящий в основном из водорода и гелия.",
        facts: [
            "Юпитер имеет 79 известных спутников",
            "Большое Красное Пятно - гигантский шторм, бушующий уже более 400 лет",
            "Масса Юпитера в 2.5 раза больше, чем всех остальных планет вместе взятых"
        ],
        size: "Диаметр: 139,820 км",
        temp: "Температура ядра: ~24,000°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 7,
        title: "Сатурн",
        type: "planet",
        image: "images/planets/saturn.jpg",
        description: "Сатурн - шестая планета от Солнца, известная своими впечатляющими кольцами. Это газовый гигант, второй по величине в Солнечной системе.",
        facts: [
            "Кольца Сатурна состоят в основном из частиц льда и камня",
            "Сатурн - наименее плотная планета в Солнечной системе",
            "У Сатурна 82 подтвержденных спутника"
        ],
        size: "Диаметр: 116,460 км",
        temp: "Температура ядра: ~11,700°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 8,
        title: "Уран",
        type: "planet",
        image: "images/planets/uranus.jpg",
        description: "Уран - седьмая планета от Солнца, ледяной гигант с уникальным наклоном оси вращения. Он вращается 'на боку' относительно плоскости орбиты.",
        facts: [
            "Уран был первой планетой, открытой с помощью телескопа",
            "Уран имеет 13 известных колец",
            "Один год на Уране длится 84 земных года"
        ],
        size: "Диаметр: 50,724 км",
        temp: "Температура ядра: ~5,000°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 9,
        title: "Нептун",
        type: "planet",
        image: "images/planets/neptune.jpg",
        description: "Нептун - восьмая и самая дальняя планета от Солнца в Солнечной системе. Это ледяной гигант с самыми сильными ветрами в Солнечной системе.",
        facts: [
            "Нептун был первой планетой, существование которой было предсказано математически",
            "На Нептуне дуют самые сильные ветры - до 2,100 км/ч",
            "Год на Нептуне длится 165 земных лет"
        ],
        size: "Диаметр: 49,244 км",
        temp: "Температура ядра: ~5,000°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 10,
        title: "Плутон",
        type: "other",
        image: "images/planets/pluto.jpg",
        description: "Плутон - карликовая планета в поясе Койпера, ранее классифицировавшаяся как девятая планета Солнечной системы. Он меньше Луны и состоит в основном из льда и камня.",
        facts: [
            "Плутон был переклассифицирован в карликовую планету в 2006 году",
            "У Плутона есть 5 известных спутников, самый крупный - Харон",
            "Один год на Плутоне длится 248 земных лет"
        ],
        size: "Диаметр: 2,377 км",
        temp: "Температура: от -240°C до -218°C",
        age: "Возраст: ~4.6 млрд лет"
    },
    {
        id: 11,
        title: "Млечный Путь",
        type: "galaxy",
        image: "images/planets/milky-way.jpg",
        description: "Млечный Путь - галактика, содержащая нашу Солнечную систему. Это спиральная галактика с перемычкой, содержащая от 100 до 400 миллиардов звезд.",
        facts: [
            "Диаметр Млечного Пути составляет около 100,000 световых лет",
            "Солнечная система находится на расстоянии около 27,000 световых лет от центра галактики",
            "Млечный Путь и галактика Андромеды столкнутся через ~4.5 миллиарда лет"
        ],
        size: "Диаметр: ~100,000 световых лет",
        temp: "Температура варьируется",
        age: "Возраст: ~13.6 млрд лет"
    },
    {
        id: 12,
        title: "Черная дыра",
        type: "other",
        image: "images/planets/black-hole.jpg",
        description: "Черная дыра - область пространства-времени, гравитационное притяжение которой настолько велико, что покинуть её не могут даже объекты, движущиеся со скоростью света.",
        facts: [
            "Первое изображение черной дыры было получено в 2019 году",
            "В центре Млечного Пути находится сверхмассивная черная дыра Стрелец A*",
            "Черные дыры могут испаряться благодаря излучению Хокинга"
        ],
        size: "Размеры варьируются",
        temp: "Температура: от почти абсолютного нуля до миллионов градусов",
        age: "Возраст: варьируется"
    }
];

// Данные для викторины
const quizQuestions = [
    {
        question: "Какая планета известна как 'Красная планета'?",
        options: ["Венера", "Марс", "Юпитер", "Сатурн"],
        answer: 1
    },
    {
        question: "Какой газ составляет большую часть атмосферы Земли?",
        options: ["Кислород", "Углекислый газ", "Азот", "Водород"],
        answer: 2
    },
    {
        question: "Как называется галактика, в которой находится наша Солнечная система?",
        options: ["Андромеда", "Треугольник", "Млечный Путь", "Сигара"],
        answer: 2
    },
    {
        question: "Какой космический объект известен своими кольцами?",
        options: ["Юпитер", "Уран", "Нептун", "Сатурн"],
        answer: 3
    },
    {
        question: "Какой космический телескоп был запущен в 1990 году и сделал множество важных открытий?",
        options: ["Спитцер", "Хаббл", "Чандра", "Кеплер"],
        answer: 1
    },
    {
        question: "Какая звезда находится ближе всего к Земле?",
        options: ["Сириус", "Альфа Центавра", "Полярная звезда", "Солнце"],
        answer: 3
    },
    {
        question: "Как называется явление, когда Луна полностью закрывает Солнце?",
        options: ["Лунное затмение", "Солнечное затмение", "Полнолуние", "Парад планет"],
        answer: 1
    },
    {
        question: "Какой космический аппарат первым достиг межзвездного пространства?",
        options: ["Вояджер-1", "Пионер-10", "Новые горизонты", "Вояджер-2"],
        answer: 0
    },
    {
        question: "Какая планета имеет самое большое количество спутников?",
        options: ["Юпитер", "Сатурн", "Уран", "Нептун"],
        answer: 1
    },
    {
        question: "Как называется теория, объясняющая происхождение Вселенной?",
        options: ["Теория струн", "Теория относительности", "Теория Большого взрыва", "Квантовая теория"],
        answer: 2
    }
];

// Данные для достижений
const achievements = [
    {
        id: 1,
        title: "Первые шаги",
        description: "Просмотреть 3 карточки с космическими объектами",
        icon: "fas fa-star",
        condition: (user) => user.viewedCards >= 3,
        lockedDescription: "Просмотрите 3 карточки, чтобы разблокировать"
    },
    {
        id: 2,
        title: "Любознательный исследователь",
        description: "Просмотреть все карточки с планетами",
        icon: "fas fa-globe-americas",
        condition: (user) => user.viewedPlanets >= 8,
        lockedDescription: "Просмотрите все карточки планет (8)"
    },
    {
        id: 3,
        title: "Звездный путь",
        description: "Просмотреть все типы космических объектов",
        icon: "fas fa-rocket",
        condition: (user) => 
            user.viewedTypes.includes('planet') && 
            user.viewedTypes.includes('star') && 
            user.viewedTypes.includes('galaxy') && 
            user.viewedTypes.includes('other'),
        lockedDescription: "Просмотрите хотя бы по одному объекту каждого типа"
    },
    {
        id: 4,
        title: "Викторинный мастер",
        description: "Правильно ответить на все вопросы викторины",
        icon: "fas fa-trophy",
        condition: (user) => user.quizPerfect >= 1,
        lockedDescription: "Ответьте правильно на все вопросы викторины"
    },
    {
        id: 5,
        title: "Космический эксперт",
        description: "Просмотреть все карточки и пройти викторину",
        icon: "fas fa-user-astronaut",
        condition: (user) => user.viewedCards >= spaceObjects.length && user.quizCompleted >= 1,
        lockedDescription: "Просмотрите все карточки и пройдите викторину"
    }
];

// Состояние пользователя
const userState = {
    viewedCards: 0,
    viewedPlanets: 0,
    viewedTypes: [],
    unlockedAchievements: [],
    quizCompleted: 0,
    quizPerfect: 0,
    quizScore: 0
};

// DOM элементы
const elements = {
    cardsContainer: document.getElementById('cards-container'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    cardModal: document.getElementById('card-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalImage: document.getElementById('modal-image'),
    modalFacts: document.getElementById('modal-facts'),
    modalSize: document.getElementById('modal-size'),
    modalTemp: document.getElementById('modal-temp'),
    modalAge: document.getElementById('modal-age'),
    closeModal: document.querySelector('.close-modal'),
    quizQuestion: document.getElementById('question'),
    quizOptions: document.getElementById('options'),
    quizNextBtn: document.getElementById('next-btn'),
    quizProgressBar: document.getElementById('progress-bar'),
    quizProgressText: document.getElementById('progress-text'),
    quizScoreElement: document.getElementById('score'),
    achievementsContainer: document.getElementById('achievements-container'),
    exploreBtn: document.getElementById('explore-btn'),
    backToTopBtn: document.getElementById('back-to-top'),
    navLinks: document.querySelectorAll('.nav-link'),
    menuToggle: document.querySelector('.menu-toggle'),
    nav: document.querySelector('.nav')
};

// Текущее состояние викторины
let quizState = {
    currentQuestion: 0,
    score: 0,
    selectedOption: null,
    quizFinished: false
};

// Инициализация приложения
function init() {
    renderCards();
    setupEventListeners();
    renderAchievements();
    checkUnlockedAchievements();
    
    // Показать первую карточку с анимацией
    setTimeout(() => {
        document.querySelector('.card')?.classList.add('visible');
    }, 500);
}

// Рендер карточек
function renderCards(filter = 'all') {
    elements.cardsContainer.innerHTML = '';
    
    const filteredObjects = filter === 'all' 
        ? spaceObjects 
        : spaceObjects.filter(obj => obj.type === filter);
    
    filteredObjects.forEach((obj, index) => {
        const card = document.createElement('div');
        card.className = `card ${obj.type}`;
        card.dataset.id = obj.id;
        card.dataset.type = obj.type;
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${obj.image}" alt="${obj.title}">
            </div>
            <div class="card-content">
                <h3>${obj.title}</h3>
                <p>${obj.description.substring(0, 100)}...</p>
                <div class="card-tags">
                    <span class="tag">${getTypeName(obj.type)}</span>
                </div>
            </div>
        `;
        
        // Добавляем задержку для анимации появления
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        elements.cardsContainer.appendChild(card);
    });
    
    // Добавляем обработчики событий для новых карточек
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openCardModal(card.dataset.id));
    });
}

// Получение названия типа
function getTypeName(type) {
    const types = {
        planet: 'Планета',
        star: 'Звезда',
        galaxy: 'Галактика',
        other: 'Другое'
    };
    return types[type] || type;
}

// Открытие модального окна с карточкой
function openCardModal(id) {
    const card = spaceObjects.find(obj => obj.id == id);
    if (!card) return;
    
    // Обновляем состояние пользователя
    updateUserState(card);
    
    // Заполняем модальное окно данными
    elements.modalTitle.textContent = card.title;
    elements.modalDescription.textContent = card.description;
    elements.modalImage.src = card.image;
    elements.modalImage.alt = card.title;
    elements.modalSize.textContent = card.size;
    elements.modalTemp.textContent = card.temp;
    elements.modalAge.textContent = card.age;
    
    // Заполняем факты
    elements.modalFacts.innerHTML = '';
    card.facts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        elements.modalFacts.appendChild(li);
    });
    
    // Показываем модальное окно
    elements.cardModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Анимация появления
    setTimeout(() => {
        document.querySelector('.modal-content').style.opacity = '1';
        document.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

// Закрытие модального окна
function closeCardModal() {
    document.querySelector('.modal-content').style.opacity = '0';
    document.querySelector('.modal-content').style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        elements.cardModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Обновление состояния пользователя при просмотре карточки
function updateUserState(card) {
    userState.viewedCards++;
    
    if (card.type === 'planet') {
        userState.viewedPlanets++;
    }
    
    if (!userState.viewedTypes.includes(card.type)) {
        userState.viewedTypes.push(card.type);
    }
    
    // Проверяем достижения
    checkUnlockedAchievements();
    
    // Сохраняем состояние в localStorage
    saveUserState();
}

// Инициализация викторины
function initQuiz() {
    quizState = {
        currentQuestion: 0,
        score: 0,
        selectedOption: null,
        quizFinished: false
    };
    
    renderQuestion();
    updateQuizProgress();
}

// Рендер текущего вопроса
function renderQuestion() {
    if (quizState.currentQuestion >= quizQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = quizQuestions[quizState.currentQuestion];
    elements.quizQuestion.textContent = question.question;
    elements.quizOptions.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        elements.quizOptions.appendChild(optionElement);
    });
    
    elements.quizNextBtn.disabled = true;
}

// Выбор варианта ответа
function selectOption(optionElement, index) {
    // Сбрасываем предыдущий выбор
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Устанавливаем новый выбор
    optionElement.classList.add('selected');
    quizState.selectedOption = index;
    elements.quizNextBtn.disabled = false;
}

// Переход к следующему вопросу
function nextQuestion() {
    if (quizState.selectedOption === null) return;
    
    // Проверяем ответ
    const currentQuestion = quizQuestions[quizState.currentQuestion];
    const isCorrect = quizState.selectedOption === currentQuestion.answer;
    
    if (isCorrect) {
        quizState.score++;
        document.querySelector(`.option[data-index="${quizState.selectedOption}"]`).classList.add('correct');
    } else {
        document.querySelector(`.option[data-index="${quizState.selectedOption}"]`).classList.add('incorrect');
        document.querySelector(`.option[data-index="${currentQuestion.answer}"]`).classList.add('correct');
    }
    
    // Обновляем счет
    elements.quizScoreElement.textContent = quizState.score;
    
    // Задержка перед переходом к следующему вопросу
    elements.quizNextBtn.disabled = true;
    setTimeout(() => {
        quizState.currentQuestion++;
        quizState.selectedOption = null;
        
        if (quizState.currentQuestion < quizQuestions.length) {
            renderQuestion();
            updateQuizProgress();
        } else {
            endQuiz();
        }
    }, 1500);
}

// Обновление прогресса викторины
function updateQuizProgress() {
    const progress = (quizState.currentQuestion / quizQuestions.length) * 100;
    elements.quizProgressBar.style.width = `${progress}%`;
    elements.quizProgressText.textContent = `${quizState.currentQuestion + 1}/${quizQuestions.length}`;
}

// Завершение викторины
function endQuiz() {
    quizState.quizFinished = true;
    
    // Обновляем состояние пользователя
    userState.quizCompleted++;
    if (quizState.score === quizQuestions.length) {
        userState.quizPerfect++;
    }
    userState.quizScore += quizState.score;
    
    // Проверяем достижения
    checkUnlockedAchievements();
    
    // Сохраняем состояние
    saveUserState();
    
    // Показываем результаты
    elements.quizQuestion.textContent = `Викторина завершена! Ваш результат: ${quizState.score}/${quizQuestions.length}`;
    elements.quizOptions.innerHTML = '';
    elements.quizNextBtn.textContent = 'Начать заново';
    elements.quizNextBtn.disabled = false;
    elements.quizNextBtn.onclick = initQuiz;
}

// Рендер достижений
function renderAchievements() {
    elements.achievementsContainer.innerHTML = '';
    
    achievements.forEach(achievement => {
        const isUnlocked = userState.unlockedAchievements.includes(achievement.id);
        const achievementElement = document.createElement('div');
        achievementElement.className = `achievement ${isUnlocked ? '' : 'locked'}`;
        
        achievementElement.innerHTML = `
            <i class="${achievement.icon}"></i>
            <h3>${achievement.title}</h3>
            <p>${isUnlocked ? achievement.description : achievement.lockedDescription}</p>
            ${isUnlocked ? '<div class="achievement-badge"><i class="fas fa-check"></i></div>' : ''}
        `;
        
        elements.achievementsContainer.appendChild(achievementElement);
    });
}

// Проверка разблокированных достижений
function checkUnlockedAchievements() {
    let newAchievements = false;
    
    achievements.forEach(achievement => {
        if (!userState.unlockedAchievements.includes(achievement.id) {
            if (achievement.condition(userState)) {
                userState.unlockedAchievements.push(achievement.id);
                newAchievements = true;
                showAchievementNotification(achievement);
            }
        }
    });
    
    if (newAchievements) {
        renderAchievements();
        saveUserState();
    }
}

// Показ уведомления о новом достижении
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${achievement.icon}"></i>
            <div>
                <h4>Достижение разблокировано!</h4>
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Сохранение состояния пользователя
function saveUserState() {
    localStorage.setItem('cosmosGuideUserState', JSON.stringify(userState));
}

// Загрузка состояния пользователя
function loadUserState() {
    const savedState = localStorage.getItem('cosmosGuideUserState');
    if (savedState) {
        Object.assign(userState, JSON.parse(savedState));
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Фильтрация карточек
    elements.filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            elements.filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCards(button.dataset.filter);
        });
    });
    
    // Модальное окно
    elements.closeModal.addEventListener('click', closeCardModal);
    elements.cardModal.addEventListener('click', (e) => {
        if (e.target === elements.cardModal) {
            closeCardModal();
        }
    });
    
    // Викторина
    elements.quizNextBtn.addEventListener('click', nextQuestion);
    
    // Кнопка "Начать исследование"
    elements.exploreBtn.addEventListener('click', () => {
        document.getElementById('cards-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Кнопка "Наверх"
    elements.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Плавная прокрутка для навигации
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Закрываем мобильное меню, если оно открыто
                elements.nav.classList.remove('active');
            }
        });
    });
    
    // Мобильное меню
    elements.menuToggle.addEventListener('click', () => {
        elements.nav.classList.toggle('active');
    });
    
    // Отслеживание скролла для кнопки "Наверх"
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            elements.backToTopBtn.classList.add('visible');
        } else {
            elements.backToTopBtn.classList.remove('visible');
        }
    });
    
    // Загрузка состояния при загрузке страницы
    window.addEventListener('load', loadUserState);
    
    // Обработка нажатия клавиши Escape для закрытия модального окна
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.cardModal.style.display === 'block') {
            closeCardModal();
        }
    });
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);

// Добавляем стили для уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .achievement-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #3a0ca3, #4361ee);
        color: white;
        padding: 15px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        max-width: 350px;
        transform: translateY(100%);
        opacity: 0;
        transition: var(--transition);
        z-index: 10000;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .notification-content i {
        font-size: 2rem;
        color: gold;
    }
    
    .notification-content h4 {
        font-size: 0.9rem;
        margin-bottom: 5px;
        opacity: 0.8;
    }
    
    .notification-content h3 {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
    
    .notification-content p {
        font-size: 0.9rem;
        opacity: 0.9;
    }
`;
document.head.appendChild(notificationStyles);

// Анимация появления карточек при загрузке
const cardAnimationStyles = document.createElement('style');
cardAnimationStyles.textContent = `
    .card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .card.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(cardAnimationStyles);
