const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');


const elements = ingredients.map(ingr => {
  const itemEL = document.createElement('li')
  itemEL.classList.add('item')
  itemEL.textContent = ingr
  return itemEL
})



ulEl.append(...elements)