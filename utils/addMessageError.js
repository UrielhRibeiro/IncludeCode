export const addMessageError = (spanError, message) => {
    if(!Array(spanError.classList).includes("showError")){
        spanError.classList.add("showError")
    }
    spanError.innerHTML = message
    
}