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
            color: #0f172a; /* Deep Slate Logo */
        }

        .nav-tagline {
            font-size: 0.7rem;
            color: #64748b; /* Muted Slate Tagline for readability */
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            margin: 0;
        }

        /* Anchored Menu Button Styles */
        .menu-btn-container {
            border-left: 1px solid rgba(15, 23, 42, 0.1); /* Soft Slate Border */
            padding-left: 20px;
            display: flex;
            align-items: center;
        }

        .menu-btn {
            background: transparent !important;
            border: 1px solid rgba(15, 23, 42, 0.2) !important; /* Visible Border */
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
            background-color: #0f172a !important; /* Deep Slate Lines */
        }
        
        .line-1 { width: 100%; }
        .line-2 { width: 70%; }
        .line-3 { width: 100%; }

        /* Fallback Desktop Top Navigation Styling (Hidden on Mobile) */
        .desktop-nav-links {
            display: none;
        }

        /* Mobile adjustment */
        @media (max-width: 480px) {
            .nav-tagline { font-size: 0.6rem; }
        }

        /* ==========================================================================
           DESKTOP STYLES: Activates on screens wider than 768px 
           Leaves all mobile styles and sidebar elements completely unchanged.
           ========================================================================== */
        @media (min-width: 769px) {
            /* Hides mobile hamburger button layout wrapper entirely */
            .menu-btn-container {
                display: none !important;
            }

            /* Switches mobile flex space to handle premium desktop alignment rows */
            .nav-container {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                max-width: 1200px;
                margin: 0 auto;
                width: 100%;
            }

            /* Exposes inline text navigation engine styles */
            .desktop-nav-links {
                display: flex !important;
                align-items: center;
                list-style: none;
                margin: 0;
                padding: 0;
                gap: 25px;
            }

            .desktop-nav-links a, 
            .desktop-nav-links .desktop-drop-trigger {
                font-family: 'Inter', sans-serif;
                font-size: 0.85rem;
                font-weight: 700;
                color: #0f172a;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                transition: color 0.2s ease;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0;
                margin: 0;
            }

            .desktop-nav-links a:hover,
            .desktop-nav-links .desktop-drop-trigger:hover {
                color: var(--blue, #0066cc);
            }

            /* Container context setup for hover dropdown menu block */
            .desktop-has-dropdown {
                position: relative;
                display: inline-block;
            }

            .desktop-dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: #ffffff;
                border: 1px solid var(--border, #e2e8f0);
                border-radius: 4px;
                padding: 10px 0;
                min-width: 160px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                z-index: 1000;
                list-style: none;
                margin: 5px 0 0 0;
            }

            .desktop-dropdown-menu li a {
                display: block;
                padding: 8px 20px;
                font-weight: 400;
                text-transform: none;
                color: #475569;
            }

            .desktop-dropdown-menu li a:hover {
                background: #f8fafc;
                color: var(--blue, #0066cc);
            }

            /* Simple hover engine selector to show submenu blocks instantly */
            .desktop-has-dropdown:hover .desktop-dropdown-menu {
                display: block !important;
            }

            /* Styled Desktop CTA Accent Action link option button */
            .desktop-nav-links .desktop-cta-accent {
                background: var(--blue, #0066cc) !important;
                color: #ffffff !important;
                padding: 10px 20px !important;
                border-radius: 4px !important;
                font-size: 0.8rem !important;
                font-weight: 900 !important;
                letter-spacing: 1px !important;
            }
            
            .desktop-nav-links .desktop-cta-accent:hover {
                opacity: 0.95;
            }
        }
    </style>

    <nav class="top-bar">
        <div class="nav-container">
            <a href="index.html" class="brand-stack">
                <span class="brand">TH WEB <span class="accent">STUDIO</span></span>
                <p class="nav-tagline">We build websites that grow businesses</p>
            </a>
            
            <ul class="desktop-nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="services.html">Services</a></li>
                <li class="desktop-has-dropdown">
                    <button class="desktop-drop-trigger">About ▾</button>
                    <ul class="desktop-dropdown-menu">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="standards.html">Our Standards</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="contact.html" class="desktop-cta-accent">Get Started</a></li>
            </ul>
            
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
            <button class="close-btn" id="close-btn" style="color: #0f172a;">&times;</button>
        </div>
        <div class="drawer-content">
            <div class="drawer-brand" style="color: #0f172a; border-bottom: 1px solid rgba(15, 23, 42, 0.1);">
                TH WEB <span class="accent">STUDIO</span>
                <p class="drawer-tagline" style="color: #64748b;">We build websites that grow businesses</p>
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

// Selector for the phone input field
const phoneInput = document.querySelector('input[name="phone"]');

if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let input = e.target.value.replace(/\D/g, '');
        input = input.substring(0, 10);
        let size = input.length;
        if (size === 0) {
            e.target.value = '';
        } else if (size < 4) {
            e.target.value = '(' + input;
        } else if (size < 7) {
            e.target.value = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
        } else {
            e.target.value = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + '-' + input.substring(6, 10);
        }
    });
}
