function add(a, b){
    return a + b;
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
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

const calcButtons = document.querySelectorAll(".calc-button");
const display = document.querySelector("#display");

calcButtons.forEach(button => {
    button.addEventListener("click", onClick);
});

function onClick(e) {
    console.log("hello");
    if(Array.from(e.target.classList).includes("numbers")){
        display.textContent+=e.target.textContent;
    }
}