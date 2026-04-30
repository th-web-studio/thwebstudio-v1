const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const drawer = document.getElementById('side-drawer');
const overlay = document.getElementById('overlay');
const dropdowns = document.querySelectorAll('.dropdown-btn');

menuBtn.onclick = () => { drawer.classList.add('open'); overlay.classList.add('active'); };
const closeMenu = () => { drawer.classList.remove('open'); overlay.classList.remove('active'); };
closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;

dropdowns.forEach(btn => {
    btn.onclick = () => {
        const sub = btn.nextElementSibling;
        sub.classList.toggle('show');
        btn.querySelector('.plus').textContent = sub.classList.contains('show') ? '−' : '+';
    };
});
