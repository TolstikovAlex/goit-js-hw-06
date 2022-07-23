// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн стиль при натисканні на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для створення випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// РІШЕННЯ:

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector("button");
const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector(".color");

btnEl.addEventListener("click", handleBtn);

function handleBtn(event) {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColorEl.textContent = `${color}`;
}
