import { personalizationContainer,registerContainer, buttonsRegister,registerBtn, body, personalizationBtn, btnReturn, arrowLeft} from './variables.js'

function closeModal() {
    registerContainer.style.display = 'none'
    body.style.overflow = 'auto';
}
registerBtn.addEventListener('click',(ev) => {
    ev.preventDefault()
    registerContainer.style.display = 'none'
    personalizationContainer.style.display = 'block'
})


btnReturn.addEventListener("click",(ev) => {
    ev.preventDefault()
    personalizationContainer.style.display = 'none'
    registerContainer.style.display = 'block'
  
})
function addButtonLeftInteration(){
    const leftArrowButton = document.querySelector(".modal-header__img-left img")
   
    leftArrowButton.addEventListener("click", () => {
        closeModal()
    })
   
}
arrowLeft.addEventListener('click', () => {
    personalizationContainer.style.display = 'none'
})
function openModal(event) {
    event.preventDefault();
    body.style.overflow = 'hidden';
    registerContainer.style.display = 'block';
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
