const resultado = document.querySelector('#resultado')
const input = document.querySelector('#email')
const button = document.querySelector('#botao-1')

button.addEventListener('click', () => {
    const quantP = document.querySelectorAll('#resultado p')
    const filho = document.createElement('p')
    resultado.appendChild(filho)
    filho.textContent = `Email ${quantP.length + 1}: ${input.value}`  
})