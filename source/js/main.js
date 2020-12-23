let navMain = document.querySelector('.main-nav');
    let navToggle = document.querySelector('.main-nav__toggle');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      navMain.classList.toggle('main-nav--closed');
    });

let weekButton = document.querySelector('.week-product__button');
let productButton = document.querySelector('.products__button');
let modal = document.querySelector('.modal');

weekButton.addEventListener('click', function() {
  modal.classList.add('modal--show');
});

productButton.addEventListener('click', function() {
  modal.classList.add('modal--show');
});
