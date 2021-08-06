const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const buttons = document.querySelectorAll(".buttons");


function displayRanCol(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const randColor = `rgb(${r},${g},${b})`;
    return randColor;
}


btn.addEventListener("click",function(){
    body.style.backgroundColor = displayRanCol();
     h1.innerHTML = displayRanCol()
})

for(let btn of buttons){
    btn.addEventListener("click",changeBackground )
    
}

function changeBackground(){
    this.style.backgroundColor = displayRanCol();
}