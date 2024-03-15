//DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const data = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const mensagem = document.querySelector('#frase')
const imagem = document.querySelector('#imagens')
const alvo = document.querySelector('img') /*/Só uma imagem/*/

//eventos

setInterval(relogio,1000); //trablhar com milésimos (1000 milésimos = 1 segundo)

//funções

function relogio(){
    let dia = new Date() // Let - Criar variável
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()
    let dd = dia.getDate()
    let mm = dia.getMonth()+1
    let aa = dia.getFullYear()

    if(hr<10){
        hr="0"+hr
    }
    
    if(min<10){
        min="0"+min
    }

    if(seg<10){
        seg="0"+seg
    }

    if(dd<10){
        dd="0"+dd
    }

    if(mm<10){
        mm="0"+mm
    }

    //--------------------//
    
    if(hr >= 5 && hr<12){
        mensagem.textContent = 'Bom Dia'
        alvo.src = 'images/Sol.png'
    }else if(hr>=12 && hr<18){
        mensagem.textContent = 'Boa Tarde'
        alvo.src = 'images/SolTarde.png'
    }else{
        mensagem.textContent = 'Boa Noite'
        alvo.src = 'images/Lua.png'
    }

    //--------------------//
    
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    data.textContent = dd
    mes.textContent = mm
    ano.textContent = aa
}
