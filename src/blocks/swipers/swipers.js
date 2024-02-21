import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    modules: [Pagination],
    

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    modules: [Pagination],
    

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});
const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    modules: [Pagination],
    

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});


const showButton = document.querySelectorAll('.swiper__show-button');

showButton.forEach((el, i, arr) => {
    el.addEventListener('click', () => {
        const swiperContainer = el.parentElement.querySelector('.swiper__container');
        const showButtonText = el.querySelector('.swiper__show-button-text');
        const showButtonIco = el.querySelector('.swiper__show-button-ico');
        swiperContainer.classList.toggle('swiper__container--big');
        console.log(el.parentElement)
        showButtonIco.classList.toggle('rotate')
        if (showButtonText.textContent === 'Скрыть'){
            showButtonText.textContent = 'Показать все';
        }else{
            showButtonText.textContent = 'Скрыть';
        };
        el.classList.toggle('brands__show-button--active')
    });
})