// Напиши скрипт, який при наборі тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення
// в span#name - output.Якщо інпут порожній,
//   у спані має відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// РІШЕННЯ:

const nameInput = document.querySelector("#name-input");
console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput.textContent);

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    return (nameOutput.textContent = event.currentTarget.value);
  }
  return (nameOutput.textContent = "Anonymous");
});
