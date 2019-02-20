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

const opnText = document.querySelector('.opinions__text');
const opnImage = document.querySelector('.opinions__image');
const opnName = document.querySelector('.opinions__name');

const opnCircles = [...document.querySelectorAll('.opinions__circle')];
const texts = ['“David and team are true professionals, super creative, great people and great to work with.”',
    '“I would recommend estetic to anyone looking for creative interpretations of space that coulda-shoulda been standard.”',
    '“I appreciate that Susie got most of the work done on time.”'
];
const images = ['url("images/opinions1.jpg")', 'url("images/opinions2.jpg")', 'url("images/opinions3.jpg")'];
const names = ['Jeff Hardy', 'Steve Black', 'Julia Neville'];

let counter = 1;

function changeCircle() {
    let activeOpnCircle = opnCircles.findIndex(active => active.classList.contains('opinions__circle--active'));
    opnCircles[activeOpnCircle].classList.remove('opinions__circle--active');
    opnCircles[counter].classList.add('opinions__circle--active');
}

function changeOpinion() {
    opnText.textContent = texts[counter];
    opnImage.style.backgroundImage = images[counter];
    opnName.textContent = names[counter];
    changeCircle()
    counter++
    if (counter > 2) {
        counter = 0;
    }
}

setInterval(changeOpinion, 4000);