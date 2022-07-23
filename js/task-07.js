// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text оновлюючи властивість font-size.
// В результаті при перетягуванні повзунка змінюватиметься розмір
// тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// РІШЕННЯ:
const fontEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

fontEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
