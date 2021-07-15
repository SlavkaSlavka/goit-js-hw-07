const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const spanValue = spanEl.textContent;

const changeSpan = inputEl.addEventListener('input', inputChange);

function inputChange(event) {
    spanEl.textContent = event.currentTarget.value ? event.currentTarget.value
        : spanValue;
}





