function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEL = document.querySelector('button')
const buttonText = document.querySelector('.color')
const bodyEl = document.querySelector('body')

buttonEL.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor()
  buttonText.textContent = bodyEl.style.backgroundColor
})

