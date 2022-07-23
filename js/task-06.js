// Напиши скрипт, який при втраті фокусу на інпуті (подія blur),
//   перевіряє вміст на правильну кількість введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//   Скільки символів має бути в інпуті,
//     вказується у його атрибуті data - length.
// Якщо введено відповідну кількість символів,
//   то border інпут стає зеленим, якщо неправильне - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//   які ми вже додали до вихідних файлів завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// РІШЕННЯ:

const inputEl = document.querySelector("input");
const lengthEl = inputEl.getAttribute("data-length");

const onInputBlur = (event) =>
  event.target.value.length === Number.parseInt(lengthEl)
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
inputEl.addEventListener("blur", onInputBlur);
