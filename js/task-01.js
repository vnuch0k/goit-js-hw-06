const allCategories = document.querySelector('#categories')


const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);



const firstCategory = allCategories.children[0]
console.log(`Category: ${firstCategory.querySelector('h2').textContent}`);

const animalsQuantity = allCategories.children[0]
const liQuantity = animalsQuantity.querySelector('.item ul').children.length
console.log(`Elements: ${liQuantity}`);



const secondCategory = allCategories.children[1]
console.log(`Category: ${secondCategory.querySelector('h2').textContent}`);

const productsQuantity = allCategories.children[1]
const secondLiQuantity = productsQuantity.querySelector('.item ul').children.length
console.log(`Elements: ${secondLiQuantity}`);



const thirdCategory = allCategories.children[2]
console.log(`Category: ${thirdCategory.querySelector('h2').textContent}`);

const techonologiesQuantity = allCategories.children[2]
const thirdLiQuantity = techonologiesQuantity.querySelector('.item ul').children.length
console.log(`Elements: ${thirdLiQuantity}`);
