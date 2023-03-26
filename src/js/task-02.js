const list = document.querySelector('ul');

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const item = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

list.innerHTML = item;
