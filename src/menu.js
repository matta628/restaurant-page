import FoodImg1 from './cauldron1.jpeg';

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
  foodImg2.src = FoodImg1;
  const foodImg3 = new Image();
  foodImg3.src = FoodImg1;

  menuItems.push(new MenuItem(
    'FoodName1',
    foodImg1,
    '$Price1',
    'Description1 loris ipsum loris ipsum loris ipsum loris ipsum loris ipsum loris ipsum',
  ));
  menuItems.push(new MenuItem(
    'FoodName2',
    foodImg2,
    '$Price2',
    'Description2 loris ipsum loris ipsum loris ipsum loris ipsum loris ipsum loris ipsum',
  ));
  menuItems.push(new MenuItem(
    'FoodName3',
    foodImg3,
    '$Price3',
    'Description3 loris ipsum loris ipsum loris ipsum loris ipsum loris ipsum loris ipsum',
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
