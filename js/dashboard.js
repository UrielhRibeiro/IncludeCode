const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-background')
menuButton.addEventListener('click', () => {
    console.log('click')
    menu.style.display = window.getComputedStyle(menu).display === 'none' ? 'block' : 'none'
})

const user = JSON.parse(localStorage.getItem("user"))
if(!user) {
    window.location.href = "../index.html"
}

const exitButton = document.querySelector('.exit2')
const profileName = document.querySelector(".menu-background > p")
profileName.innerHTML = `${user.name} ${user.lastName}`

exitButton.addEventListener("click", () => {
    localStorage.removeItem("user")
})