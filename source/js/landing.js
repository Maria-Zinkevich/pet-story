// Burger menu

const openMenuButton = document.querySelector('.header__burger-menu');
const closeMenuButton = document.querySelector('.header__nav > div > span');
const header = document.querySelector('.header');
const headerNavigation = document.querySelector('.header__nav');
const headerNavWrap = document.querySelector('.header__nav > div');
const headerNavLogo = document.querySelector('.header__nav > div > a');
const headerList = document.querySelector('.header__list');
const headerItems = document.querySelectorAll('.header__item');
const headerLinks = document.querySelectorAll('.header__link');

openMenuButton.addEventListener('click', (event) => {
    header.classList.add('header--open');
    headerNavigation.classList.add('header__nav--open');
    headerList.classList.add('header__list--open');
    headerNavWrap.style.display = "block";

    for (let item of headerItems) {
        item.classList.add('header__item--open');
    }

    for (let link of headerLinks) {
        link.classList.add('header__link--open');
    }
});

closeMenuButton.addEventListener('click', (event) => {
    header.classList.remove('header--open');
    headerNavigation.classList.remove('header__nav--open');
    headerList.classList.remove('header__list--open');
    headerNavWrap.style.display = "none";

    for (let item of headerItems) {
        item.classList.remove('header__item--open');
    }

    for (let link of headerLinks) {
        link.classList.remove('header__link--open');
    }
});

// Testimonials feedback-popup

const testimonialsButton = document.querySelector('.testimonials__button');
const feedbackPopup = document.querySelector('.feedback__wrap');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('testimonials__button')) {
        feedbackPopup.classList.remove('hidden');
    } 
    if (event.target.classList.contains('feedback__close-btn') || event.target.classList.contains('feedback__button')) {
        feedbackPopup.classList.add('hidden');
    }
    if (event.target.classList.contains('feedback__wrap')) {
        feedbackPopup.classList.add('hidden');
    }
});

// Pets slider
const buttonLeft = document.querySelector('.pets__button--left');
const buttonRight = document.querySelector('.pets__button--right');
const petsCards= document.querySelector('.pets__cards');
let petsCard = document.querySelectorAll('.pets__card');

buttonLeft.addEventListener('click', () => {
    petsCards.append(petsCard[0]);
    petsCard = document.querySelectorAll('.pets__card');
})

buttonRight.addEventListener('click', () => {
    petsCards.prepend(petsCard[petsCard.length - 1]);
    petsCard = document.querySelectorAll('.pets__card');
})