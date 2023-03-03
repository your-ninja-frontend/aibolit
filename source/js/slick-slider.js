if (document.querySelector('.about-company-slider')) {
  $(document).ready(function () {
    $('.about-company-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
}

if (document.querySelector('.slick__appointments')) {
  $(document).ready(function () {
    $('.slick__appointments').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
}

if (document.querySelector('.all-services__slider')) {
  $(document).ready(function () {
    $('.all-services__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
}

if (document.querySelector('.expert-profile__slider')) {
  $(document).ready(function () {
    $('.expert-profile__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            adaptiveHeight: true
          }
        }
      ]
    });
  });
};
