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
`;

function injectNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
}

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 4000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    injectNavigation();
    initSlideshow();
});
