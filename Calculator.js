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