function gridCreation(num){
  
    let $container = document.querySelector(".container");
    let $div 
    let totalSquares = num*num;
    for (i=0; i<totalSquares; i++) {
        $div = document.createElement('div');
        $div.classList.add("col");
        $container.appendChild($div)
    }
    setGridSize(num)
    
}

let userNumber = Number(prompt("Enter a number between 4 and 100", "i.e: 16"));
gridCreation(userNumber);

function setGridSize(num){
    document.getElementById("container").style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${num}, 1fr)`;
}



 

// function mouseOver() {
//     document.querySelector(".col").style.color = "blue";
// }


//     document.getElementById("container").addEventListener("mouseenter", mouseOver);



