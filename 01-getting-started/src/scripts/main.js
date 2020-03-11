import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

import functions from './functions.js';
import calculator from './Calculator.js';
//import taxCalcFunctions from './taxcalc.js';
//import arraysFunctions from './arrays.js';

let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let button = document.getElementById('calculate');
let checkmark = document.getElementsByClassName('operation-checkmark');
let num1 = 0;
let num2 = 0;
let result;
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// num1 calculator eventlisteners
if (num1Input) {
    num1Input.addEventListener('input', updateN1);
    function updateN1(event) {
        num1 = Number(event.target.value);

    }
}

// num2 calculator eventlisteners
if (num2Input) {
    num2Input.addEventListener('input', updateN2);
    function updateN2(event) {
        num2 = Number(event.target.value);
        if (checkmark[0].checked) {
            document.getElementById('answer').value = calculator.add(num1, num2).toFixed(2);
        } else if (checkmark[1].checked) {
            document.getElementById('answer').value = calculator.subtract(num1, num2).toFixed(2);
        } else if (checkmark[2].checked) {
            document.getElementById('answer').value = calculator.multiply(num1, num2).toFixed(2);
        } else if (checkmark[3].checked) {
            document.getElementById('answer').value = calculator.divide(num1, num2).toFixed(2);
        }
    }
}

//  calculator operations
const performOperation = (clickobj) => {
    let operator = clickobj.target.value;
    switch (operator) {
        case '+':
            if (checkmark[0].checked)
                document.getElementById('answer').value = calculator.add(num1, num2).toFixed(2);
            break;
        case '-':
            if (checkmark[1].checked)
                document.getElementById('answer').value = calculator.subtract(num1, num2).toFixed(2);
            break;
        case '*':
            if (checkmark[2].checked)
                document.getElementById('answer').value = calculator.multiply(num1, num2).toFixed(2);
            break;
        case '/':
            if (checkmark[3].checked)
                document.getElementById('answer').value = calculator.divide(num1, num2).toFixed(2);
            break;
        default:
            return 'error';
    };
}
// loop through operatoions checkmark eventListener
for (let i = 0; i < checkmark.length; i++) {
    checkmark[i].addEventListener('input', performOperation, false);
}

// clear calculator button
if (button) {
    button.addEventListener('click', function () {
        num1Input.value = '';
        num2Input.value = '';
        num1 = '';
        num2 = '';
        document.getElementById('answer').value = '';
        window.location.href = '#calculator';
    });
}
