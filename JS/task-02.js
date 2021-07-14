const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const containerIngredientsEl = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map(vegetables => {
    const itemIngredientsEl = document.createElement('li');
    itemIngredientsEl.textContent = vegetables;
    return itemIngredientsEl;
    
});
containerIngredientsEl.append(...ingredientsEl);


