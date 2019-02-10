window.addEventListener('load', function() {
  const burger = document.getElementById('burger-menu')
  const burgerClose = document.getElementById('burger-menu-close')
  const menuMobile = document.getElementById('header-mobile-menu')
  const links = document.querySelectorAll('.header-mobile-menu a')

  burger.addEventListener('click', function() {
    menuMobile.classList.add('opened')
  })

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      menuMobile.classList.remove('opened')
    })
  }

  AOS.init();

  const choosePrice = document.querySelectorAll('.payment-item')
  const price = document.getElementById('price')
  const payment = document.getElementById('payment-info')
  for(let i = 0; i < choosePrice.length; i++) {
    choosePrice[i].addEventListener('click', function() {
      let currentPrice = this.getAttribute('data-price')
      price.innerText = currentPrice
      payment.innerText = this.innerText
    })
  }

  const mySiema = new Siema({
    selector: '.carousel',
    duration: 400,
    loop: true,
    onInit: printSlideIndex,
    onChange: printSlideIndex,
  })

  setInterval(() => mySiema.next(), 10000)

  function printSlideIndex() {
    totalSlides = this.innerElements.length
    document.querySelector('.review-counter').innerHTML = (this.currentSlide + 1) + " / " + totalSlides

  }

  document.querySelector('.arrow-prev').addEventListener('click', () => mySiema.prev())
  document.querySelector('.arrow-next').addEventListener('click', () => mySiema.next())
});

$(document).ready(function() {
  $(".header-link").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 20}, 800);
      return false;
  });
});
