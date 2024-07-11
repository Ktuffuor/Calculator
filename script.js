const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '0'
        } else if (value === '=') {
            if(currentNumber && previousNumber && operation) {
                const result = calculate(previousNumber, currentNumber, operation);
                display.value = result;
                currentNumber = result;
                previousNumber = '';
                operation = '';
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^' || value === '%') {
            if (currentNumber) {
                previousNumber = currentNumber;
                currentNumber = '';
                operation = value;
            }
        } else if (value === 'DEL') {
            if(currentNumber) {
                currentNumber = currentNumber.slice(0, -1);
                display.value = currentNumber;
            }
        } else {
            if (currentNumber.length < 10) {
                currentNumber += value;
                display.value = currentNumber;
            }
        }
    });
});

function calculate(previousNumber, currentNumber, operation) {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        return num1 / num2;
    } else if (operation === '^') {
        return Math.pow(num1, num2);
    } else if (operation === '%') {
        return num1 % num2;
    }
}