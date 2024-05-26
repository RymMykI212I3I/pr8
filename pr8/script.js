let display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(operation) {
    if (currentOperation !== null) calculateResult();
    firstNumber = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculateResult() {
    if (currentOperation === null) return;
    if (shouldResetDisplay) return;
    secondNumber = display.value;
    display.value = roundResult(operate(currentOperation, parseFloat(firstNumber), parseFloat(secondNumber)));
    currentOperation = null;
}

function clearDisplay() {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
    shouldResetDisplay = false;
}

function operate(operation, a, b) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                alert("Cannot divide by zero");
                return 0;
            }
            return a / b;
        default:
            return null;
    }
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}
