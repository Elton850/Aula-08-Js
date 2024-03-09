// const boxTarefa = document.querySelector('#tarefa')
// const divTarefas = document.querySelector('#tarefas')
// const formulario = document.querySelector('#formulario')

// function adicionarNovaTarefa(event){
//     event.preventDefault()

//     if (boxTarefa.value === '') {
//         alert("Digite uma nova tarefa")
//         return
//     }

//     const novaTarefa = document.createElement('p')
//     novaTarefa.textContent = boxTarefa.value
//     divTarefas.appendChild(novaTarefa)
//     boxTarefa.value = ''
//     boxTarefa.focus()
// }

// formulario.addEventListener('submit', adicionarNovaTarefa)

const gato = document.querySelector('#gato')
const cachorro = document.querySelector('#cachorro')
const porco = document.querySelector('#porco')
const imagem = document.querySelector('#imagem')

gato.addEventListener('click', () => {
    imagem.setAttribute("src", "https://img.freepik.com/fotos-gratis/bela-foto-de-um-gatinho-branco-de-pelo-curto-britanico_181624-57681.jpg")
    imagem.setAttribute("alt", "A imagem de um gatinho")
})

cachorro.addEventListener('click', () => {
    imagem.setAttribute("src", "https://img.freepik.com/fotos-premium/um-cachorrinho-com-uma-coleira-que-diz-eu-sou-um-cachorro_849715-2540.jpg")
    imagem.setAttribute("alt", "A imagem de um cachorrinho")
})

porco.addEventListener('click', () => {
    imagem.setAttribute("src", "https://img.freepik.com/fotos-premium/um-porquinho-branco-mais-fofo-com-ia-geradora-de-imagem-de-balao_849906-1085.jpg")
    imagem.setAttribute("alt", "A imagem de um porquinho")
})