function createHomeInfo() {
  const description = document.createElement('div');
  description.classList.add('main-item');
  description.innerHTML = 'If a Shakespearean orphan were given even the tiniest taste of '
  + 'any one of our world famous specials, it\'d probably combust spontaneously.<br><br> '
  + 'Want a magical night out with a loved one? A nostalgic reunion with old friends? '
  + 'Need to impress a potential business partner with your culinary fearlessness? '
  + 'Eye of Newt has something for everybody!<br><br> Led by a master witch, scion of an ancient '
  + 'and storied family of infamous magical prowess, our restaurant will enchant your tastebuds '
  + 'and leave you craving more';

  return description;
}

export default createHomeInfo;
