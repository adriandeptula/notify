$(document).ready(function(){
    $('.main-kv-carousel__wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        // fade: true,
        cssEase: 'ease-in-out',
        arrows: false,
        pauseOnHover: true,
    });
});

function reviewsImg() {
    let icon = "";

    for (let i=0; i<20; i++) {
        icon += '<li class="reviews-selection__item"><a href="#"><img src="./images/people/' + i +'.jpg" alt=""></a></li>';
    }

    document.querySelector('.reviews-selection-container').innerHTML = icon;
}

window.addEventListener('load', reviewsImg());


$('.reviews-selection-container').slick({
    slide: 'li',
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 20,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 16,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 14,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    ]
  });