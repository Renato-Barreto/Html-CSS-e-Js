// DOM - Determina quem dos objetos do HTML vão participar do JS
//const - Constante, não muda.
//Let = variável, muda.

const kirbywithstar = document.querySelector('#starforkirby') // '#' - Antes de ID / '.' - Antes de DIV
const kirbynone = document.querySelector('#kirbyforstar')
const bthelp = document.querySelector('#btajudar')
const btback = document.querySelector('#btvoltar')

//Eventos

bthelp.addEventListener('click', ajudar)
btback.addEventListener('click', voltar)

//Função

function ajudar(){
    kirbywithstar.src = 'images/kirby-with-star.png'
    kirbynone.src = 'images/swoosh.png'
}

function voltar(){
    kirbywithstar.src = 'images/star-for-kirby.png'
    kirbynone.src = 'images/kirby-for-star.png'
}