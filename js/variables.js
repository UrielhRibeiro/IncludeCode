/* Aqui você encontrará todas as variáveis para interação do JS com o HTML */
export const body = document.querySelector('body')

export const mainHeaderButtonLogin = document.querySelector('.main-header__buttons .buttons__login') 
export const mainHeaderButtonRegister = document.querySelector('.main-header__buttons .buttons__register') 
export const personalizationContainer = document.querySelector('.personalization-container') 
export const introductionButtonRegister = document.querySelector('.introduction__button')
export const startButtonRegister = document.querySelector('.start__btn')


/* BOTÕES DE REGISTRO SENDO EXPORTADOS EM ARRAY PARA APLICAR AS MESMAS FUNÇÕES A CADA UM ATRAVÉS DO FOREACH*/
export const buttonsRegister = [ mainHeaderButtonRegister, introductionButtonRegister, startButtonRegister ]