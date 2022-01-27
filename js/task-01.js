const allCategories = document.querySelector('#categories')


const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);


const allItems = itemEl.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})


