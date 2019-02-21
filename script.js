// Menu

const menuOpen = document.querySelector('.navigation__opener');
const menu = document.querySelector('.menu');
const menuTriangles = [...document.querySelectorAll('.navigation__icon--triangle')];

function toogleMenu() {
    menu.classList.toggle('active-menu');
    menuTriangles.forEach(triangle => triangle.classList.toggle('navigation__icon--active'));
}

menuOpen.addEventListener('click', toogleMenu);

// Change Circle

const opnCircles = [...document.querySelectorAll('.opinions__circle')];

let counter = 1;

function changeCircle() {
    let activeOpnCircle = opnCircles.findIndex(active => active.classList.contains('opinions__circle--active'));
    opnCircles[activeOpnCircle].classList.remove('opinions__circle--active');
    opnCircles[counter].classList.add('opinions__circle--active');
    counter++
    if (counter == opnCircles.length) {
        counter = 0;
    }
}

setInterval(changeCircle, 4000);

// Message Info

const messageBtn = document.querySelector('.message__button');
const messageName = document.getElementById('name');
const messageEmail = document.getElementById('email');
const messageText = document.getElementById('text');

function showMessageInfo() {
    if (messageName.value == '' && messageEmail.value != '' && messageText.value != '') {
        alert('Please write Your name and surname!');
    } else if (messageName.value != '' && messageEmail.value == '' && messageText.value != '') {
        alert('Please write Your email!');
    } else if (messageName.value != '' && messageEmail.value != '' && messageText.value == '') {
        alert('Please write Your message!');
    } else if (messageName.value == '' && messageEmail.value == '' && messageText.value != '') {
        alert('Please write Your name, surname and email!');
    } else if (messageName.value != '' && messageEmail.value == '' && messageText.value == '') {
        alert('Please write Your email and message!');
    } else if (messageName.value == '' && messageEmail.value != '' && messageText.value == '') {
        alert('Please write Your name, surname and message!');
    } else if (messageName.value == '' && messageEmail.value == '' && messageText.value == '') {
        alert('Please write Your name, surname, email and message!');
    } else {
        alert('Your message has been sent!')
    }
}

messageBtn.addEventListener('click', showMessageInfo);