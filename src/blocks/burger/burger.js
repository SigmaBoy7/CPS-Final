const burgerOpenButton = document.querySelector('.header__burger-button');
const burgerCloseButton = document.querySelector('.burger__button-close');
const burgerBackground = document.querySelector('.burger-background');
const burger = document.querySelector('.burger');

burgerOpenButton.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    burgerBackground.classList.remove('background--disable');
    burgerBackground.classList.toggle('background--active');
});

burgerCloseButton.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    burgerBackground.classList.remove('background--active');
    burgerBackground.classList.toggle('background--disable');
});

burgerBackground.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    burgerBackground.classList.remove('background--active');
    burgerBackground.classList.toggle('background--disable');
});