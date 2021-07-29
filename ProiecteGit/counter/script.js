const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const counter = document.querySelector("#counter");

let count = 0;

function incCount() {
  count++;
  counter.textContent = count;
  replaceColors();
}

function decCount() {
  count--;
  counter.textContent = count;
  replaceColors();
}

function reset(){
    count=0;
    counter.textContent=count;
    counter.style.color="black"
}

function replaceColors() {
  if (count > 0) {
    counter.style.color = "#d9534f";
  } else if (count < 0) {
    counter.style.color = "#808080";
  } else {
    counter.style.color = "black";
  }
}
