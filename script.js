// Menu

const menuOpen = document.querySelector('.navigation__opener');
const menu = document.querySelector('.menu');
const menuTriangles = [...document.querySelectorAll('.navigation__icon--triangle')];

function toogleMenu() {
    menu.classList.toggle('active-menu');
    menuTriangles.forEach(triangle => triangle.classList.toggle('active-triangle'));
}

menuOpen.addEventListener('click', toogleMenu);