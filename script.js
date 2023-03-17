const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const divided = document.querySelector('#divided')
param1 = 2;
param2 = 5;

operate(param1,param2);
    switch()

function operate(param1,param2) {
    if (
        plus.addEventListener ('click', () => {
            add();
        })        
    );
    else if (
        minus.addEventListener ('click', () => {
            subtract();
        })
    );
    else if (
        times.addEventListener ('click', () => {
            multiply();
        })
    );
    else if (
        divided.addEventListener ('click', () => {
            divide();
        })
    );
}

function add() {
    sum = param1 + param2;
    alert(sum = param1 + param2);
}
function subtract() {
    sum = param1 - param2;
    alert(sum = param1 - param2);
}
function multiply() {
    sum = param1 * param2;
    alert(sum = param1 * param2);
}
function divide() {
    sum = param1 / param2;
    alert(sum = param1 / param2);
}