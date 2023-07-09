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
  greeting.textContent = `Good ${timeOfDay[timeIndex]}, let me introduce myself.`;

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

const projects = [
  {
    title: 'Code & Coffee',
    description: 'A website showcasing an event for developers to meet and share ideas.',
    image: 'https://res.cloudinary.com/djgqcdehv/image/upload/v1614628929/Portfolio%20Website/weather-app.png',
    live: 'https://aamir-asaram.github.io/capstone-one/',
    source: 'https://github.com/aamir-asaram/capstone-one',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Code & Coffee',
    description: 'A website showcasing an event for developers to meet and share ideas.',
    image: 'https://res.cloudinary.com/djgqcdehv/image/upload/v1614628929/Portfolio%20Website/weather-app.png',
    live: 'https://aamir-asaram.github.io/capstone-one/',
    source: 'https://github.com/aamir-asaram/capstone-one',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Code & Coffee',
    description: 'A website showcasing an event for developers to meet and share ideas.',
    image: 'https://res.cloudinary.com/djgqcdehv/image/upload/v1614628929/Portfolio%20Website/weather-app.png',
    live: 'https://aamir-asaram.github.io/capstone-one/',
    source: 'https://github.com/aamir-asaram/capstone-one',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]
