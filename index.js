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
const timeOfDay = [
  'morning',
  'afternoon',
  'evening',
];

const greeting = document.querySelector('#about-title');
greeting.textContent = `Good ${timeOfDay[timeIndex]}`;
}

setInterval(setGreetings, 1000);

const titles = ['Full-Stack Software Developer', 'Student at Microverse', 'Coffee Fanatic'];
const title = document.querySelector('#title-text');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let index = 0;
title.textContent = titles[index];

next.addEventListener('click', () => {
  index = (index + 1) % titles.length;
  title.textContent = titles[index];
});

prev.addEventListener('click', () => {
  index = (index - 1 + titles.length) % titles.length;
  title.textContent = titles[index];
});
