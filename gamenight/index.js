const container = document.querySelector('#content');
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

document.addEventListener('click', (e) => {
  if (e.target.textContent === 'WiFi') {
    wifi();
  } else if (e.target.textContent === 'Home') {
    home();
  }
});

const hamburger = () => {
  const menu = document.createElement('div');
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
    }
  });
};

const menu = document.querySelector('#menu');
menu.addEventListener('click', hamburger);

// hamburger();

home();