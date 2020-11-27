const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');

let result1 = 0; let result2 = 0; let result = 0;

display.textContent = 0;

let numbers = []; let operators = [];

Array.from(numberButtons).forEach(item => {
    item.addEventListener('click', () => {
        if (display.textContent.startsWith('0')) display.textContent = '';
        display.textContent += item.textContent;
    })
});

Array.from(operatorButtons).forEach(item => {
    item.addEventListener('click', () => {
        if (display.textContent.startsWith('0')) {
            return false;
        }
        display.textContent += item.textContent;
    })
})

clear.addEventListener('click', () => {
    display.textContent = 0;
    result = 0; result1 = 0; result2 = 0;
    operators = []; numbers = [];
})

equal.addEventListener('click', () => {
    handleResult();
    display.textContent = result;
})

function handleResult() {
    getNumbersArray();
    getOperatorsArray();
    operations();
    return result;
}

function getNumbersArray() {
    let numbersString = [];
    numbersString = display.textContent.split(/\D+/);
    numbersString.forEach(item => {
        if (typeof parseInt(item) === 'number') {
            numbers.push(parseInt(item));
        }
    });
}

function getOperatorsArray() {
    let operatorsString = [];
    operatorsString = display.textContent.split(/\d/);
    operators = operatorsString.filter(item => item !== '');
}

function handleValidOperators() {
    operators.forEach(item => {
        if (item.length >= 2) {
            result = "ERROR";
            return false;
        }
    })
}

function operations() {
    result = numbers[0];
    numbers.shift();
    numbers.forEach((item, index) => {
        handleValidOperators();
        if (operators[index] === "+") { result += item }
        else if (operators[index] === '-') { result -= item }
        else if (operators[index] === '÷') { result /= item }
        else if (operators[index] === 'x') { result *= item };
    })
}