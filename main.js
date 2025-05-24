const year = document.querySelector("[year]");
const month = document.querySelector("[month]");
const day = document.querySelector("[day]");
const hour = document.querySelector("[hour]");
const minute = document.querySelector("[minute]");
const second = document.querySelector("[second]");
const milisecond = document.querySelector("[milisecond]");

const updateDate = () => {
  const date = new Date();
  year.textContent = date.getFullYear() + 489; 
  month.textContent = date.getMonth() + 1;
  day.textContent = date.getDate();
  hour.textContent = String(date.getHours()).padStart(2, "0");
  minute.textContent = String(date.getMinutes()).padStart(2, "0");
  second.textContent = String(date.getSeconds()).padStart(2, "0");
  milisecond.textContent = String(date.getMilliseconds()).padStart(3, "0");
};

setInterval(updateDate, 10);
