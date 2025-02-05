let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function appendNumber(value) {
    currentInput += value;
    display.textContent = currentInput;

}

function appendOperator(operator) {
    if (currentInput === "" && operator !== ".") return
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput)
        if (!Number.isInteger(result)) {
            result = result.toFixed(2)
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Erro";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = "";
    display.textContent = currentInput;
}