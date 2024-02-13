const burgerOpenButton = document.querySelector('.header__burger-button');
const burgerCloseButton = document.querySelector('.burger__button-close');
const burgerBackground = document.querySelector('.burger__background');
const burger = document.querySelector('.burger');

burgerOpenButton.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    burgerBackground.classList.remove('burger__background--disable');
    burgerBackground.classList.toggle('burger__background--active');
});

burgerCloseButton.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    burgerBackground.classList.remove('burger__background--active');
    burgerBackground.classList.toggle('burger__background--disable');
});

burgerBackground.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    burgerBackground.classList.remove('burger__background--active');
    burgerBackground.classList.toggle('burger__background--disable');
});