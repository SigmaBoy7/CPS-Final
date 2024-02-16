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
            pagination: {
                enabled: false
            },
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

if (window.innerWidth < 768) {
    swiper.init();
  } else{
    swiper.destroy();
}

const showButton = document.querySelector('.brands__show-button');
const showButtonText = document.querySelector('.brands__show-button-text');
const showButtonIco = document.querySelector('.brands__show-button-ico');

showButton.addEventListener('click', () => {
    const brandContainer = document.querySelector('.brands__list-container');
    brandContainer.classList.toggle('brands__list-container--big');
    showButtonIco.classList.toggle('rotate')
    if (showButtonText.textContent === 'Скрыть'){
        showButtonText.textContent = 'Показать все';
    }else{
        showButtonText.textContent = 'Скрыть';
    };
    showButton.classList.toggle('brands__show-button--active')
});