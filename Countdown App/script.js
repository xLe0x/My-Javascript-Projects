const day = document.querySelector(".days h3");
const hour = document.querySelector(".hours h3");
const min = document.querySelector(".mins h3");
const sec = document.querySelector(".secs h3");

let targetedDate = "1 Jan 2024";

function counter() {
  let timeToTheTargetedDate = new Date(targetedDate);
  let currentDate = new Date();

  let seconds = (timeToTheTargetedDate - currentDate) / 1000; // returns the difference between the next year and now in milliseconds

  let days = Math.floor(seconds / 3600 / 24);
  let hours = Math.floor(seconds / 3600) % 24;
  let mins = Math.floor(seconds / 60) % 60;
  let secs = Math.floor(seconds) % 60;

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = mins;
  sec.textContent = secs;
}

setInterval(counter, 1000);
