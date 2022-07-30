const buttons = document.querySelector(".calc-buttons")
const visor = document.querySelector("p")

let firstNumber = 0;
let secondNumber = -Infinity;
let erase = true;
let operation = 0;

const makeOperation = {
    "+": function(x, y){ return x + y},
    "-": function(x, y){ return x - y},
    "x": function(x, y){ return x*y},
    "/": function(x, y){ return x/y},
    "+/-": function(x){return -x},
}

buttons.addEventListener("click", e => {
    pressedButton = e.target.innerText;
    
    if ("+-x/".includes(pressedButton)){
        if (operation === 0){
            console.log("teste");
            firstNumber = Number(visor.innerText);
        }    
        operation = pressedButton; 
        visor.innerText = 0;
        secondNumber = 0;
    }
    else if(pressedButton === "+/-"){
        visor.innerText = -Number(visor.innerText);
    }
    else if(pressedButton === "C"){
        firstNumber = 0;
        secondNumber = -Infinity;
        erase = true;
        operation = 0;
        visor.innerText = 0;
    }
    else if(pressedButton === "="){
        if (secondNumber !== -Infinity){
            secondNumber = Number(visor.innerText);
            visor.innerText = makeOperation[operation](firstNumber, secondNumber);
            secondNumber = -Infinity;
            erase = true;
            operation = 0;
        }
    }
    else if(pressedButton === "DEL"){
        visor.innerText = 0;
    }
    else{
        if (visor.innerText == 0 || erase === true){
            visor.innerText = pressedButton;
            erase = false;
        }
        else{
            visor.innerText = visor.innerText + pressedButton;
        }
    }
});

console.log("a");
console.log(buttons);