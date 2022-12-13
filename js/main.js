if(JSON.parse(localStorage.getItem("user"))){
    window.location.href = "../dashboard.html"
}

import { isEmailValid } from '../utils/isEmailValid.js'
import { addMessageError } from '../utils/addMessageError.js'
import {
    personalizationContainer,
    registerContainer,
    buttonsRegister,
    registerBtn,
    body,
    personalizationBtn,
    btnReturn,
    arrowLeft,
    loginButtonRegister,
    loginButton,
    loginContainer,

    emailInput,
    passwordInput,
    confirmPasswordInput,
    ageInput,
    notInformAgeInput,
    lastNameInput,
    nameInput,
    isSocialNameInput,

    emailError,
    lastNameError,
    confirmPasswordError,
    nameError,
    passwordError,
    overlays,
    loginConfirm,
    emailLogin,
    passwordLogin,
    loginError,
    login,
    loginExit,
    redirectRegisterToLogin,

} from './variables.js'
import {
    registerErrors
} from '../constants/errors.js'

let errorsInput = {
    emailHaveError: true,
    lastNameHaveError: true,
    nameHaveError: true,
    passwordHaveError: true,
    confirmPasswordHaveError: true,
}

loginButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    window.scrollTo(0, 0)

    body.style.overflow = 'hidden';
    loginContainer.style.display = 'block'
})

loginButtonRegister.addEventListener('click', (ev) => {
    ev.preventDefault()
    registerContainer.style.display = 'none'
    loginContainer.style.display = 'block'
})
emailInput.addEventListener('blur', () => {
    const email = emailInput.value
    if (email.trim() === '') {
        addMessageError(emailError, registerErrors.emailRequired)
        errorsInput.emailHaveError = true
    } else if (!isEmailValid(email)) {
        addMessageError(emailError, registerErrors.emailInvalid)
        console.log('email inválido')
        errorsInput.emailHaveError = true
    }else {
        errorsInput.emailHaveError = false
        emailError.classList.remove('showError')

    }
})

passwordInput.addEventListener('blur', () => {
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value

    if(password !== confirmPassword){
        addMessageError(passwordError, registerErrors.passwordDontMatch)
        addMessageError(confirmPasswordError, registerErrors.passwordDontMatch)
        errorsInput.confirmPasswordHaveError = true
        errorsInput.passwordHaveError = true
        return 
    }else {
        errorsInput.passwordHaveError = false
        errorsInput.confirmPasswordHaveError= false

        passwordError.classList.remove('showError')
        confirmPasswordError.classList.remove('showError')
    }



    if (password.trim() === '') {
        addMessageError(passwordError, registerErrors.passwordRequired)
        errorsInput.passwordHaveError = true
    } else if (password.length < 4) {
        addMessageError(passwordError, registerErrors.passwordMinLength)
        errorsInput.passwordHaveError = true
    
    } else {
        errorsInput.confirmPasswordHaveError = false   
        errorsInput.passwordHaveError = false
        passwordError.classList.remove('showError')

    }

    
})

confirmPasswordInput.addEventListener('blur', () => {
    const password = passwordInput.value


    const confirmPassword = confirmPasswordInput.value
    
    
    if(password !== confirmPassword){
        addMessageError(passwordError, registerErrors.passwordDontMatch)
        addMessageError(confirmPasswordError, registerErrors.passwordDontMatch)
        errorsInput.confirmPasswordHaveError = true
        errorsInput.passwordHaveError = true
        return
    }else {
        errorsInput.confirmPasswordHaveError = false
        errorsInput.passwordHaveError = false
        confirmPasswordError.classList.remove('showError')
        passwordError.classList.remove('showError')

    }

    if(confirmPassword.trim() === '') {
        addMessageError(confirmPasswordError, registerErrors.confirmPasswordRequired)
        errorsInput.confirmPasswordHaveError = true   

    }else {
        errorsInput.confirmPasswordHaveError = false
        confirmPasswordError.classList.remove('showError')
    }

    
})

nameInput.addEventListener('blur', () => {
    const name = nameInput.value

    if (name.trim() === '') {
        addMessageError(nameError, registerErrors.nameRequired)
        errorsInput.nameHaveError = true
    }else {
        errorsInput.nameHaveError = false
        nameError.classList.remove('showError')
    }
})


lastNameInput.addEventListener('blur', () => {
    const lastName = lastNameInput.value
    
    if (lastName.trim() === '') {
        addMessageError(lastNameError, registerErrors.lastNameRequired)
        errorsInput.lastNameHaveError = true
    } else {
        errorsInput.lastNameHaveError = false
        lastNameError.classList.remove('showError')
    }

    
})

