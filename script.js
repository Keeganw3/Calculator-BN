const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const divided = document.querySelector('#divided')

while (true) {
    let param1 = +prompt ('Enter First number:', '');
    let param2 = +prompt ('Enter Second number:', '');
    if (!param1 || !param2) break;
    else
    operate(param1,param2); break;
}


function operate(param1,param2) {
    if (
        plus.addEventListener ('click', () => {
            add(param1,param2);
        })
    );
    else if (
        minus.addEventListener ('click', () => {
            subtract(param1,param2);
        })
    );
    else if (
        times.addEventListener ('click', () => {
            multiply(param1,param2);
        })
    );
    else if (
        divided.addEventListener ('click', () => {
            divide(param1,param2);
        })
    );
}

function add(param1,param2) {
    sum = param1 + param2;
    alert(sum = param1 + param2);
}
function subtract(param1,param2) {
    sum = param1 - param2;
    alert(sum = param1 - param2);
}
function multiply(param1,param2) {
    sum = param1 * param2;
    alert(sum = param1 * param2);
}
function divide(param1,param2) {
    sum = param1 / param2;
    alert(sum = param1 / param2);
}