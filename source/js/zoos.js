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


