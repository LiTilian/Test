const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';
let result = null;

function updateDisplay() {
    display.value = expression;
}

function inputNumber(number) {
    expression += number;
    updateDisplay();
}
