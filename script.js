/* const firstName = "Valeria";
//const secondName = "Polina";

console.log(firstName, secondName);
*/ 

const res = document.getElementById('res');
const firstValue = document.getElementById('first-value');
const secondValue = document.getElementById('second-value');
const calcBtn = document.getElementById('calc');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('division');

let action = '+';

plusBtn.onclick = function () {
    action = '+'
}

minusBtnBtn.onclick = function () {
    action = '-'
}

multiBtnBtn.onclick = function () {
    action = '*'
}

divisionBtnBtn.onclick = function () {
    action = '/'
}

const print = function (result) {
    if (result >= 0) {
        res.style.color = 'green'
} else (result < 0) {
        res.style.color = 'red'
    }

        res.text.Content = result;
}

const getResult = function () {
    let firstNumber = Number (firstInput.value)
    let secondNumber = Number (secondInput.value)
}

    if (action === '+') {
        return firstNumber + secondNumber;
    } else if (action === '-') {
        return firstNumber - secondNumber;
    } else if (action === '*') {
        return firstNumber * secondNumber;
    } else if (action === '/') {
        return firstNumber / secondNumber;
}

calcBtn.onclick = function () {
    const result = getResult();
    printRes (result);
}