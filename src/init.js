/* eslint-disable no-console */
import './style.css';

function createWrapper() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  return content;
}

function createTabs() {
  const list = document.createElement('div');
  list.classList.add('tabs');
  const tabs = [];
  for (let i = 0; i < 3; i++) {
    const item = document.createElement('button');
    item.classList.add('tab');
    list.appendChild(item);
    tabs.push(item);
  }
  tabs[0].innerHTML = 'Home';
  tabs[0].setAttribute('id', 'home-tab');
  tabs[1].innerHTML = 'Menu';
  tabs[1].setAttribute('id', 'menu-tab');
  tabs[2].innerHTML = 'Contact';
  tabs[2].setAttribute('id', 'contact-tab');
  return list;
}

function createHeadline() {
  const header = document.createElement('div');
  header.classList.add('header');

  const restaurantName = document.createElement('div');
  restaurantName.classList.add('name');
  restaurantName.innerHTML = 'Eye of Newt';
  header.appendChild(restaurantName);

  const tabs = createTabs();
  header.appendChild(tabs);
  return header;
}

function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const credit = document.createElement('div');
  credit.innerHTML = 'Made by matta628';
  credit.classList.add('credit');
  footer.appendChild(credit);
  return footer;
}

function buildInitPage() {
  const content = createWrapper();

  const headline = createHeadline();
  content.appendChild(headline);

  const mainInfo = document.createElement('div');
  mainInfo.classList.add('main');
  content.appendChild(mainInfo);

  const footer = createFooter();
  content.appendChild(footer);
}

export default buildInitPage;
