const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

textEl.style.fontSize = `${Number(inputEl.value)}px`;

inputEl.addEventListener('input', () => {
    
  textEl.style.fontSize = `${Number(inputEl.value)}px`;
    
})

