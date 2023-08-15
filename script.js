const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

console.log(playBtn, pauseBtn, resetBtn);
playBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMS = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMS);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function showButton(key) {
  const buttonToShow = key === "play" ? playBtn : pauseBtn;
  const buttonToHide = key == "play" ? pauseBtn : playBtn;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}

function changeText(txt) {
  document.getElementById("display").innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    changeText(timeToString(elapsedTime));
  }, 10);
  showButton("pause");
}

function pause() {
  clearInterval(timerInterval);
  showButton("play");
}

function reset() {
  clearInterval(timerInterval);
  changeText("00:00:00");
  elapsedTime = 0;
  showButton("play");
}
