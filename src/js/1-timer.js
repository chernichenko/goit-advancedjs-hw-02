import flatpickr from "flatpickr";
import iziToast from "izitoast";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      document.getElementById("start-button").disabled = true;
      iziToast.error({
        message: "Please choose a date in the future",
      });
    } else {
      document.getElementById("start-button").disabled = false;
    }
  },
});

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer() {
  const now = new Date();
  const timeDifference = userSelectedDate - now;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  document.getElementById("days").textContent = addLeadingZero(days);
  document.getElementById("hours").textContent = addLeadingZero(hours);
  document.getElementById("minutes").textContent = addLeadingZero(minutes);
  document.getElementById("seconds").textContent = addLeadingZero(seconds);
}

let timerInterval;

document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("start-button").disabled = true;
  document.getElementById("datetime-picker").disabled = true;

  timerInterval = setInterval(updateTimer, 1000);
});
