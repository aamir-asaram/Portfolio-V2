const setGreetings = () => {
  const date = new Date();
  const timeIndex = Math.floor(date.getHours() / 8);

  const timeOfDay = [
    'morning',
    'afternoon',
    'evening',
  ];

  const greeting = document.querySelector('#about-title');
  greeting.textContent = `Good ${timeOfDay[timeIndex]}`;
  }

setInterval(setGreetings, 1001);

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
