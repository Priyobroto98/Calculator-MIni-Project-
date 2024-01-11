var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}
function calculate(operand1, operator, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
// Check for division by zero
            return operand2 !== 0 ? operand1 / operand2 : "Division by zero";
        default:
            return "Invalid operator";
    }
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
//getAttribute() - returns the value of the specified attribute.

        var text = display.textContent.trim();
//display.textContent.trim()-used to get the text content of the HTML element with the id or name "display" and
// remove any leading or trailing whitespaces from that text content

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
//parseFloat()- used to convert that string into a floating-point number

            display.textContent = "";
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
           // var result = eval(operand1 + ' ' + operator + ' ' + operand2);
           /*
NOTE: using eval with arbitrary strings can be potentially unsafe,
as it can execute arbitrary code and may lead to security vulnerabilities,
 especially if the input is not sanitized
           */
           var result= calculate(operand1,operator,operand2);
           if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}

