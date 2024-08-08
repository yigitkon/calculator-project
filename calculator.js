console.log("Hello")


document.addEventListener("click", getInput);

function addtoScreen(text) {
    var elem = document.querySelector(".screen");
    elem.value += text;
}

function deleteScreen(){
    var elem = document.querySelector(".screen");
    elem.value = "";
}

function deleteLastInput(){
    var elem = document.querySelector(".screen");
    elem.value = elem.value.slice(0,-1);
}


function getInput(e) {
    if (e.target.classList.contains("button")) {
        console.log(e.target.id);
        addtoScreen(e.target.id);
    }
    if (e.target.classList.contains("top-button")){
        if (e.target.id == "c"){
            deleteScreen()
        }else{
            deleteLastInput()
        }
        
    }
}

