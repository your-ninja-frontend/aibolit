const buttonMenu = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');
const menuWrapper = document.querySelector('.menu__wrapper');
const body = document.querySelector('.page-body');

const pageEvtMenu = (e) => {
  let target = e.target;
  let itsMenu = target == menu || menu.contains(target);
  let itsButton = target == buttonMenu;
  let menuIsActive = menu.classList.contains('menu__list--active');

  if (!itsMenu && !itsButton && menuIsActive) {
    e.preventDefault();
    closeMenu();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const isButtonActive = () => buttonMenu.classList.contains('menu__button--active');

const toggleMenu = () => {
  buttonMenu.classList.toggle('menu__button--active');
  menu.classList.toggle('menu__list--active');
  menuWrapper.classList.toggle('menu__wrapper--active');
  body.classList.toggle('blur');
}

const onPopupEscKeydown = e => escKeydown(e, closeMenu);

const openMenu = () => {
  toggleMenu();
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', pageEvtMenu);
};

const closeMenu = () => {
  toggleMenu();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', pageEvtMenu);
}

buttonMenu.addEventListener('click', e => {
  e.stopPropagation();
  e.preventDefault();

  if (!isButtonActive()) {
    openMenu();
  } else {
    closeMenu();
  }
});






