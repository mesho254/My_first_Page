'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
for (let i = 0; i < showModal.length; i++)
    showModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (x) {
    if (x.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})