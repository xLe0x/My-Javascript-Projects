const hexDigits = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let hexCode = "#";
for (let i = 0; i < 6; i++) {
  hexCode += hexDigits[Math.floor(Math.random() * hexDigits.length)];
}

document.querySelector("h1").innerHTML += hexCode;

document.body.style.backgroundColor = hexCode;