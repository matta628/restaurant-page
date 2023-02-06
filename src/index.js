import buildInitPage from './init';
import createHomeInfo from './home';
import { createMenuObjects, createMenuInfo } from './menu';
import createContactInfo from './contact';

function initialize() {
  buildInitPage();
  createMenuObjects();
  const main = document.querySelector('.main');
  const homeTab = document.getElementById('home-tab');
  homeTab.classList.add('selected-tab');
  main.appendChild(createHomeInfo());
}

function removeSelectedTab() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => tab.classList.remove('selected-tab'));
}

function addTabListeners() {
  const main = document.querySelector('.main');

  const homeTab = document.getElementById('home-tab');
  homeTab.addEventListener('click', () => {
    removeSelectedTab();
    homeTab.classList.add('selected-tab');
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild(createHomeInfo());
  });
  const menuTab = document.getElementById('menu-tab');
  menuTab.addEventListener('click', () => {
    removeSelectedTab();
    menuTab.classList.add('selected-tab');
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild(createMenuInfo());
  });

  const contactTab = document.getElementById('contact-tab');
  contactTab.addEventListener('click', () => {
    removeSelectedTab();
    contactTab.classList.add('selected-tab');
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild(createContactInfo());
  });
}

function run() {
  initialize();
  addTabListeners();
}

run();
