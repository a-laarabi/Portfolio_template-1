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