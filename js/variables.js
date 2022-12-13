/* Aqui você encontrará todas as variáveis para interação do JS com o HTML */
export const body = document.querySelector('body')

export const mainHeaderButtonLogin = document.querySelector('.main-header__buttons .buttons__login') 
export const mainHeaderButtonRegister = document.querySelector('.main-header__buttons .buttons__register') 
export const personalizationContainer = document.querySelector('.personalization-container') 
export const introductionButtonRegister = document.querySelector('.introduction__button')
export const startButtonRegister = document.querySelector('.start__btn')
export const registerContainer =  document.querySelector('.register-container')
export const registerBtn = document.querySelector('.register-btn')
export const personalizationBtn = document.querySelector('.personalization-btn')
export const btnReturn = document.querySelector('.btn-return')
export const arrowLeft = document.querySelector('.arrow-left')
export const loginButton = document.querySelector('.buttons__login')
export const loginButtonRegister = document.querySelector('.login-redirect')
export const loginContainer = document.querySelector('.login-container')
export const overlays = document.querySelectorAll('.overlay')
export const loginConfirm = document.querySelector('.login-btn')
export const login = document.querySelector('.login')

export const emailLogin = document.querySelector('.email-login')
export const passwordLogin = document.querySelector('.password-login')
export const loginExit = document.querySelector(".login-header img")
export const redirectRegisterToLogin = document.querySelector('.register-redirect a')
export const loginError = document.querySelector('.login-error')
/* REGISTER INPUTS */
export const emailInput = document.querySelector("#email") 
export const nameInput = document.querySelector("#name")
export const lastNameInput = document.querySelector("#lastName")
export const passwordInput = document.querySelector("#password")  
export const confirmPasswordInput = document.querySelector("#confirmPassword")
export const ageInput = document.querySelector("#age")
export const notInformAgeInput = document.querySelector("#notInformAge")
export const isSocialNameInput = document.querySelector("#isSocialName")

// INPUTS ERRORS
export const emailError = document.querySelector('.emailError')
export const lastNameError = document.querySelector('.lastNameError')
export const nameError = document.querySelector('.nameError')
export const passwordError = document.querySelector('.passwordError')
export const confirmPasswordError = document.querySelector('.confirmPasswordError')

/* BOTÕES DE REGISTRO SENDO EXPORTADOS EM ARRAY PARA APLICAR AS MESMAS FUNÇÕES A CADA UM ATRAVÉS DO FOREACH*/
export const buttonsRegister = [ mainHeaderButtonRegister, introductionButtonRegister, startButtonRegister ]