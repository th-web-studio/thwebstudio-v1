const navHTML = `
    <style>
        /* Container for the Logo and Tagline */
        .brand-stack {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
        }

        .brand {
            line-height: 1;
            margin-bottom: 4px;
            display: block;
        }

        .nav-tagline {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.7);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            margin: 0;
        }

        /* Anchored Menu Button Styles */
        .menu-btn-container {
            border-left: 1px solid rgba(255, 255, 255, 0.2);
            padding-left: 20px;
            display: flex;
            align-items: center;
        }

        .menu-btn {
            background: transparent !important;
            border: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            width: 45px;
            height: 40px;
            padding: 0 10px !important;
        }

        .hamburger-line {
            display: block;
            height: 2px;
            background-color: #ffffff !important;
        }
        
        .line-1 { width: 100%; }
        .line-2 { width: 70%; }
        .line-3 { width: 100%; }

        /* Mobile adjustment */
        @media (max-width: 480px) {
            .nav-tagline { font-size: 0.6rem; }
        }
    </style>

    <nav class="top-bar">
        <div class="nav-container">
            <a href="index.html" class="brand-stack">
                <span class="brand">TH WEB <span class="accent">STUDIO</span></span>
                <!-- TAGLINE IN NAV BAR -->
                <p class="nav-tagline">We build websites that grow businesses</p>
            </a>
            
            <div class="menu-btn-container">
                <button class="menu-btn" id="menu-btn">
                    <span class="hamburger-line line-1"></span>
                    <span class="hamburger-line line-2"></span>
                    <span class="hamburger-line line-3"></span>
                </button>
            </div>
        </div>
    </nav>

    <div class="side-drawer" id="side-drawer">
        <div class="drawer-header">
            <button class="close-btn" id="close-btn">&times;</button>
        </div>
        <div class="drawer-content">
            <div class="drawer-brand">
                TH WEB <span class="accent">STUDIO</span>
                <!-- UPDATED TAGLINE IN DRAWER -->
                <p class="drawer-tagline">We build websites that grow businesses</p>
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
