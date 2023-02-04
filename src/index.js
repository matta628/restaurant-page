import buildInitPage from './init';
import createHomeInfo from './home';

function initialize() {
  buildInitPage();
  const main = document.querySelector('.main-info');
  main.appendChild(createHomeInfo());
}
initialize();
