import FoodImg1 from './chicken.jpeg';
import FoodImg2 from './stew.jpeg';
import FoodImg3 from './ceviche.jpeg';

class MenuItem {
  constructor(name, img, price, desc) {
    this.name = name;
    this.img = img;
    this.desc = desc;
    this.price = price;
  }
}

const menuItems = [];

function createMenuObjects() {
  const foodImg1 = new Image();
  foodImg1.src = FoodImg1;
  const foodImg2 = new Image();
  foodImg2.src = FoodImg2;
  const foodImg3 = new Image();
  foodImg3.src = FoodImg3;

  menuItems.push(new MenuItem(
    'Braised Elysian Pol',
    foodImg1,
    '7 Drakki',
    'Roasted over one of only two infinite fires in all the free cities, this exquisite pol has been '
    + 'seasoned to perfection, and infused with strengthening, yet delicious substances',
  ));
  menuItems.push(new MenuItem(
    'Cambrian Nox Stew',
    foodImg2,
    '8 Drakki',
    'The most ancient and renowned of our three specials, this stew will boost your health and '
    + 'stamina as the delicious meats warm and sate your stomach',
  ));
  menuItems.push(new MenuItem(
    'Sea of Klalia Mix',
    foodImg3,
    '10 Drakki',
    'Cooked with a concotion brewed over 7 nights, this seafood mix will open your mind\'s eye '
    + 'and give you a long lasting enhanced focus',
  ));
}

function createMenuItemElements() {
  const elements = [];
  for (let i = 0; i < menuItems.length; i++) {
    const element = document.createElement('div');
    element.classList.add('menu-item', 'main-item');

    const name = document.createElement('div');
    name.classList.add('menu-item-name');
    name.innerHTML = menuItems[i].name;
    element.appendChild(name);

    const img = document.createElement('div');
    img.classList.add('menu-item-img');
    img.appendChild(menuItems[i].img);
    element.appendChild(img);

    const price = document.createElement('div');
    price.classList.add('menu-item-price');
    price.innerHTML = menuItems[i].price;
    element.appendChild(price);

    const desc = document.createElement('div');
    desc.classList.add('menu-item-desc');
    desc.innerHTML = menuItems[i].desc;
    element.appendChild(desc);

    elements.push(element);
  }
  return elements;
}

function createMenuInfo() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuItemElements = createMenuItemElements();
  for (let i = 0; i < menuItemElements.length; i++) {
    menu.appendChild(menuItemElements[i]);
  }

  return menu;
}

export {
  createMenuInfo,
  createMenuObjects,
};