registerBtn.addEventListener('click', (ev) => {
    const name = nameInput.value
    const age = Number(ageInput.value)
    const ageNotInform = notInformAgeInput.checked
    const isSocialName = isSocialNameInput.checked
    const lastName = lastNameInput.value
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value
    const email = emailInput.value


    /* Não executa oq está abaixo do if, neste caso o envio dos dados quando houver um erro*/
    const arrayErrorsInputs = Object.values(errorsInput)   
    const hasError = !(arrayErrorsInputs.every(e => e === false))

    if (hasError) {
        if (email.trim() === '') {
            addMessageError(emailError, registerErrors.emailRequired)
            errorsInput.emailHaveError = true
        } else if (!isEmailValid(email)) {
            addMessageError(emailError, registerErrors.emailInvalid)
            console.log('email inválido')
            errorsInput.emailHaveError = true
        }else {
            errorsInput.emailHaveError = false
            emailError.classList.remove('showError')
    
        }



        if(confirmPassword.trim() === '') {
            addMessageError(confirmPasswordError, registerErrors.confirmPasswordRequired)
            errorsInput.confirmPasswordHaveError = true
        }
        
        if (password.trim() === '') {
            addMessageError(passwordError, registerErrors.passwordRequired)
            errorsInput.passwordHaveError = true
        } else if (password.length < 4) {
            addMessageError(passwordError, registerErrors.passwordMinLength)
            errorsInput.passwordHaveError = true
        
        }else if (password !== confirmPassword) {
            addMessageError(passwordError, registerErrors.passwordDontMatch)
            addMessageError(confirmPasswordError, registerErrors.passwordDontMatch)
            errorsInput.passwordHaveError = true
            errorsInput.confirmPasswordHaveError = true
        }else {
            errorsInput.confirmPasswordHaveError = false   
            errorsInput.passwordHaveError = false
            confirmPasswordError.classList.remove('showError')
            passwordError.classList.remove('showError')
        }

        
        if (name.trim() === '') {
            addMessageError(nameError, registerErrors.nameRequired)
            errorsInput.nameHaveError = true
        }else {
            errorsInput.nameHaveError = false
            nameError.classList.remove('showError')
        }

        if (lastName.trim() === '') {
            addMessageError(lastNameError, registerErrors.lastNameRequired)
            errorsInput.lastNameHaveError = true
        } else {
            errorsInput.lastNameHaveError = false
            lastNameError.classList.remove('showEror')
        }
        return
    }

    const userData = {
        email,
        password,
        age,
        ageNotInform,
        lastName,
        name,
        isSocialName
    }
    axios.post('https://include-code-api.vercel.app/user', userData).then((value) => {
        console.log(value)
    })
    localStorage.setItem('user', JSON.stringify(userData))
    ev.preventDefault()
    registerContainer.style.display = 'none'
    personalizationContainer.style.display = 'block'
})

loginExit.addEventListener('click', () => {
    loginContainer.style.display = 'none'
    body.style.overflow = 'auto';

})

function closeModal() {
    registerContainer.style.display = 'none'
    body.style.overflow = 'auto';
}

redirectRegisterToLogin.addEventListener("click" ,() => {
    loginContainer.style.display = 'none'
    registerContainer.style.display = 'block'
})

btnReturn.addEventListener("click", (ev) => {
    ev.preventDefault()
    personalizationContainer.style.display = 'none'
    registerContainer.style.display = 'block'

})

const leftArrowButton = document.querySelector(".modal-header__img-left img")

leftArrowButton.addEventListener("click", () => {
    closeModal()
})


arrowLeft.addEventListener('click', () => {
    personalizationContainer.style.display = 'none'
})

loginConfirm.addEventListener('click', async(ev) => {
    ev.preventDefault()
    const email = emailLogin.value
    const password = passwordLogin.value
    try {
        const response = await axios.post('https://include-code-api.vercel.app/login', {email, password})
        localStorage.setItem("user", JSON.stringify(response.data.user))
        window.location.href = "../dashboard.html"
    }catch(error){    
        login.style.height = "80vh"
        loginError.style.display = "flex"
        loginError.innerHTML = error.response.data
    }
    
})



buttonsRegister.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
    body.style.overflow = 'hidden';
    registerContainer.style.display = 'block';
    window.scrollTo(0, 0)
    })
})


/* esc será o atalho para sair do modal borrado */
document.addEventListener(('keyup'), (event) => {
    if (event.key === 'Escape') {
        overlays.forEach(overlay => {
            overlay.style.display = 'none'
        })
        body.style.overflow = 'auto';

    }
})
