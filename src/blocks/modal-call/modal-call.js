const modalOpenButton = document.querySelectorAll('.modal-call-button');
const modalCloseButton = document.querySelector('.modal-call__close-button');
const backgroundCall = document.querySelector('.modal-background');
const modal = document.querySelector('.modal-call');

modalOpenButton.forEach((el, i, arr) => {
    el.addEventListener('click', () => {
        modal.classList.toggle('modal-call--active');
        backgroundCall.classList.remove('modal-background--disable');
        backgroundCall.classList.toggle('modal-background--active');
    });
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.toggle('modal-call--active');
    backgroundCall.classList.remove('modal-background--active');
    backgroundCall.classList.toggle('modal-background--disable');
});

backgroundCall.addEventListener('click', () => {
    modal.classList.remove('modal-call--active');
    backgroundCall.classList.remove('modal-background--active');
    backgroundCall.classList.toggle('modal-background--disable');
});