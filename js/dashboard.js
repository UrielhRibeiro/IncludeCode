const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-background')
menuButton.addEventListener('click', () => {
    console.log('click')
    menu.style.display = window.getComputedStyle(menu).display === 'none' ? 'block' : 'none'
})