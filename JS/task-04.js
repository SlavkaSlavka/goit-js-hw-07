const decrementEl = document.querySelector('#counter').firstElementChild;
const incrementEl = document.querySelector('#counter').lastElementChild;
const valueEl = document.querySelector('#value');
let counterValue = Number(valueEl.textContent);

function onClickBtnDecrement() {
    valueEl.textContent = Number(valueEl.textContent) - 1;
    counterValue -= 1;
};
function onClickBtnIncrement() {
    valueEl.textContent = Number(valueEl.textContent) + 1;
    counterValue += 1;
};

decrementEl.addEventListener('click', onClickBtnDecrement);
incrementEl.addEventListener('click', onClickBtnIncrement);




