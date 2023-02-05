import buildInitPage from './init';
import createHomeInfo from './home';

function initialize() {
  buildInitPage();
  const main = document.querySelector('.main-info');
  main.appendChild(createHomeInfo());
}

function addTabListeners() {
  const main = document.querySelector('.main-info');

  const homeTab = document.getElementById('home-tab');
  homeTab.addEventListener('click', () => {
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild(createHomeInfo());
  });
  const menuTab = document.getElementById('menu-tab');
  menuTab.addEventListener('click', () => {
    if (main.lastChild) main.removeChild(main.lastChild);
    // main.appendChild(createMenuInfo());
  });

  const contactTab = document.getElementById('contact-tab');
  contactTab.addEventListener('click', () => {
    if (main.lastChild) main.removeChild(main.lastChild);
    // main.appendChild(createContactInfo());
  });
}

function run() {
  initialize();
  addTabListeners();
}

run();
