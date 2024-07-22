let primeiroNumero = Math.floor(Math.random() * 6) + 1
let segundoNumero = Math.floor(Math.random() * 6) + 1


const imgPlayer1 = document.querySelector('#player1')
const imgPlayer2 = document.querySelector('#player2')

const img1 = `dice${primeiroNumero}.png`
const img2 = `dice${segundoNumero}.png`

// 1 forma
imgPlayer1.src = img1

// 2 forma
imgPlayer2.setAttribute("src", img2)

const h1 =  document.querySelector("h1")

if (primeiroNumero> segundoNumero){
    h1.innerText = "Player 1 venceu!"
}else if (primeiroNumero === segundoNumero){
    h1.innerText = "Empate :[ "
}else{
    h1.innerText = "Player 2 venceu!"
}