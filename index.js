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
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const dot = document.querySelector('#dot');
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

// Event Listeners

function displayCondition() {
    if (display.textContent == '0' && display.textContent != '0.')
        display.textContent = '';
}

one.addEventListener('click', () => {
    displayCondition();
    display.textContent += '1';
});

two.addEventListener('click', () => {
    displayCondition();
    display.textContent += '2';
});

three.addEventListener('click', () => {
    displayCondition();
    display.textContent += '3';
});

four.addEventListener('click', () => {
    displayCondition();
    display.textContent += '4';
});

five.addEventListener('click', () => {
    displayCondition();
    display.textContent += '5';
});

six.addEventListener('click', () => {
    displayCondition();
    display.textContent += '6';
});

seven.addEventListener('click', () => {
    displayCondition();
    display.textContent += '7';
});

eight.addEventListener('click', () => {
    displayCondition();
    display.textContent += '8';
});

nine.addEventListener('click', () => {
    displayCondition();
    display.textContent += '9';
});

zero.addEventListener('click', () => {
    if (display.textContent != '0') display.textContent += '0';
});

dot.addEventListener('click', () => {
    if (!display.textContent.includes('.')) display.textContent += '.';
});
