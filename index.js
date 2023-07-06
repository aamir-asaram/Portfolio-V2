const setGreetings = () => {
  let timeIndex = 2;
  const hour = new Date().getHours();

  if (hour > 4 && hour < 12) {
    timeIndex = 0;
  } else if (hour >= 12 && hour < 17) {
    timeIndex = 1;
  } else {
    timeIndex = 2;
  }

  const timeOfDay = [
    'morning',
    'afternoon',
    'evening',
  ];

  const greeting = document.querySelector('#about-title');
  greeting.textContent = `Good ${timeOfDay[timeIndex]}`;

  }

setInterval(setGreetings, 400);

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

document.addEventListener('click', (e) => {console.log(e.target)})
