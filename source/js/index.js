const escEvent = e => {
  return e.key === 'Escape' || e.key === 'Esc';
};

const escKeydown = (e, fn) => {
  if (escEvent(e)) {
    e.preventDefault();
    fn();
  }
};

const pageEvt = (e, modal, wrapper, fn) => {
  let target = e.target;
  let itsBlock = target == wrapper || wrapper.contains(target);
  let modalIsActive = modal.classList.contains('modal--active');

  if (!itsBlock && modalIsActive) {
    e.preventDefault();
    fn();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const giveBtnClose = el => el.querySelector('.modal__close');





