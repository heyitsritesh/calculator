// Query Selectors

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const dot = document.querySelector('#dot');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

// Operators

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

// Variables

let firstNum, secondNum, operator;

// Display Status

let clearDisplay = false;

function displayCondition() {
    if (
        clearDisplay ||
        (display.textContent == '0' && display.textContent != '0.')
    ) {
        display.textContent = '';
        clearDisplay = false;
    }
}

// Number Click Event Listeners

function numEventClick(num, digit) {
    num.addEventListener('click', () => {
        displayCondition();
        display.textContent += digit;
    });
}

numEventClick(one, '1');
numEventClick(two, '2');
numEventClick(three, '3');
numEventClick(four, '4');
numEventClick(five, '5');
numEventClick(six, '6');
numEventClick(seven, '7');
numEventClick(eight, '8');
numEventClick(nine, '9');

zero.addEventListener('click', () => {
    displayCondition();
    if (display.textContent != '0') display.textContent += '0';
});

dot.addEventListener('click', () => {
    if (!display.textContent.includes('.')) display.textContent += '.';
});

// Number Key Press Event Listeners

function numEventKeyPress(digit) {
    document.addEventListener('keydown', event => {
        if (event.key === digit) {
            displayCondition();
            display.textContent += digit;
        }
    });
}

numEventKeyPress('1');
numEventKeyPress('2');
numEventKeyPress('3');
numEventKeyPress('4');
numEventKeyPress('5');
numEventKeyPress('6');
numEventKeyPress('7');
numEventKeyPress('8');
numEventKeyPress('9');

document.addEventListener('keydown', event => {
    if (event.key === '0') {
        displayCondition();
        if (display.textContent != '0') display.textContent += '0';
    }
});

document.addEventListener('keydown', event => {
    if (event.key === '.') {
        if (!display.textContent.includes('.')) display.textContent += '.';
    }
});

// Operator Event Listeners

function operatorEventListener(op, sign) {
    op.addEventListener('click', () => {
        if (firstNum == undefined) {
            firstNum = Number(display.textContent);
            clearDisplay = true;
        } else {
            execute();
            clearDisplay = true;
        }

        operator = sign;
    });
}

operatorEventListener(plus, '+');
operatorEventListener(minus, '-');
operatorEventListener(multiply, '*');
operatorEventListener(divide, '/');

// Equals Button Event Listener

equals.addEventListener('click', () => {
    execute();
    clearDisplay = true;
    operator = null;
});

// Function to run the execution

function execute() {
    secondNum = Number(display.textContent);

    switch (operator) {
        case '+':
            display.textContent =
                Math.round(addition(firstNum, secondNum) * 1000) / 1000;
            break;
        case '-':
            display.textContent =
                Math.round(subtraction(firstNum, secondNum) * 1000) / 1000;
            break;
        case '*':
            display.textContent =
                Math.round(multiplication(firstNum, secondNum) * 1000) / 1000;
            break;
        case '/':
            if (secondNum == 0) return (display.textContent = 'Yo wut?');
            display.textContent =
                Math.round(division(firstNum, secondNum) * 1000) / 1000;
            break;
    }

    firstNum = Number(display.textContent);
}

// Clear Button Event Listener
clear.addEventListener('click', () => {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    display.textContent = 0;
});
