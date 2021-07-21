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

// Read more

const readMore = document.querySelector('.animal-info__read-button');
const animalInfo = document.querySelector('.animal-info__full');
let isRead = true;

animalInfo.classList.add('animal-info__full--shadow');

readMore.addEventListener('click', () => {
    if (!isRead) {
        animalInfo.style.height = '16em';
        readMore.innerHTML = 'Read More';
        animalInfo.classList.add('animal-info__full--shadow');
        isRead = true;
    } else {
        animalInfo.style.height = '100%';
        readMore.innerHTML = 'Read Less';
        animalInfo.classList.remove('animal-info__full--shadow');
        isRead = false;
    }
})


