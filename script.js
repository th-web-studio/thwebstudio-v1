// 1. THE CONTENT: Your Master Navigation HTML
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
                <li><a href="contact.html" class="nav-cta">GET STARTED</a></li>
            </ul>
        </div>
    </div>
    <div class="overlay" id="overlay"></div>
`;

// 2. THE INJECTION: Place the HTML into the page
const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
    navPlaceholder.innerHTML = navHTML;
    // After the HTML is on the page, we run your logic
    initNavigation();
}

// 3. THE LOGIC: Your original code, slightly optimized for the new system
function initNavigation() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const drawer = document.getElementById('side-drawer');
    const overlay = document.getElementById('overlay');
    const dropdowns = document.querySelectorAll('.dropdown-btn');

    // Open Menu
    menuBtn.onclick = () => { 
        drawer.classList.add('open'); 
        overlay.classList.add('active'); 
    };

    // Close Menu
    const closeMenu = () => { 
        drawer.classList.remove('open'); 
        overlay.classList.remove('active'); 
    };

    closeBtn.onclick = closeMenu;
    overlay.onclick = closeMenu;

    // Dropdown Toggles (About Us, etc.)
    dropdowns.forEach(btn => {
        btn.onclick = () => {
            const sub = btn.nextElementSibling;
            sub.classList.toggle('show');
            const plusIcon = btn.querySelector('.plus');
            if (plusIcon) {
                plusIcon.textContent = sub.classList.contains('show') ? '−' : '+';
            }
        };
    });
}
