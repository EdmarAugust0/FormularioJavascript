const form = document.getElementById('form-numero')
const inputB = document.getElementById('input-b')
const inputA = document.getElementById('input-a')
let formEValido = false

function validaNumero(inputB, inputA) {
    return inputB > inputA   
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const menssagemSucesso = `Números válidos!`

    formEValido = validaNumero(inputB.value, inputA.value)
    if (formEValido) {
        const containerMenssagemSucesso = document.querySelector('.menssagem-sucesso')
        containerMenssagemSucesso.innerHTML = menssagemSucesso
        containerMenssagemSucesso.style.display = 'block'

        inputB.value = ''
        inputA.value = ''

    }else {
        inputB.style.border = '1px solid red'
        document.querySelector('.menssagem-errada').style.display = 'block'
    }

    if (!formEValido) {
        inputB.classList.add('error')
        document.querySelector('.menssagem-errada').style.display = 'block'
        document.querySelector('.menssagem-sucesso').style.display = 'none'
    } else {
        inputB.classList.remove('error')
        document.querySelector('.menssagem-errada').style.display = 'none'
    }
})

    inputB.addEventListener('keyup', function(e){
    console.log(e.target.value)
    formEValido = validaNumero(e.target.value)

    
})

console.log(formEValido)