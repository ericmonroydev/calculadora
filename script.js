let currentExpression = "";

function appendNumber(number) {
  currentExpression += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateDisplay();
}

function clearDisplay() {
  currentExpression = "";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (error) {
    currentExpression = "";
    updateDisplay();
    alert("Error in expression!");
  }
}

function updateDisplay() {
  document.getElementById("display").value = currentExpression;
}
