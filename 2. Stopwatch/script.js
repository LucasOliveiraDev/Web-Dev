// GLOBAL VARIABLES
const time_el = document.querySelector('.numbersbg .numbers');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

//Update the timer

function timer(){
    
    let secs = Math.floor(seconds % 60);
    let mins = Math.floor(seconds / 60)%60;
    let hrs = Math.floor(seconds / 3600)%24;

    if (secs<10) secs='0'+secs;
    if (mins<10) mins='0'+mins;
    if (hrs<10) hrs='0'+hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`; 

    seconds++
}

function start (){
    if (interval){
        return
    }

    interval = setInterval(timer,1000);
}

function stop (){
    clearInterval(interval);
    interval=null;
}

function reset (){
    stop();
    seconds=0;
    time_el.innerText='00:00:00';
}