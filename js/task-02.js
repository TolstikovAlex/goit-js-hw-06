// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як текстовий вміст.
// Додасть елементу клас item.
// Після чого вставить все за одну операцію
// до списку ul#ingredients.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// РІШЕННЯ:

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});

ingredientsEl.append(...elements);
