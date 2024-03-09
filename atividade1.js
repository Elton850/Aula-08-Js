const box = document.querySelector('#usuario')
const button_1 = document.querySelector('#botao-1')

function getValue() {
    console.log(box.value)
}

button_1.addEventListener('click', getValue)