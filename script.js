function gridCreation(){
    delGrid()
    let inputNumber = document.getElementById("myNumber").value
    let $container = document.querySelector(".container");
    let $div 
    let totalSquares = inputNumber*inputNumber;
    for (i=0; i<totalSquares; i++) {
        $div = document.createElement('div');
        $div.classList.add("col");
        $container.appendChild($div)
    }
    setGridSize(inputNumber)
    colorChange();
}

function gridReset(){
    let totalSquares = document.querySelectorAll(".col");

    totalSquares.forEach(square => {
        square.style.background = 'white';
    });
}

document.getElementById("enter").addEventListener("click", gridCreation);
document.getElementById("reset").addEventListener("click", gridReset);
document.getElementById("black").addEventListener("click", blackColor);
document.getElementById("randomColor").addEventListener("click", colorChange);
document.getElementById("eraser").addEventListener("click", eraserColor);



function setGridSize(num){
    document.getElementById("container").style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

function delGrid() {
    container.innerHTML = "";
  }



 
function colorChange(){

    let color = [, "#2e7248", "#3C9EE7", "#E7993C","#E73C99", "#3CE746", "#E7993C", "#903555", "#3190bf", 
    "#b59e50", "#5ec7b2", "#5c3cf6", "#ad613c", "#2fbb81", "#9b674a", "#749ccc", "#fe2a5b","#68a626"]; 
    let squares = document.querySelectorAll(".col");
    squares.forEach((square) => {


    square.addEventListener('mouseover', () => {
    square.style.background = color[Math.floor(Math.random() * color.length)];
});
});
}

function blackColor() {
    let squares = document.querySelectorAll(".col");
    squares.forEach((square) => {


    square.addEventListener('mouseover', () => {
    square.style.background = "black";
});
});
}

function eraserColor(){

let squares = document.querySelectorAll(".col");
    squares.forEach((square) => {


    square.addEventListener('mouseover', () => {
    square.style.background = "white";
});
});
}


  

// function mouseOver() {
//     document.querySelector(".col").style.color = "blue";
// }


//     document.getElementById("container").addEventListener("mouseenter", mouseOver);



