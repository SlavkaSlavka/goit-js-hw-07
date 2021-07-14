
console.log(`В списке ${document.querySelector('#categories').children.length} категории`);



document.querySelectorAll('.item').forEach(item => console.log
    (`Категория: ${item.querySelector('h2').textContent}, 
    количество элементов ${item.querySelector('ul').children.length}`));

