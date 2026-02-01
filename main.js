const translations = {
    ko: {
        subtitle: "국경은 넘어도, 거리는 넘지 마세요.",
        secTitle: "왜 500km 인가요?",
        secDesc: "비행기로 1시간, 기차로 한나절. 진심이 있다면 충분히 닿을 수 있는 거리입니다. 무의미한 장거리 연애 대신, 500km 이내의 인연을 만나보세요.",
        radius: "📍 설정된 매칭 반경: 500km",
        c1t: "🌍 스마트한 국제 매칭",
        c1d: "언어와 문화가 달라도 거리만큼은 가깝게. 당신의 라이프스타일에 맞는 글로벌 인연을 찾아드립니다.",
        c2t: "📏 정확한 거리 제한",
        c2d: "GPS 기반으로 500km 이내의 사용자만 보여줍니다. '이번 주말'에 만날 수 있는 인연을 강조합니다.",
        ctaT: "새로운 세계가 당신을 기다립니다",
        ctaB: "앱 출시 알림 받기",
        mailPH: "이메일 주소를 입력하세요",
        mailSub: "신청하기"
    },
    en: {
        subtitle: "Cross borders, not distance.",
        secTitle: "Why 500km?",
        secDesc: "1 hour by plane, half a day by train. Reachable distance for sincere hearts. Meet someone within 500km.",
        radius: "📍 Radius: 500km",
        c1t: "🌍 Smart Matching",
        c1d: "Close in distance even with different languages. Find global connections for your lifestyle.",
        c2t: "📏 Distance Limit",
        c2d: "GPS-based 500km filter. Meet someone 'this weekend'.",
        ctaT: "A new world awaits you",
        ctaB: "Get Notified",
        mailPH: "Enter your email",
        mailSub: "Submit"
    },
    ru: {
        subtitle: "Пересекайте границы, а не расстояния.",
        secTitle: "Почему 500 км?",
        secDesc: "Час на самолете, полдня на поезде. Найдите близких людей в радиусе 500 км.",
        radius: "📍 Радиус: 500 км",
        c1t: "🌍 Умный матчинг",
        c1d: "Близко, даже если языки разные. Найдите связи для вашего стиля жизни.",
        c2t: "📏 Точный лимит",
        c2d: "Фильтр 500 км по GPS. Встретьтесь уже в эти выходные.",
        ctaT: "Новый мир ждет вас",
        ctaB: "Узнать о запуске",
        mailPH: "Введите ваш email",
        mailSub: "Отправить"
    },
    es: {
        subtitle: "Cruza fronteras, no distancias.",
        secTitle: "¿Por qué 500 km?",
        secDesc: "1 hora en avión, medio día en tren. Es una distancia alcanzable. Conoce personas a menos de 500 km.",
        radius: "📍 Radio de búsqueda: 500 km",
        c1t: "🌍 Matching Global",
        c1d: "Cerca en distancia aunque los idiomas sean diferentes. Encuentra conexiones que se adapten a tu vida.",
        c2t: "📏 Límite Exacto",
        c2d: "Muestra usuarios a menos de 500 km vía GPS. Céntrate en personas que puedas ver este fin de semana.",
        ctaT: "Un nuevo mundo te espera",
        ctaB: "Recibir Notificación",
        mailPH: "Tu correo electrónico",
        mailSub: "Enviar"
    },
    zh: {
        subtitle: "超越国界，但不超越距离。",
        secTitle: "为什么是 500公里？",
        secDesc: "飞机1小时，火车半天。只要真心，这就是能触及의距离。与其漫장의异地恋，不如遇见500公里内的缘分。",
        radius: "📍 匹配半径：500公里",
        c1t: "🌍 智能全球匹配",
        c1d: "语言不同，距离相近。为您寻找适合您生活方式的全球缘分。",
        c2t: "📏 精准距离限制",
        c2d: "基于GPS显示500公里内的用户。强调“本周末”就能见面的缘分。",
        ctaT: "新的世界在等待着你",
        ctaB: "获取发布通知",
        mailPH: "输入您的电子邮件",
        mailSub: "提交"
    },
    ja: {
        subtitle: "国境は越えても、距離は越えないで。",
        secTitle: "왜 500km なのですか？",
        secDesc: "飛行機で1時間、電車で半日. 本気なら届く距離です. 500km以内の出会いを探しましょう。",
        radius: "📍 マッチング範囲：500km",
        c1t: "🌍 スマートなマッチング",
        c1d: "言葉は違っても距離は近く。あなたのライフスタイルに 맞는 縁を見つけます。",
        c2t: "📏 正確한 距離制限",
        c2d: "GPSに基づき500km以内のユーザーを表示。「今週末」会える人を大切にします。",
        ctaT: "新しい世界があなたを待っています",
        ctaB: "リリース通知を受け取る",
        mailPH: "メールアドレスを入力",
        mailSub: "送信"
    }
};

function showForm() {
    document.getElementById('cta-btn').style.display = 'none';
    document.getElementById('email-form').style.display = 'block';
}

function changeLang(lang, event) {
    const t = translations[lang] || translations['en'];
    document.getElementById('main-subtitle').innerText = t.subtitle;
    document.getElementById('section-title').innerText = t.secTitle;
    document.getElementById('section-desc').innerText = t.secDesc;
    document.getElementById('radius-text').innerText = t.radius;
    document.getElementById('card1-title').innerText = t.c1t;
    document.getElementById('card1-desc').innerText = t.c1d;
    document.getElementById('card2-title').innerText = t.c2t;
    document.getElementById('card2-desc').innerText = t.c2d;
    document.getElementById('cta-title').innerText = t.ctaT;
    document.getElementById('cta-btn').innerText = t.ctaB;
    document.getElementById('email-placeholder').placeholder = t.mailPH;
    document.getElementById('submit-text').innerText = t.mailSub;

    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Dark Mode Toggle
const themeSwitch = document.querySelector('#checkbox');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme + '-mode');
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
        document.body.classList.add('dark-mode');
    }
}