const inputEl = document.querySelector('#validation-input')
const lengthValue = Number(inputEl.dataset.length);


inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === lengthValue) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else if (inputEl.value.length > lengthValue || inputEl.value.length < lengthValue) {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
})