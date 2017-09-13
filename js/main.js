// Torna o botão de repetir invisivel
document.getElementById('repetirBtn').style.visibility = 'hidden';

// Ligando elementos para modificar o DOM
const botaoPedra = document.querySelector('#btnPedra');
const botaoPapel = document.querySelector('#btnPapel');
const botaoTesoura = document.querySelector('#btnTesoura');
const botaoRepetir = document.querySelector('#repetirBtn');

/* Pedra: 0, Tesoura: 1, Papel: 2 */
//var escolhaUsuario;
var escolhaAleatoria;

// Ouvindo por eventos
botaoPedra.addEventListener('click', escolhaPedra);
botaoRepetir.addEventListener('click', resetGame);

// Função para gerar um numero aleatorio entre os números pré-definidos
//var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
function generateRandomNumber() {
    let randomnumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return randomnumber;
}

function escolhaPedra() {
    //document.getElementById('showBtns').style.visibility = 'hidden';
    escolhaAleatoria = generateRandomNumber();
    console.log(escolhaAleatoria);
    if (escolhaAleatoria == 1) {
        // Torna botões de opção invisiveis e o de repetir o jogo visivel
        document.getElementById('showBtns').style.visibility = 'hidden';
        document.getElementById('repetirBtn').style.visibility = 'visible';

        document.querySelector('#msgVitoria').textContent = 'Pedra ganha de tesoura. WIN!';
        document.querySelector('#showImg').src = 'rockwins.jpg';
    } else if (escolhaAleatoria == 0) {
        //alert('Empate broder! Pedra empata com pedra!');
    } else {
        //alert('Você perdeu...Papel ganha de pedra!');
    }
}

function resetGame() {
    document.getElementById('showBtns').style.visibility = 'visible';
    document.getElementById('repetirBtn').style.visibility = 'hidden';
    document.querySelector('#showImg').src = 'rockpaper.jpg';
}