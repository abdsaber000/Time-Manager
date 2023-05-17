
const startBtnEl = document.querySelector(".btn-start");

const resetBtnEl = document.querySelector(".btn-reset");

const hourEl = document.getElementById("hour");

const mintueEl = document.getElementById("minute");

const secondEl = document.getElementById("second");

let timer = 0;

startBtnEl.addEventListener("click", ()=>{
    if(startBtnEl.innerText == "start"){
        startBtnEl.innerText = "pause";
    }else{
        startBtnEl.innerText = "start";
    }

    // after the button is triggered
    if(startBtnEl.innerText == "pause"){

        updateTimer();
    }


});

resetBtnEl.addEventListener("click", ()=>{
    timer= -1;
    updateTimer();

    startBtnEl.innerText = "start";
});


function convertTime(timer){
    let hour = Math.floor( timer / (60 * 60));
    timer %= 60 * 60;
    let minute = Math.floor( timer / 60);
    timer %= 60;
    let second = timer;
    
    if(hour < 10){
        hour = '0' + hour;
    }

    if(minute < 10){
        minute = '0' + minute;
    }

    if(second < 10){
        second = '0' + second;
    }

    let time = [hour,minute,second];
    return time;
}

function updateTimer(){
    timer++;
    let time = convertTime(timer);
    hourEl.innerText = time[0];

    mintueEl.innerText = time[1];

    secondEl.innerText = time[2];

    setTimeout(()=>{
        if(startBtnEl.innerText == "pause"){
            updateTimer();
        }
    } , 1000);

}