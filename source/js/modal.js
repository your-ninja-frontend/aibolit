const modals = document.querySelectorAll('.modal');
const changeCity = document.querySelector('.change-city');
const reviewBtn = document.querySelector('.expert__give-review-button');
const modalCity = document.querySelector('.modal__city');
const reviewModal = document.querySelector('.modal__review');
const reviewSuccess = document.querySelector('.modal__review-successful');


const showModal = (modal) => {
  console.log(modal);
  const wrapper = modal.querySelector('.modal__wrapper');
  const onPopupEscKeydown = e => escKeydown(e, closeModal);
  const onClickPage = e => {
    pageEvt(e, modal, wrapper, closeModal)
  };

  const openModal = () => {
    modal.classList.add('modal--active');
    document.addEventListener('keydown', onPopupEscKeydown);
    document.addEventListener('click', onClickPage);
  };

  const closeModal = () => {
    modal.classList.remove('modal--active');
    giveBtnClose(modal).removeEventListener('click', closeModal);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onClickPage);
  };

  openModal();
  giveBtnClose(modal).addEventListener('click', closeModal);
}

if (changeCity) {
  changeCity.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    showModal(modalCity);
  });
}

if (reviewBtn) {
  reviewBtn.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    showModal(reviewModal);
  });
}

if (reviewModal) {
  const reviewTextArea = reviewModal.querySelector('.modal__review-textarea');
  const reviewSubmit = reviewModal.querySelector('.modal__review-button');

  const min = 30;
  const max = 1000;
  const valid = (value) => value > min && value <= max;

  reviewTextArea.addEventListener("input", () => {
    const valueLength = reviewTextArea.value.length;

    if (valid(valueLength)) {
      reviewSubmit.removeAttribute("disabled");
      reviewTextArea.setCustomValidity('');
    } else {
      reviewTextArea.setCustomValidity(`Минимальное колчиство симоволов: ${min}. Максимальное колчиство симоволов ${max}. Вы ввели ${valueLength}`);
      reviewSubmit.setAttribute("disabled", "disabled");
    }
    reviewTextArea.reportValidity();
  });

  reviewSubmit.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    reviewTextArea.value = '';
    showModal(reviewSuccess);
  });
}
