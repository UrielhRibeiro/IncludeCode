import { personalizationContainer, buttonsRegister, body} from './variables.js'

function closeModal() {
    personalizationContainer.style.display = 'none'
    body.style.overflow = 'auto';
}

function addButtonLeftInteration(){
    const leftArrowButton = document.querySelector(".personalization-header__img-left img")
    const leftReturnButton = document.querySelector(".btn-return")
    leftArrowButton.addEventListener("click", () => {
        closeModal()
    })
    leftReturnButton.addEventListener("click", () => {
        closeModal()
    })
}

function openModal(event) {
    event.preventDefault();
    body.style.overflow = 'hidden';
    personalizationContainer.style.display = 'block';
    window.scrollTo(0,0)
    addButtonLeftInteration()
}

buttonsRegister.forEach((button) => {
    button.addEventListener('click', (event) => {
        openModal(event)
    })
})


/* esc será o atalho para sair do modal borrado */
document.addEventListener(('keyup'), (event) => {
    if(event.key === 'Escape') {
        closeModal()
    }
})
