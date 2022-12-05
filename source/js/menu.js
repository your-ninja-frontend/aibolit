const buttonMenu = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');


const buttonMenuClicker = () => buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('menu__button--open');
  menu.classList.toggle('menu__list--open');
  buttonMenu.classList.toggle('menu__button--close');
  menu.classList.toggle('menu__list--close');
});

export { buttonMenuClicker };
