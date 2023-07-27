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
  greeting.textContent = `Good ${timeOfDay[timeIndex]}.`;
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

const projectList = [
  {
    title: 'Code & Coffee',
    description: '<b>Code & Coffee</b> is a website showcasing an event for developers to meet and share ideas. <b>Tags:</b>',
    image: './assets/c&c.png',
    live: 'https://aamir-asaram.github.io/capstone-one/',
    source: 'https://github.com/aamir-asaram/capstone-one',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: 'fas fa-coffee',
  },
  {
    title: 'Space Travelers&apos; Hub',
    description: '<b>Space Travelers&apos; Hub</b> is a web application for a company that provides commercial and scientific space travel services. <b>Tags:</b>',
    image: './assets/meal.png',
    live: 'https://space-travelers-hub-i4jc.onrender.com/',
    source: 'https://github.com/Kgomotso196/Space-Travelers',
    tags: ['React', 'Redux', 'JavaScript', 'Desktop Only'],
    icon: 'fas fa-rocket',
  },
  {
    title: 'Meal Gallery',
    description: 'A <b>meal gallery</b> website is an online platform dedicated to showcasing a vast collection of food-related images, recipes, culinary creations, and gastronomic experiences. <b>Tags:</b>',
    image: './assets/meal.png',
    live: 'https://htetwaiyan7191.github.io/meal-gallery/dist',
    source: 'https://github.com/HtetWaiYan7191/meal-gallery',
    tags: ['CSS', 'JavaScript', 'Desktop Only'],
    icon: 'fas fa-carrot',
  },
  {
    title: 'Math Magicians',
    description: 'A website showcasing an event for developers to meet and share ideas.',
    image: './assets/math.png',
    live: 'https://math-magicians-hvym.onrender.com',
    source: 'https://github.com/aamir-asaram/math-magicians',
    tags: ['React', 'JavaScript', 'Desktop Only'],
    icon: 'fas fa-calculator',
  },
  {
    title: 'CMS Bookstore',
    description: 'A website showcasing an event for developers to meet and share ideas.',
    image: './assets/math.png',
    live: '',
    source: 'https://github.com/aamir-asaram/bookstore',
    tags: ['React', 'Redux', 'JavaScript', 'Desktop Only'],
    icon: 'fas fa-book',
  },
]

const projectContainer = document.querySelector('#skills');

projectList.forEach((project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('skill');
  projectDiv.id = projectList.indexOf(project);
  projectDiv.innerHTML = `
    <i class="${project.icon}"></i>
    <h3>${project.title}</h3>
  `;
  projectContainer.appendChild(projectDiv);
});

const projects = document.querySelectorAll('.skill');

//move all projects after the clicked one down 100px
const moveDown = (clicked) => {
  projects.forEach((project) => {
    if (project !== clicked  && project.offsetTop > clicked.offsetTop) {;
      project.style.transition = 'transform 0.7s ease-in-out';
    }
  });
};

let openProject = false;
let openedProject = null;

//move all projects back to their original position
const moveBack = () => {
  projects.forEach((project) => {
    project.style.transform = 'translateY(0)';
    project.style.transition = 'transform 1s ease-in-out';
  });
}

//add event listeners to all projects
projects.forEach((project) => {
  project.addEventListener('click', () => {
    if (openProject && openedProject === project) {
      console.log('same');
      removeProjectDetails();
      moveBack();
      openProject = false;
      openedProject = null;
    } else if (openProject) {
      removeProjectDetails();
      moveDown(project);
      addProjectDetails(project);
      openProject = true;
      openedProject = project;
    } else {
      moveDown(project);
      addProjectDetails(project);
      openProject = true;
      openedProject = project;
    }
  });
});

//add a div with the project details below the clicked project
const addProjectDetails = (project) => {
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');
  const index = project.id;
  projectDetails.innerHTML = `
    <img src="${projectList[index].image}" alt="${projectList[index].title}">
    <hr>
    <p>${projectList[index].description}</p>
    <ul class="project-tags">
      ${projectList[index].tags.map((tag) => `<li>${tag}</li>`).join('')}
    </ul>
    <button class="live"><a href="${projectList[index].source}" target="_blank">See Source</a></button>
  `;
  if (projectList[index].live) {
    projectDetails.innerHTML += `<button class="live"><a href="${projectList[index].live}" target="_blank">See Live</a></button>`;
  }
  //add details as next sibling of the clicked project
  project.parentElement.insertBefore(projectDetails, project.nextSibling);

  projectDetails.style.transform = 'translateX(-100vw)';

  //add a transition to the project details
  setTimeout(() => {
    projectDetails.style.transform = 'translateX(0)';
    projectDetails.style.transition = 'transform 0.7s ease-in-out';
  }, 100);
}

//remove all project details
const removeProjectDetails = () => {
  const details = document.querySelectorAll('.project-details');
  console.log(details);
  details.forEach((detail) => {
    //add a transition to the project details
    detail.style.transform = 'translateX(-100vw)';
    detail.style.transition = 'transform 0.7s ease-in-out';
    setTimeout(() => {
      detail.parentElement.removeChild(detail);
    }, 700);
  })
}
