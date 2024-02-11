/*const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBtn = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')

const comecarOuPausarBtn = document.querySelector('#start-pause span')
const iconePausarOuContinuarBtn = document.querySelector('#start-pause img')

const cronometroNaTela = document.querySelector('#timer')

const musica = new Audio('/sons/luna-rise-part-one.mp3')
const somPlay = new Audio('/sons/play.wav')
const somPause = new Audio('/sons/pause.mp3')
const somTempoFinalizando = new Audio('/sons/beep.mp3')

let tempoDecorrenteEmSegundos = 1500
let intervaloId = null

musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focoBtn.addEventListener('click', () => {
    tempoDecorrenteEmSegundos = 1500
    alterarContexto('foco')
    focoBtn.classList.add('active')
})

curtoBtn.addEventListener('click', () => {
    tempoDecorrenteEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () => {
    tempoDecorrenteEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    /*botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })*/
/*

html.setAttribute('data-contexto', contexto)
banner.setAttribute('src', `/imagens/${contexto}.png`)

switch (contexto) {
    case 'foco':
        titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
    case 'descanso-curto':
        titulo.innerHTML = `Que tal dar uma respirada?<strong class="app__title-strong"> Faça uma pausa curta!</strong>`
        break;
    case 'descanso-longo':
        titulo.innerHTML = `Hora de voltar à superfície.
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    default:
        break;
}
}

const contagemRegressiva = () => {
if (tempoDecorrenteEmSegundos <= 0) {
    somTempoFinalizando.play()
    alert('O tempo terminou')
    zerar()
    return
}
tempoDecorrenteEmSegundos -= 1
mostrarTempo()
}

startPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
if (intervaloId) {
    iconePausarOuContinuarBtn.setAttribute('src', '/imagens/play_arrow.png') //PLAY
    somPause.play()
    zerar()
    return
}
somPlay.play()
intervaloId = setInterval(contagemRegressiva, 1000)
comecarOuPausarBtn.textContent = 'Pausar'
iconePausarOuContinuarBtn.setAttribute('src', '/imagens/pause.png') //PAUSE
}

function zerar() {
clearInterval(intervaloId)
comecarOuPausarBtn.textContent = 'Começar'
intervaloId = null
}

function mostrarTempo() {
const tempo = new Date(tempoDecorrenteEmSegundos * 1000)
const tempoFormatado = tempo.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' })
cronometroNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()
*/

const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const alternarBotoes = document.querySelectorAll('.app__card-button')
const startPauseBtn = document.querySelector('#start-pause')
const startPauseIconBtn = document.querySelector('#start-pause img')
const startPauseSpanBtn = document.querySelector('#start-pause span')
const cronometroNaTela = document.querySelector('#timer')
const inputMusica = document.querySelector('#alternar-musica')
const musicaLuna = new Audio('/sons/luna-rise-part-one.mp3')
const somPlay = new Audio('/sons/play.wav')
const somPause = new Audio('/sons/pause.mp3')
const somTempoFinalizando = new Audio('/sons/beep.mp3')
musicaLuna.loop = true



let tempoDecorrenteEmSegundos = 1500
let intervaloId = null



inputMusica.addEventListener('change', () => {
    if (musicaLuna.paused) {
        musicaLuna.play()
    } else {
        musicaLuna.pause()
    }
})

focoBtn.addEventListener('click', () => {
    tempoDecorrenteEmSegundos = 1500
    alterarContexto('foco')
    focoBtn.classList.add('active')
})

curtoBtn.addEventListener('click', () => {
    tempoDecorrenteEmSegundos = 300
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () => {
    tempoDecorrenteEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempoNatela()
    alternarBotoes.forEach(contexto => {
        contexto.classList.remove('active')
    });

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,
            <strong class="app__title-strong">mergulhe no que importa</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<strong class="app__title-strong"> Faça uma pausa curta!</strong>`
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

function contagemRegressiva() {

    if (tempoDecorrenteEmSegundos <= 0) {
        somTempoFinalizando.play()
        zerar()
        return
    }
    tempoDecorrenteEmSegundos--
    mostrarTempoNatela()
}

startPauseBtn.addEventListener('click', comecarOuPausarContagem)

function comecarOuPausarContagem() {

    if (intervaloId) {
        startPauseIconBtn.setAttribute('src', '/imagens/play_arrow.png')
        startPauseSpanBtn.textContent = `Começar`
        somPause.play()
        zerar()
        return

    }
    intervaloId = setInterval(contagemRegressiva, 1000)
    startPauseIconBtn.setAttribute('src', '/imagens/pause.png')
    startPauseSpanBtn.textContent = `Pausar`
    somPlay.play()
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempoNatela() {
    const tempo = new Date(tempoDecorrenteEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' })
    cronometroNaTela.innerHTML = `${tempoFormatado}`
}
mostrarTempoNatela()