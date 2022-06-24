function add(a, b){
    return Number(a + b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const calcButtons = document.querySelectorAll(".calc-button");
const display = document.querySelector("#display");

calcButtons.forEach(button => {
    button.addEventListener("click", onClick);
});

let total, currentNum, operator;

function resetVars(){
    total = 0;
    currentNum = 0;
    operator = '+';  
}

resetVars();

function onClick(e) {
    console.log("hello");
    const classList = Array.from(e.target.classList);
    if(classList.includes("numbers")){
        addTextToDisplay(e.target.textContent);
    }

    if(classList.includes("basic-arithmetic")){
        currentNum = Number(display.textContent);
        total = operate(operator, total, currentNum);
        operator = e.target.textContent;

        clearDisplay();
        addTextToDisplay(e.target.textContent);
    }

    if(e.target.id == "equals"){
        currentNum = Number(display.textContent);
        total = operate(operator, total, currentNum);

        clearDisplay();
        addTextToDisplay(total.toFixed(5).toString());
        resetVars();
    }
}

const nums = Array.from("123456789");

function addTextToDisplay(text){
    if(!nums.includes(display.textContent[0]))
        clearDisplay();
    
    display.textContent+=text;
}

function clearDisplay(){
    display.textContent = "";
}