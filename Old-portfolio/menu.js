const menu = document.querySelector('.menu');
const menuPopup = document.querySelector('.menu-popup');
const menuIcon = document.querySelector('.menu-icon');
const link = document.querySelectorAll('.nav-link');

menu.addEventListener('click', () => {
  menuPopup.classList.add('visible');
});

menuIcon.addEventListener('click', () => {
  menuPopup.classList.remove('visible');
});

for (let i = 0; i < link.length; i += 1) {
  link[i].addEventListener('click', () => {
    menuPopup.classList.remove('visible');
  });
}

// ######## Error ########

const submit = document.querySelector('.submit');

submit.addEventListener('click', (event) => {
  const mail = document.getElementById('mail').value;
  const error = document.querySelector('.error');
  error.classList.add('visible');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(mail)) {
    event.preventDefault();
    error.innerHTML = 'email should be in lowercase';
    setTimeout(() => {
      error.innerHTML = '';
      error.classList.remove('visible');
    }, 6000);
  }
});
