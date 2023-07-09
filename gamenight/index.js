const container = document.querySelector('#content');
console.log(container);
const wifi = () => {
  container.innerHTML = `
    <h2>WiFi Info</h2>
    <img src="./wifi.png" alt="">
    <p>SSID: <span id="ssid">Home</span></p>
    <p>Password: <span id="password">42884866</span></p>
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
  container.innerHTML = `
    <p>Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam
    voluptatum, quibusdam, quia, quod
    voluptates voluptatem quos dolorum
    voluptate quas quibusdam, quia, quod
    </p>
    `;
}

document.addEventListener('click', (e) => {
  if (e.target.textContent === 'WiFi') {
    wifi();
  } else if (e.target.textContent === 'Home') {
    home();
  }
});

home();