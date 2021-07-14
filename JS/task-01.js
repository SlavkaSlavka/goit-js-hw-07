
console.log(`В списке ${document.querySelector('#categories').children.length} категории`);



document.querySelectorAll('.item').forEach(item => console.log(`Категория: ${item.querySelector('h2').textContent)}`
console.log(item.querySelector('ul').children.length));
