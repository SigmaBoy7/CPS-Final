const modalOpenButton = document.querySelectorAll('.modal-feedback-button');
const modalCloseButton = document.querySelector('.modal-feedback__close-button');
const background = document.querySelector('.modal-background');
const modal = document.querySelector('.modal-feedback');

modalOpenButton.forEach((el, i, arr) => {
    el.addEventListener('click', () => {
        modal.classList.toggle('modal-feedback--active');
        background.classList.remove('modal-background--disable');
        background.classList.toggle('modal-background--active');
    });
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.toggle('modal-feedback--active');
    background.classList.remove('modal-background--active');
    background.classList.toggle('modal-background--disable');
});

background.addEventListener('click', () => {
    modal.classList.remove('modal-feedback--active');
    background.classList.remove('modal-background--active');
    background.classList.toggle('modal-background--disable');
});