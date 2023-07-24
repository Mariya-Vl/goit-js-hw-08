const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

// loadPage();

form.addEventListener('input', throttle(getFormData, 500));
function getFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  
}
console.log(formData);

form.addEventListener('submit', saveData);
function saveData(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  }

// function loadPage() {
// //   console.log(formData);
// // console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
// formData = localStorage.getItem(LOCALSTORAGE_KEY);
// //   // console.log(parsedData);
// //   // console.log(localStorage.getItem(LOCALSTORAGE_KEY));
// //   // console.log(parsedData.email);
// //   // console.log(parsedData.message);
// //   // const isLsEmpty = !localStorage.length;
// //   // console.log(isLsEmpty);
// //   if (!parsedData) {
// //     console.log("форма пуста");
// //     formData = {};
// //   } 
// //   if (!parsedData.email) {
// //     console.log("no email");
// //     form.elements.email.value = "";
// //     form.elements.message.value = parsedData.message;
// //   }
// //   if (!parsedData.message) {
// //     console.log("no message");
// //     form.elements.email.value = parsedData.email;
// //     form.elements.message.value = "";
// //   } else{
// //     console.log("тоді цей текст");
// //     console.log(form.elements.message);
// //     form.elements.message.textContent = parsedData.message;
// //     form.elements.email.value = parsedData.email;
// //   }
// }
