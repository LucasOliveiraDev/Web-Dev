/* PEGANDO HORAS
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();*/

const display = document.getElementById('clock'); //NUMBERS ON THE SCREEN
const audio = new Audio('audios/YOUR NEW MORNING ALARM.mp3') //ALARM SONG
audio.loop = true; //"REPEAT" MODE ON THE ALARM
let alarmTime = null; //LET MEANS BLOCK SCOPED, NOT ACESSIBLLE OUTSIDE THE BLOCK
let alarmTimeout = null; 

//THIS MAKE THE DISPLAY CHANGE
function updateTime(){
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText=`${hour}:${minutes}:${seconds}`;

}

// THIS MAKE THE 0 APPEAR ON THE DISPLAY WHEN IT IS LESS THAN 10.
function formatTime(time){
    if(time<10){
        return '0'+time;
    }

    return time;
}

// RECEIVES THE ALARM TIME
function setAlarmTime(value){
    alarmTime = value;
    //console.log(alarmTime)
}

//SET THE ALARM
function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm>current){
            const timeout = timeToAlarm.getTime() - current.getTime(); //Diferença entre o alarme setado para o tempo atual, ARMAZENA EM TIMEOUT.

            alarmTimeout = setTimeout(() => audio.play(),timeout); //WHEN TIMEOUT REACHES 0, PLAY THE ALARM.

            alert('Alarm set.');
        }
    }
}

function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("Alarm cleared.");
    }

}

// TIME CHANGE FREQUENCY IN MILLISECONDS
setInterval(updateTime, 1000)