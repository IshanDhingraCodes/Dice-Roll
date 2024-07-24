let myButton = document.getElementById("myButton");
let myLabel = document.getElementById("myLabel");
let randomNum;
let min = 1;
let max = 6;

myButton.onclick = ()=>{
    randomNum = Math.floor(Math.random()*6)+1;
    myLabel.textContent = randomNum;
}