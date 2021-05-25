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