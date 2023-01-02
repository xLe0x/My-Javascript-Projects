let hours = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");
let stopBtn = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

hours.textContent = "00";
mins.textContent = "00";
secs.textContent = "00";

let fHours = 0;
let fMinutes = 0;
let fSeconds = 0;

function stopWatch() {
  fSeconds++;
  let seconds = fSeconds < 10 ? "0" + fSeconds : fSeconds;
  let minutes = fMinutes < 10 ? "0" + fMinutes : fMinutes;
  let hours = fHours < 10 ? "0" + fHours : fHours;
  secs.textContent = seconds;
  if (secs.textContent == "60") {
    secs.textContent = "00";
    fMinutes++;
    mins.textContent = minutes;
  }
  if (mins.textContent == "60") {
    mins.textContent = "00";
    fHours++;
    hours.textContent = hours;
  }
}

let handler = setInterval(stopWatch, 1000);

stopBtn.addEventListener("click", function () {
  clearInterval(handler);
});

start.onclick = function () {
  clearInterval(handler);
  handler = setInterval(stopWatch, 1000);
};

reset.onclick = function () {
  clearInterval(handler);
  fHours = 0;
  fMinutes = 0;
  fSeconds = 0;
  hours.textContent = "00";
  mins.textContent = "00";
  secs.textContent = "00";
  handler = setInterval(stopWatch, 1000);
};
