$(document).ready(function() {
  $("body").fadeIn(500);

$("a.transition").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(500, redirectPage);
});

function redirectPage() {
  window.location = linkLocation;
}
});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  });
});


$(document).ready(function(){
  $('.portfolio__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev" onclick="myfunction()"></button>',
    nextArrow: '<button type="button" class="slick-next" onclick="myfunction()"></button>',
    focusOnSelect: true,
    variableWidth: true,
    adaptiveHeight: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
});

let i = 2;

function myfunction(){
  let elem = document.getElementsByClassName('reviews__item');
  console.log(elem.length);
  for(let j = 0; j<3; j++) {
    i++;
    if(i >= elem.length){
      document.getElementById("reviews__btn").classList.add("reviews__btn__none")
      break;
    }
    elem[i].classList.add("reviews__item__show");
  }
};