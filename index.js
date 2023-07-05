import { DateTime, Interval } from "./node_modules/luxon/src/luxon.js";

const setGreetings = () => {
  const date = DateTime.local();
let timeIndex = 2;
if (Interval.fromDateTimes(
  DateTime.fromObject({ hour: 12 }),
  DateTime.fromObject({ hour: 17 })
).contains(date)) {
  timeIndex = 1;
} else if (Interval.fromDateTimes(
  DateTime.fromObject({ hour: 0 }),
  DateTime.fromObject({ hour: 12 })
).contains(date)) {
  timeIndex = 0;
}
console.log(timeIndex);
const timeOfDay = [
  'morning',
  'afternoon',
  'evening',
];

const greeting = document.querySelector('#about-title');
greeting.textContent = `Good ${timeOfDay[timeIndex]}`;
}

setInterval(setGreetings, 1000);
