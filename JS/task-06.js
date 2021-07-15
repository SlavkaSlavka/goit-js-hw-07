const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('change', onFocusInput);


function onFocusInput(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.length < 6) {
        inputEl.classList.add('invalid');
    } else inputEl.classList.add('valid');
    console.log(event.currentTarget.value.length);
};