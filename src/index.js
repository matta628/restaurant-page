/* eslint-disable no-console */
import './style.css';

function createWrapper() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  return content;
}

function createHeadline() {
  const header = document.createElement('div');
  header.classList.add('header');
  const restaurantName = document.createElement('div');
  restaurantName.classList.add('name');
  restaurantName.innerHTML = 'Eye of Newt';
  header.appendChild(restaurantName);
  return header;
}

function createDescription() {
  const description = document.createElement('div');
  description.classList.add('desc');
  description.innerHTML = 'If a Shakespearean orphan were given even the tiniest taste of '
  + 'any one of our world famous specials, it\'d probably combust spontaneously.<br><br> '
  + 'Want a magical night out with a loved one? A nostalgic reunion with old friends? '
  + 'Need to impress a potential business partner with your culinary fearlessness? '
  + 'Eye of Newt has something for everybody!<br><br> Led by a master witch, scion of an ancient '
  + 'and storied family of infamous magical prowess, our restaurant will enchant your tastebuds '
  + 'and leave you craving more';

  return description;
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

function buildPage() {
  const content = createWrapper();

  const headline = createHeadline();
  content.appendChild(headline);

  const mainInfo = document.createElement('div');
  mainInfo.classList.add('main-info');
  const desc = createDescription();
  mainInfo.appendChild(desc);
  content.appendChild(mainInfo);

  const footer = createFooter();
  content.appendChild(footer);
}

buildPage();
