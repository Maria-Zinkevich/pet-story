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