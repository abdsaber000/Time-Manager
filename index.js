
const startBtnEl = document.querySelector(".btn-start");

const resetBtnEl = document.querySelector(".btn-reset");

const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

const hourEl = document.getElementById("hour");

const mintueEl = document.getElementById("minute");

const secondEl = document.getElementById("second");

let timer = 0;

var tempVar = 0;
startBtnEl.addEventListener("click", ()=>{
    if(startBtnEl.innerText == "start"){
        startBtnEl.innerText = "pause";

    }else{
        clearTimeout(tempVar);
        startBtnEl.innerText = "start";
    }

    // after the button is triggered
    if(startBtnEl.innerText == "pause"){
        clearTimeout(tempVar);
        updateTimer();
    }


});

resetBtnEl.addEventListener("click", ()=>{
    
    resetTimer();

});

formEl.addEventListener("submit", (event)=>{
    event.preventDefault(); // to prevent auto refresh after submit
    addNote();
    
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

function resetTimer(){
    timer = 0;
    let time = convertTime(timer);
    hourEl.innerText = time[0];

    mintueEl.innerText = time[1];

    secondEl.innerText = time[2];
    startBtnEl.innerText = "start";
}

function updateTimer(){
    timer++;
    let time = convertTime(timer);
    hourEl.innerText = time[0];

    mintueEl.innerText = time[1];

    secondEl.innerText = time[2];
    tempVar = setTimeout(()=>{
        if(startBtnEl.innerText == "pause"){
            updateTimer();
        }
    } , 1000);

}

function addNote(Note){
    let newNote = inputEl.value;
    if(Note){
        newNote = Note.name;
    }

    if(newNote.length == 0){
        return;
    }

    const liEl = document.createElement("li");
    liEl.innerHTML = `<div class = "div-text">${newNote}</div>`;
    inputEl.value = "";


    
    
    
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash">`;
    
    const noteTimeEl = document.createElement("div");
    noteTimeEl.classList.add("note-time")
    const time = convertTime(timer);

    noteTimeEl.innerHTML = `<div class = "note-hour">${time[0]}</div>:<div class = "note-minute">${time[1]}</div>:<div class = "note-second">${time[2]}</div>`;
    liEl.appendChild(noteTimeEl);
    liEl.appendChild(trashBtnEl);
    ulEl.insertBefore(liEl , ulEl.firstChild) ;


    trashBtnEl.addEventListener("click" , ()=>{
        liEl.remove();
    });

}
