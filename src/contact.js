function createHoursInfo() {
  const hours = document.createElement('div');
  hours.classList.add('main-item', 'contact-item');
  hours.innerHTML = `Hours<br><br>
  Monday: 6pm - 2am<br>
  Tuesday: 6pm - 2am<br>
  Wednesday: 6pm - 2am<br>
  Thursday: 6pm - 2am<br>
  Friday: 6pm - 2am<br>
  Saturday: 6pm - 2am<br>
  Sunday: 6pm - 2am`;
  return hours;
}

function createAddressInfo() {
  const address = document.createElement('div');
  address.classList.add('main-item', 'address', 'contact-item');
  address.innerHTML = 'Address<br><br>444 Wicca Way<br>East Magia, Sector QX<br>Free Cities';
  return address;
}

function createPhoneInfo() {
  const phone = document.createElement('div');
  phone.classList.add('main-item', 'contact-item');
  phone.innerHTML = 'Phone<br><br>333-9090-5732';
  return phone;
}

function createEmailInfo() {
  const email = document.createElement('div');
  email.classList.add('main-item', 'contact-item');
  email.innerHTML = 'Email<br><br>EyeOfNewt@hermes.com';
  return email;
}

function createContactInfo() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const hours = createHoursInfo();
  contact.appendChild(hours);

  const address = createAddressInfo();
  contact.appendChild(address);

  const phone = createPhoneInfo();
  contact.appendChild(phone);

  const email = createEmailInfo();
  contact.appendChild(email);

  return contact;
}

export default createContactInfo;
