function add(a, b) {
    return +a + +b 
}

function subtract (a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b 
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = prompt("What is the value of the first number?")
    b = prompt("What is the value of the second number?")
    operator = prompt("add, subtract, multiply or divide?")
    if (operator == "add"){
        return add(a, b)
    } else if (operator == "subtract") {
        return subtract(a, b)
    } else if (operator == "multiply") {
        return multiply(a, b)
    } else if (operator == "divide") {
        return divide(a, b)
    } 
}

console.log(operate());