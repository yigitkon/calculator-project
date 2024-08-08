document.addEventListener("click", getInput);

function addtoScreen(text) {
    let elem = document.querySelector(".screen");
    elem.value += text;
}

function deleteScreen(){
    let elem = document.querySelector(".screen");
    elem.value = "";
}

function deleteLastInput(){
    let elem = document.querySelector(".screen");
    elem.value = elem.value.slice(0,-1);
}
function getOperation(){
    let elem = document.querySelector(".screen");
    let inputScreen = elem.value;
    if (inputScreen.slice(0,1) != "-"){
        let result = 0
        const regex = /(\d+\.\d+|\d+|\+|\-|\x|\/)/g;
        const parts = inputScreen.match(regex);
        firstOperator = parseFloat(parts[0]);
        operator = parts[1];
        secondOperator = parseFloat(parts[2]);
    }else{
        inputScreen = inputScreen.slice(1);
        let result = 0
        const regex = /(\d+\.\d+|\d+|\+|\-|\x|\/)/g;
        const parts = inputScreen.match(regex);
        firstOperator = parseFloat(parts[0]) * -1;
        operator = parts[1];
        secondOperator = parseFloat(parts[2]);
    }
    console.log("First Operator: ", firstOperator)
    console.log("Second Operator: ", secondOperator)
    console.log("Operator: ", operator)
    if (operator == "x"){
        result = firstOperator * secondOperator
        result = Math.round(100*result)/100
        elem.value = result 
    }else if(operator == "-"){
        result = firstOperator - secondOperator
        result = Math.round(100*result)/100
        elem.value = result
    }else if(operator == "+"){
        result = firstOperator + secondOperator
        result = Math.round(100*result)/100
        elem.value = result
    }else if(operator == "/"){
        if (secondOperator != 0){
            result = firstOperator / secondOperator
            result = Math.round(100*result)/100
            elem.value = result
        }else{
            elem.value = "ERROR"
        }
    }
}


function getInput(e) {
    if (e.target.classList.contains("button")) {
        addtoScreen(e.target.id);
        if (e.target.id == "="){
            getOperation()
        }
    }
    if (e.target.classList.contains("top-button")){
        if (e.target.id == "c"){
            deleteScreen()
        }else{
            deleteLastInput()
        }
        
    }
}

