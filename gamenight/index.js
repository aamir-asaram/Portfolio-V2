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
    }
  });

  menu.addEventListener('touchmove', (e) => {
    e.preventDefault();
    menu.remove();
  });
};

const menu = document.querySelector('#menu');
menu.addEventListener('click', hamburger);
// hamburger();

home();