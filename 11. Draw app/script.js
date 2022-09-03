const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 5;
let x = undefined;
let y = undefined;
let isPressed = false;
let color = "black";

canvas.addEventListener('mousedown', () => {
    isPressed = true;
    x=e.offsetX;
    y=e.offsetY;
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;

    x=undefined;
    y=undefined;
})

canvas.addEventListener('mousemove', (e) => {
    
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        //drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x=x2;
        y=y2;
    }    
});

/* function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
} */

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.stroke();
    ctx.lineWidth = size;
}

increaseBtn.addEventListener('click', ()=>{
    size+=5;

    if(size>50){
        size=50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', ()=>{
    size-=5;
 
    if(size<10){
        size=5;
        sizeEl.innerHTML = '0'+size;
    }

    updateSizeOnScreen();
});

function updateSizeOnScreen(){
    if(size<10){
        sizeEl.innerHTML = '0'+size;
    }
    else{
        sizeEl.innerHTML = size;
    }
}

colorEl.addEventListener('change',(e)=>{
    color=e.target.value;
});

clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
});