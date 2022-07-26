//ARMAZENA O DISPLAY
const display = document.querySelector('number-bg .number'); 

//ARMAZEMA OS BOTÕES
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let seconds = 0;
let interval = null;

//AÇÕES
startButton.addEventListener('click',start);
pauseButton.addEventListener('click',pause);
resetButton.addEventListener('click',reset);