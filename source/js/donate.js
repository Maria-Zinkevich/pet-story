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