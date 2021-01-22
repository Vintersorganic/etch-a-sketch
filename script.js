function gridCreation(){
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
    
}

document.getElementById("enter").addEventListener("click", gridCreation);

function setGridSize(num){
    document.getElementById("container").style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${num}, 1fr)`;
}



 
let color = [, "#3C9EE7", "#E7993C",  
        "#E73C99", "#3CE746", "#E7993C"]; 
  
    document.getElementById("container").addEventListener( 
            "mouseenter", function () { 
                  
        document.querySelector(".col").style.background  
            = color[Math.floor(Math.random() * color.length)]; 
    }) 

// function mouseOver() {
//     document.querySelector(".col").style.color = "blue";
// }


//     document.getElementById("container").addEventListener("mouseenter", mouseOver);



