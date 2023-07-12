const container = document.querySelector('#content');
let isMenu = false;
console.log(container);
const wifi = () => {
  container.innerHTML = `
  <div id="home-content">
    <h2>WiFi Info</h2>
    <img src="./wifi.png" alt="">
    <p>SSID: <span id="ssid">Home</span></p>
    <p>Password: <span id="password">42884866</span></p>
  </div>
  `;
  const ssid = document.querySelector('#ssid');
  const password = document.querySelector('#password');
  password.parentElement.addEventListener('click', () => {
    navigator.clipboard.writeText('42884866');
    password.textContent = 'Copied!';
    setTimeout(() => {
      password.textContent = '42884866';
    }, 2000);
  });
};

const home = () => {
  //write a paragraph about a game night invite
  container.innerHTML = `
    <div id="home-content">
      <p id="home">
        <b>21 07 23</b>
      </p>
      <p id="home">
        <b>Game Night Pt. 2</b>
      </p>
      <p id="home">
        <b>3:00 PM - 9:00 PM</b>
      </p>
    </div>
    `;
}

const address = () => {
  container.innerHTML = `
  <div id="home-content">
    <h2>Address</h2>
    <a href="https://www.google.com/maps/place/34%C2%B000'30.8%22S+18%C2%B030'44.1%22E/@-34.0065506,18.5074125,16.22z/data=!4m4!3m3!8m2!3d-34.008548!4d18.512262?entry=ttu"><img src="./map.png" alt=""></a>
    <p>45 Mayfield Village</p>
    <p>Abbott Road, Wetton</p>
  </div>
  `;
}

const hamburger = () => {
  const menu = document.createElement('div');
  isMenu = true;
  document.removeEventListener('touchmove', hamburger);
  menu.classList.add('menu');
  menu.innerHTML = `
  <i class="fas fa-times" id="close"></i>
  <p>Home</p>
  <p>Address</p>
  <p>Playlist</p>
  <p>WiFi</p>
  `;
  container.appendChild(menu);
  menu.addEventListener('click', (e) => {
    if (e.target.textContent === 'WiFi') {
      menu.remove();
      wifi();
    } else if (e.target.textContent === 'Home') {
      home();
    } else if (e.target.textContent === 'Address') {
      menu.remove();
      address();
    } else if (e.target.id === 'close') {
      menu.remove();
      addSwipe();
    } else if (e.target.textContent === 'Playlist') {
      menu.remove();
      playlist();
    }
  });

  menu.addEventListener('touchmove', (e) => {
    e.preventDefault();
    menu.remove();
  });
};

const playlist = () => {
  container.innerHTML = `
  <div id="home-content">
    <a href="https://open.spotify.com/playlist/041G2zZzpqK7Vwgg5FpOER?si=0364134db79a4e13&pt=c852d262d8517ca72194bd2e86998490"><h2>Playlist</h2></a>
    <p>Feel free to contribute <br>(pls don't spam ABBA)</p>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/041G2zZzpqK7Vwgg5FpOER?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  `;
}
let light = false;
const toggleLightMode = () => {
  return !light;
};

// determine if device theme is light or dark
const isLightMode = () => {
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};

if (isLightMode()) {
  document.querySelector('#dark-mode').class = 'fas fa-bars';
}

const setTheme = () => {
  light = toggleLightMode();
  document.querySelector('#dark-mode').classList.toggle('fa-sun');
    document.querySelector('#dark-mode').classList.toggle('fa-moon');
  if (light) {
    //set :root variable
    document.documentElement.style.setProperty('--primary', '#f90154');
    document.documentElement.style.setProperty('--secondary', '#00470c');
    document.documentElement.style.setProperty('--background', '#ffebfc');
    document.documentElement.style.setProperty('--text', '#190015');

  } else {
    document.documentElement.style.setProperty('--primary', '#f90154');
    document.documentElement.style.setProperty('--secondary', '#00470c');
    document.documentElement.style.setProperty('--background', '#190015');
    document.documentElement.style.setProperty('--text', '#ffebfc');
  }
};

const menu = document.querySelector('#menu');
menu.addEventListener('click', hamburger);

document.querySelector('#dark-mode').addEventListener('click', setTheme);
// hamburger();

home();