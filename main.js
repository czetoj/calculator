const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.firstLine');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');

let result1 = 0;
let result2 = 0;
let result = 0;
display.textContent = 0;
let numbers = [];
let n = 0;
for (let i = 0; i < 100; i++) {
    numbers[i] = [];
}
let operators = [];

Array.from(numberButtons).forEach(item => {
    item.addEventListener('click', () => {
        if (display.textContent.startsWith('0')) display.textContent = '';
        display.textContent += item.textContent;
        numbers[n].push(parseInt(item.id));
        console.log(numbers);
    })
});

Array.from(operatorButtons).forEach(item => {
    item.addEventListener('click', () => {
        if (display.textContent.startsWith('0')) {
            return false;
        }
        display.textContent += item.textContent;
        operators.push(item.id);
        n++;
        console.log(operators);
    })
})

clear.addEventListener('click', () => {
    display.textContent = 0;
    result = 0;
    numbers = [];
    operators = [];
})

equal.addEventListener('click', () => {
    for (let i = 0; i < numbers[0].length; i++) {
        result1 += numbers[0][i] * 10 ** (numbers[0].length - 1 - i);
    }
    for (let i = 0; i < numbers[1].length; i++) {
        result2 += numbers[1][i] * 10 ** (numbers[1].length - 1 - i);
    }
    operator = operators[0];
    result = result1 * result2;
    display.textContent = result;
    result = 0;
    numbers = [];
    operators = [];
})

