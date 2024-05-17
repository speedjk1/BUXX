document.addEventListener('DOMContentLoaded', function() {
         
    var swiper = new Swiper('.swiper-container', {
        
        direction: 'horizontal', 
        loop: true, 
        autoplay: {
            delay: 10000, 
            disableOnInteraction: false, 
        },
        navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev', 
        },
    });
});


document.addEventListener('DOMContentLoaded', function() {
          
    var swiper = new Swiper('.custom-swiper-container', {
        
        direction: 'horizontal', 
        loop: true,
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false, 
        },
        slidesPerView: 4, 
        spaceBetween: 30, 
        navigation: {
            nextEl: '.custom-swiper-button-next', 
            prevEl: '.custom-swiper-button-prev', 
        },
    });
});
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

function nextSlide() {
  if (counter < carouselItems.length / 4 - 1) {
    carouselSlide.style.transform = `translateX(-${(counter + 1) * 100}%)`;
    counter++;
  }
}

function prevSlide() {
  if (counter > 0) {
    counter--;
    carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
  }
}