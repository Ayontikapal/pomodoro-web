let timer=document.querySelector(".timer");
let startButton=document.querySelector("#start");
let stopButton=document.querySelector("#stop");
let resetButton=document.querySelector("#reset");
let shortBreakButton=document.querySelector(".short-break");
let longBreakButton=document.querySelector(".long-break");
let input=document.querySelector("input");
let interval=0;
let timeLeft=1500;
let minutes=0,seconds=0;
function updateTimer(){
    minutes=Math.floor(timeLeft/60);
    seconds=timeLeft%60;
    timer.textContent=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
}
function startTimer(){
    interval=setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft==0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft=1500;
        }
    },1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}
function shortBreak(){
    timeLeft=300;
    startTimer();
}
function longBreak(){
    timeLeft=900;
    startTimer();
}
startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
resetButton.addEventListener("click",resetTimer);
shortBreakButton.addEventListener("click",shortBreak);
longBreakButton.addEventListener("click",longBreak);