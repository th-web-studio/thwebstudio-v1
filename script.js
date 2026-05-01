const navHTML = `
    <nav class="top-bar">
        <div class="nav-container">
            <a href="index.html" class="brand">TH WEB <span class="accent">STUDIO</span></a>
            <button class="menu-btn" id="menu-btn">
                <div class="btn-line"></div>
                <div class="btn-line short"></div>
            </button>
        </div>
    </nav>

    <div class="side-drawer" id="side-drawer">
        <div class="drawer-header">
            <button class="close-btn" id="close-btn">&times;</button>
        </div>
        <div class="drawer-content">
            <div class="drawer-brand">
                TH WEB <span class="accent">STUDIO</span>
                <p class="drawer-tagline">Solid Design & Engineering</p>
            </div>
            
            <ul class="nav-list">
                <li><a href="index.html" class="main-link">HOME</a></li>
                <li><a href="portfolio.html" class="main-link">PORTFOLIO</a></li>
                <li><a href="services.html" class="main-link">SERVICES</a></li>
                <li class="has-sub">
                    <button class="dropdown-btn">ABOUT <span class="plus">+</span></button>
                    <ul class="sub-menu">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="standards.html">Our Standards</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li><a href="contact.html" class="main-link">CONTACT</a></li>
                <li><a href="contact.html" class="nav-cta-button">GET STARTED</a></li>
            </ul>
        </div>
    </div>
    <div class="overlay" id="overlay"></div>
`;

function injectNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
        initNavigationLogic();
    }
}

function initNavigationLogic() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const drawer = document.getElementById('side-drawer');
    const overlay = document.getElementById('overlay');
    const dropdowns = document.querySelectorAll('.dropdown-btn');

    if (!menuBtn || !drawer || !overlay) return;

    menuBtn.onclick = () => { 
        drawer.classList.add('open'); 
        overlay.classList.add('active'); 
    };

    const closeMenu = () => { 
        drawer.classList.remove('open'); 
        overlay.classList.remove('active'); 
    };

    closeBtn.onclick = closeMenu;
    overlay.onclick = closeMenu;

    dropdowns.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const subMenu = btn.nextElementSibling;
            const plusIcon = btn.querySelector('.plus');
            subMenu.classList.toggle('show');
            if (plusIcon) {
                plusIcon.textContent = subMenu.classList.contains('show') ? '−' : '+';
            }
        };
    });
}

function initSlideshow() {
    const slides = document.querySelectorAll('.auto-slideshow .slide');
    let currentIndex = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 4000);
    }
}

function initApp() {
    injectNavigation();
    initSlideshow();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
