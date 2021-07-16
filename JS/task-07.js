const inputRangeEl = document.querySelector('#font-size-control');
const spanRangeEl = document.querySelector('#text');


inputRangeEl.addEventListener('input', onSpanChange );

function onSpanChange(event) {
    spanRangeEl.style.fontSize = Number(event.currentTarget.value) + 'px';
    console.log(spanRangeEl.style.fontSize);
};
  