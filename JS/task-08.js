const inputDataEl = document.querySelector('#controls').firstElementChild;
const btnRenderEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const divRenderEl = document.querySelector('#boxes');

    
function createBoxes(amount) {
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i+=1) {
        const newDivBoxes = document.createElement('div');
       let r = Math.random() * (0, 255) + 0;
       let g = Math.random() * (0, 255) + 0;
       let b = Math.random() * (0, 255) + 0;
        if (i>1) {
            width += 10;
            height += 10;
        }
        newDivBoxes.style.width = width + 'px';
        newDivBoxes.style.height = height + 'px';
        newDivBoxes.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        divRenderEl.append(newDivBoxes);
    }
};

btnRenderEl.addEventListener('click', onBtnRendered);
btnDestroyEl.addEventListener('click', onBtnDestroyed);

function onBtnRendered() {
    createBoxes(inputDataEl.value);
};

function onBtnDestroyed() {
    const destroyBoxes = divRenderEl.querySelectorAll("div");
    destroyBoxes.forEach((box) => divRenderEl.removeChild(box)); //btnDestroyEl.removeChild(box)
    
};
