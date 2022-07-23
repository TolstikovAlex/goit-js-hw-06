// Лічильник складається зі спану та кнопок, які, при кліку,
//   повинні збільшувати та зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div >

// Створи змінну counterValue в якій зберігатиметься
//   поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачі кліків на кнопки,
//   всередині яких збільшуй чи зменшуй значення лічильника.
// Обновляй інтерфейс новим значенням змінної counterValue.

// РІШЕННЯ:

let counterValue = 0;
const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
