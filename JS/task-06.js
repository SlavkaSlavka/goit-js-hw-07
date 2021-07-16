const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('change', onFocusInput);


function onFocusInput(event) {
    if (event.currentTarget.value.length < Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    } else {  
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');    
    }
};
