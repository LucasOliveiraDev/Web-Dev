//ARMAZENA O DISPLAY
const display = document.querySelector('.numbers-bg .numbers'); 

//ALARME
const alarm = new Audio('audios/Analog Alarm Clock.mp3')
alarm.loop = true;
let alarmTimeout = null;
let restartProcess = null;

//ARMAZEMA OS BOTÕES
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let seconds = 0;
let interval = null;

//AÇÕES
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

function timer (){

    //ARMAZENA O TEMPO DO DISPLAY
    let secs = Math.floor(seconds%60);
    var mins = Math.floor(seconds/60)%60;
    let hrs = Math.floor(seconds/3600)%24;

    //FORMATO O TEMPO DO DISPLAY
    if (secs<10) secs='0'+secs;
    if (mins<10) mins='0'+mins;
    if (hrs<10) hrs='0'+hrs;

    if(mins>25){
        alarm.play();    
        setTimeout(() => alarm.pause(), 10000);
        reset();
    }
        

    //MOSTRA O DISPLAY
    display.innerText = `${hrs} : ${mins} : ${secs}`;

    seconds++ //A CADA PASSADA AUMENTADA O SEGUNDO
    console.log(seconds);
}

function start (){
    if (interval){
        return;
    }

    interval = setInterval(timer,1000);
}

function pause (){
    clearInterval(interval);
    interval=null;
}

function reset (){
    display.innerHTML='00 : 00 : 00';
    seconds=0;
}