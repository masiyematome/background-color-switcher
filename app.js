//Selectors

const buttons = document.querySelector(".buttons");

//Event Listeners

buttons.addEventListener("click",changeBackColor);

//Functions

function changeBackColor(event,theColorsArray){
    const clickedItem = event.target;

    if(clickedItem.classList[0] == "orange-color-button"){
        document.body.style.backgroundColor = "#ff895d";
    }

    else if(clickedItem.classList[0] == "blue-color-button"){
        document.body.style.backgroundColor = "#007cb9";
    }

    else if(clickedItem.classList[0] == "red-color-button"){
        document.body.style.backgroundColor = "#e23e57";
    }

    else if(clickedItem.classList[0] == "green-color-button"){
        document.body.style.backgroundColor = "#2daf94";
    }
}