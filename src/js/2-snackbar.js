import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stateRadio = form.querySelectorAll('[name="state"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const delay = parseInt(delayInput.value, 10);
  const state = [...stateRadio].find(radio => radio.checked)?.value;

  if (!state || isNaN(delay)) {
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
