// Menu

const menuOpen = document.querySelector('.navigation__opener');
const menu = document.querySelector('.menu');
const menuTriangles = [...document.querySelectorAll('.navigation__icon--triangle')];

function toogleMenu() {
    menu.classList.toggle('active-menu');
    menuTriangles.forEach(triangle => triangle.classList.toggle('navigation__icon--active'));
}

menuOpen.addEventListener('click', toogleMenu);

// Change Opinions

const opnCircles = [...document.querySelectorAll('.opinions__circle')];

let counter = 1;

function changeCircle() {
    let activeOpnCircle = opnCircles.findIndex(active => active.classList.contains('opinions__circle--active'));
    opnCircles[activeOpnCircle].classList.remove('opinions__circle--active');
    opnCircles[counter].classList.add('opinions__circle--active');
    counter++
    if (counter > 2) {
        counter = 0;
    }
}

setInterval(changeCircle, 4000);