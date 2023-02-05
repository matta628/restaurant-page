import buildInitPage from './init';
import createHomeInfo from './home';
import createContactInfo from './contact';

function initialize() {
  buildInitPage();
  const main = document.querySelector('.main');
  // main.appendChild(createHomeInfo());
  main.appendChild(createContactInfo());
}

function addTabListeners() {
  const main = document.querySelector('.main');

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
    main.appendChild(createContactInfo());
  });
}

function run() {
  initialize();
  addTabListeners();
}

run();
