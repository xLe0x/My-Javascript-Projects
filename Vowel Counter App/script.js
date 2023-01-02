const input = document.querySelector("#input");
const checkBtn = document.querySelector(".btn");
const result = document.querySelector(".result");

window.onload = function () {
  input.focus();
};

function vowelCounter(value) {
  let index = 0;
  while (value[index] != undefined) {
    index++;
  }
  input.value = "";
  result.innerHTML = `They are : ${index} Chars`;
}
checkBtn.onclick = function () {
  vowelCounter(input.value);
};
