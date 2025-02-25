import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stateRadio = form.querySelectorAll('[name="state"]');
const button = form.querySelector('button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const delay = parseInt(delayInput.value, 10);
  const state = [...stateRadio].find(radio => radio.checked)?.value;

  if (!state || isNaN(delay)) {
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(message => {
      iziToast.success({
        message: message,
        position: 'topRight',
      });
    })
    .catch(message => {
      iziToast.error({
        message: message,
        position: 'topRight',
      });
    });
});