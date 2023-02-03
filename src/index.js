/* eslint-disable no-console */
import RestaurantImage from './restaurant.jpg';

function createWrapper() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  return content;
}

function buildHeadline(content) {
  const header = document.createElement('div');
  const restaurantName = document.createElement('div');
  restaurantName.innerHTML = 'Vesuvio';

  content.appendChild(header);
  header.appendChild(restaurantName);
}

function buildDescription(content) {
  const description = document.createElement('div');
  description.innerHTML = 'Artie Bucco\'s Vesuvio caters to your every need!'
  + ' Eat your favorite italian dishes in a classy, upscale setting.'
  + ' We even have a two for one deal! Come check us out ';
  content.appendChild(description);
}

function addBackgroundImage(content) {
  const restaurantImage = new Image();
  restaurantImage.src = RestaurantImage;
  content.appendChild(restaurantImage);
}

function buildPage() {
  const content = createWrapper();

  buildHeadline(content);
  buildDescription(content);
  addBackgroundImage(content);
}

buildPage();
