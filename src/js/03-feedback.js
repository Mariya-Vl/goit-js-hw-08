const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('input', throttle(getFormData, 500));
function getFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', saveData);
function saveData(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {};
}

function loadPage() {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (parsedData) {
    form.elements.message.value = parsedData.message || '';
    form.elements.email.value = parsedData.email || '';
  }
}

loadPage();
