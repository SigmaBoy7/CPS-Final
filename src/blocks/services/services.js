const showMoreTextButton = document.querySelector('.services__show-button');
const showMoreTextButtonIco = document.querySelector('.services__show-button-ico');
const textBlock = document.querySelector('.services__description');
const textParagraph = document.createElement('p');
const hiddenText = textBlock.querySelector('.services__unvisible-text');

const showAllText = () => {
    textParagraph.remove();
    hiddenText.classList.toggle('services__text--visible');
    if (hiddenText.classList.length >= 2){
        showMoreTextButton.querySelector('.services__show-button-text').textContent = 'Скрыть';        
    }else{
        showMoreTextButton.querySelector('.services__show-button-text').textContent = 'Читать далее';        
    }
    showMoreTextButtonIco.classList.toggle('rotate');
};

showMoreTextButton.addEventListener('click', () => {
    showAllText();
});

