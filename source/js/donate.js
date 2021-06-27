const donateForm = document.querySelector('.donate-section__form');
const targetAmount = document.querySelectorAll('.donate-section__radio-button .donate-section__label');
const amountInput = document.querySelector('.donate-section__input');

donateForm.addEventListener('click', (event) => {
    if (event.target.className === 'donate-section__radio') {
        amountInput.value = event.target.value;
    }
});