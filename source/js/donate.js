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

// Donate-popup open

const donateButton = document.querySelector('.donate-section__button');
const donatePopup = document.querySelector('.donate-modal__wrap');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('donate-section__button')) {
        donatePopup.classList.remove('hidden');
    } 
    
    if (event.target.classList.contains('donate-modal__wrap')) {
        donatePopup.classList.add('hidden');
    }
});

// Displaying value of radio buttons in the input field

const donateForm = document.querySelector('.donate-section__form');
const targetAmount = document.querySelectorAll('.donate-section__radio-button .donate-section__label');
const amountInput = document.querySelector('.donate-section__input');

donateForm.addEventListener('click', (event) => {
    if (event.target.className === 'donate-section__radio') {
        amountInput.value = event.target.value;
    }
});