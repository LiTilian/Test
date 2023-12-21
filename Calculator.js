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

function inputOperator(op) {
    if (result !== null) {
      expression = result + op;
      result = null;
    } else {
      expression += op;
    }
    updateDisplay();
}
  
function calculate() {
    result = eval(expression);
    expression = result.toString();
    updateDisplay();
}
  
function changeSign() {
    expression = eval(expression * -1).toString();
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      if (!isNaN(parseFloat(value)) || value === '.') {
        inputNumber(value);
      } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        inputOperator(value);
      } else if (value === '=') {
        calculate();
      } else if (value === 'sign') {
        changeSign();
      } else if (value === 'clear') {
        expression = '';
        result = null;
        updateDisplay();
      }
    });
});
  