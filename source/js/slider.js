const sliderButtons = document.querySelectorAll('.slider__button');
const sliderSlides = document.querySelectorAll('.slider__slide');

const buttonClick = (el) => {
  const activeButton = document.querySelector('.slider__button--active');
  activeButton.classList.remove('slider__button--active');
  el.classList.add('slider__button--active');
}

const slides = (collection, i) => {
  collection.forEach((el) => {
    if (el.classList.contains('slider__slide--active')) {
      el.classList.remove('slider__slide--active');
    }
    if (el.classList.contains(`slider__slide-${i + 1}`)) {
      el.classList.add('slider__slide--active');
    }
  });
};

const slide = () => {
  sliderButtons.forEach((el, i) => {
    el.addEventListener('click', () => {
      buttonClick(el);
      slides(sliderSlides, i);
    });
  });
}

slide();
