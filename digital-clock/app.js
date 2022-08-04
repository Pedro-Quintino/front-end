const time = document.querySelector(".time");
const cronometer = document.querySelector(".cronometer")
let before = new Date();
let value = 0;
oldTime = 0;

const clock = () =>{
    let now = new Date();
    time.innerHTML = `<span>${("0" + now.getHours()).slice(-2)}</span>:<span>${("0" + now.getMinutes()).slice(-2)}</span>:<span>${("0" + now.getSeconds()).slice(-2)}</span>`

    if (value === 1){
        let seconds = Math.round((now.getTime() - before.getTime() + oldTime)/1000);
        let minutes  = Math.round(seconds/60);
        let hours = Math.round(minutes/60)
        cronometer.innerHTML = `<span>${("0" + hours).slice(-2)}</span>:<span>${("0" + minutes).slice(-2)}</span>:<span>${("0" + seconds).slice(-2)}</span>`;
    }else if (value === 0){
        cronometer.innerHTML = `<span>00</span>:<span>00</span>:<span>00</span>`
    }
}

function playCronometer(){
    if(value !==2){
        oldTime = 0;
    }
    before = new Date();
    value = 1;
}
function stopCronometer(){
    value = 0;
}
function pauseCronometer(){
    value = 2;
    let now = new Date();
    oldTime +=  Math.round((now.getTime() - before.getTime()));
}
const clockTimer = setInterval(clock, 1000);