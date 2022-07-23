// Напиши скрипт який:

// Порахує та виведе в консоль кількість категорій
// у ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories,
// знайде та виведе в консоль текст заголовка
// елемента (тега < h2 >) та кількість елементів у категорії
// (Всіх вкладених у нього < li >).
// У результаті консолі будуть виведені такі повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// РІШЕННЯ:
const allCategories = document.querySelectorAll(".item");
console.log("Number of categories: " + allCategories.length);

allCategories.forEach((elem) => {
  console.log("Category: " + elem.firstElementChild.textContent);
  console.log("Elements: " + elem.lastElementChild.children.length);
});
