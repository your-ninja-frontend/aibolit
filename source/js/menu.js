const buttonMenu = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('.page-body');

const toggleMenu = () => {
  buttonMenu.classList.toggle('menu__button--active');
  menu.classList.toggle('menu__list--active');
  body.classList.toggle('blur');
}

buttonMenu.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let itsMenu = target == menu || menu.contains(target);
  let itsButton = target == buttonMenu;
  let menuIsActive = menu.classList.contains('menu__list--active');

  if (!itsMenu && !itsButton && menuIsActive) {
    e.preventDefault();
    toggleMenu();
  }
});
