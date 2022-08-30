const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')

const newYears = '1 Jan 2023'

function countdown (){
    const currentDate = new Date();
    const newYearsDate = new Date (newYears);

    const countseconds = Math.floor((newYearsDate - currentDate) / 1000);

    const days = Math.floor(countseconds/60/60/24);
    const hours = Math.floor(countseconds/60/60)%24; // APÓS TIRAR VARIOS 24 DAS HORAS TOTAIS, QUANTO SOBRA ANTES DE FICAR NEGATIVO?
    const mins = Math.floor((countseconds/60)%60);
    const secs = Math.floor(countseconds%60);
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);

}

function formatTime(time){
    return time<10 ? (`0${time}`) : time
}

// initial call
countdown();

setInterval(countdown, 1000)