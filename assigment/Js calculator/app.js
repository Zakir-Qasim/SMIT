const display = document.getElementById("display");

function ShowDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value =  "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}
function DeleteDisplay(){
    if(display.value.length > 0){
        display.value = display.value.slice(0, -1);
    }
}
