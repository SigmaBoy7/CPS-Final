const showButton = document.querySelectorAll('.show-button');

showButton.forEach((el, i, arr) => {
    el.addEventListener('click', () => {
        const swiperContainer = el.parentElement.querySelector('.hide-wrapper');
        const showButtonText = el.querySelector('.show-button__text');
        const showButtonIco = el.querySelector('.show-button__ico');
        swiperContainer.classList.toggle('hide-wrapper--big');
        console.log(el.parentElement)
        showButtonIco.classList.toggle('rotate')
        if (showButtonText.textContent === 'Скрыть'){
            showButtonText.textContent = 'Показать все';
        }else{
            showButtonText.textContent = 'Скрыть';
        };
        el.classList.toggle('brands__button--active');
    })
})