//DOM

const forca = document.querySelector ('#Forca')
const inteligencia = document.querySelector ('#Inteligencia')
const agilidade = document.querySelector ('#Agilidade')
const poder = document.querySelector ('#Poder')
const botao = document.querySelector ('#Calcular')
const resultado = document.querySelector ('#Resultado')
const descricao = document.querySelector ('#Descricao')
const resultadoFundo = document.querySelector ('#resultadoFundo')
const figuraM = document.querySelector ('#FiguraM')
const figuraF = document.querySelector ('#FiguraF')

//Eventos e Função

botao.addEventListener('click', ()=>{
    strength = Number(forca.value)
    intelligence = Number(inteligencia.value)
    agility = Number(agilidade.value)
    power = Number(poder.value)

    if(strength + intelligence + agility + power >= 1){

        resultadoFundo.className='resultadoFeito'
        
        if (strength >= intelligence && strength > power && strength > agility) {
            resultado.textContent = `Pela sua força de ${strength} você é Guerreiro(a)`
            descricao.textContent = `Aquele que ergue com honra a espada capaz de derrotar o mal, nobre és.`
            figuraM.src = 'images/knightMan.png'
            figuraF.src = 'images/knightWoman.png'
            
            
        } else if (intelligence >= strength && intelligence > agility && intelligence > power){
            resultado.textContent = `Pela sua inteligência de ${intelligence} você é Arqueiro(a)`
            descricao.textContent = `O hábil a de manusear mira e precisão a uma distância segura, aquele que acerta o alvo com exímia habilidade.`
            figuraM.src = 'images/bowMan.png'
            figuraF.src = 'images/bowWoman.png'
            
            
        } else if (agility > power && agility >= strength && agility > intelligence){
            resultado.textContent = `Pela sua agilidade de ${agility} você é Assassino(a)`
            descricao.textContent = `Movimentos rápidos e execuções friamente calculadas, ai daqueles em seu caminho.`
            figuraM.src = 'images/assasinMan.png'
            figuraF.src = 'images/assasinWoman.png'
            
            
        } else if(power > agility && power > strength && power > intelligence){
            resultado.textContent = `Pelo seu poder de ${power} você é Mago(a)`
            descricao.textContent = `Forças místicas que te acompanham, lhe dão habilidades sobre-humanas.`
            figuraM.src = 'images/magicianMan.png'
            figuraF.src = 'images/magicianWoman.png'
        }
        
    } else {
        resultadoFundo.className='resultado'
        resultado.textContent = ``
        descricao.textContent = ``
        figuraM.src = ''
        figuraF.src = ''
    }
    
    })