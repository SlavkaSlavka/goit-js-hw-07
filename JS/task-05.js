const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const spanValue = spanEl.textContent;

const changeSpan = inputEl.addEventListener('input', inputChange);

function inputChange(inputEl) {
    spanEl.textContent = inputEl.currentTarget.value ? inputEl.currentTarget.value
    : spanValue;
}





