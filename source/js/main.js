let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
});

let modal = document.querySelector('.modal');
let modalButton = document.querySelectorAll('.js-open-modal');

for (let i = 0; i < modalButton.length; i++) {
  modalButton[i].onclick = function () {
    modal.classList.add('modal--show');
  };
}

document.addEventListener('keydown', function (e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) {
    modal.classList.remove('modal--show');
  }
});

modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('modal--show');
  }
});

let slideIndex = 1;

showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("reviews__item");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('reviews__item--current')
  }

  slides[slideIndex - 1].classList.add('reviews__item--current');
}
