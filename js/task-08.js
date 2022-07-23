// Напиши скрипт управління формою логіну.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обробка відправлення форми form.login-form має бути за подією submit.
// Під час надсилання форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля мають бути заповнені.
// Якщо користувач заповнив усі поля та відправив форму, збери значення полів у об'єкт, де ім'я поля буде іменем властивості, а значення поля – значенням властивості. Для доступу до елементів форми використовуй властивість елементів.
// Виведи об'єкт із введеними даними в консоль та очисти значення полів форми методом reset.

// РІШЕННЯ:
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert`Do not leave empty fields`;
  }
  const formItems = {
    email: email.value,
    password: password.value,
  };
  console.log(formItems);
  event.currentTarget.reset();
}
