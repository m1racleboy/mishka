let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
});

let modal = document.querySelector('.modal');
let modalButton = document.querySelectorAll('.js-open-modal');

if (modal) {
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
}

let reviews = document.querySelector('.reviews');

if (reviews) {
  let slideIndex = 1;

  function plusSlide() {
    showSlides(slideIndex += 1);
  }

  setInterval(plusSlide, 11000);

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
      slides[i].classList.remove('reviews__item--current');
    }

    slides[slideIndex - 1].classList.add('reviews__item--current');
  }

  let comments;

  const list = reviews.querySelector('.reviews__list');

  const renderListItem = ({ body, name, email }) => {
    return `
  <li class="reviews__item">
    <blockquote class="reviews__content">
      <p class="reviews__description description">
        ${body}
      </p>
      <cite class="reviews__author">
        <span class="reviews__author-name">${name}</span>
        <span class="reviews__author-contact">${email}</span>
      </cite>
    </blockquote>
  </li>
  `;
  };

  const renderList = (comments) => {
    let randomNum = Math.random() * 490;
    let viewComments = comments.slice(randomNum, randomNum + 10);
    viewComments.forEach(comment => {
      list.insertAdjacentHTML(
        'beforeend',
        renderListItem(comment)
      )
    });
  }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
  xhr.onload = function () {
    comments = JSON.parse(xhr.responseText);
    renderList(comments);
    showSlides(slideIndex);
  };
  xhr.send();

}
