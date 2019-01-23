// Menu

const menuOpen = document.querySelector('.navigation__opener');
const menu = document.querySelector('.menu');
const menuTriangles = [...document.querySelectorAll('.navigation__icon--triangle')];

function toogleMenu() {
    menu.classList.toggle('active-menu');
    menuTriangles.forEach(triangle => triangle.classList.toggle('active-triangle'));
}

menuOpen.addEventListener('click', toogleMenu);

// Slider

// const sliders = ['images/slider1.png', 'images/slider2.png', 'images/slider3.png'];
// const image = document.querySelector('.slider__image');
// let activeSlider = 0;

// const changeSlider = () => {
//     image.src = sliders[activeSlider];
//     activeSlider++;
//     if (activeSlider > 2) {
//         activeSlider = 0;
//     }

//     setTimeout(changeSlider, 5000)
// }

// changeSlider();