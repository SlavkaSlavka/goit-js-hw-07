const decrementEl = document.querySelector('#counter').firstElementChild;
const incrementEl = document.querySelector('#counter').lastElementChild;
const valueEl = document.querySelector('#value');
let counterValue = Number(valueEl.textContent);

const handleClickDecrement = function () {
    valueEl.textContent = Number(valueEl.textContent) - 1;
    counterValue -= 1;
    console.log(counterValue);
    return counterValue;
};
const handleClickincrement = function () {
    valueEl.textContent = Number(valueEl.textContent) + 1;
    counterValue += 1;
    console.log(counterValue);
    return counterValue;
};

decrementEl.addEventListener('click', handleClickDecrement);
incrementEl.addEventListener('click', handleClickincrement);




