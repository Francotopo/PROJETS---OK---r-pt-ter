const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelector('.deadline-format h4');

let futureDate = new Date(2023, 3, 24, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

let month = months[futureDate.getMonth()];
const day = futureDate.getDate();

let weekDay = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway Ends On ${weekDay} ${day}, ${month} ${year} ${hours}:${minutes}:${seconds}am`;
