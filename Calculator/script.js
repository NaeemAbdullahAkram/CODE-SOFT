let currentValue = '';
let operator = '';
let resultDisplayed = false;

function appendValue(value) {
  if (resultDisplayed) {
    document.getElementById('result').value = '';
    resultDisplayed = false;
  }
  currentValue += value;
  document.getElementById('result').value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  operator = '';
  document.getElementById('result').value = '';
}

function operate(op) {
  if (currentValue !== '') {
    operator = op;
    currentValue += ' ' + operator + ' ';
    document.getElementById('result').value = currentValue;
  }
}

function calculate() {
  const expression = currentValue.split(' ');
  const num1 = parseFloat(expression[0]);
  const num2 = parseFloat(expression[2]);

  let result;
  switch (expression[1]) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }

  document.getElementById('result').value = result;
  currentValue = result.toString();
  resultDisplayed = true;
}
