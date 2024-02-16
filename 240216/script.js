// Slick.js : history-info
$(".history-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// Slick.js : project-photo
$(".project-photo").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  cssEase: "linear",
});

// HEADER
// const trigger = document.querySelector(".trigger");
// const modalGnb = document.querySelector(".modal-gnb");

// trigger.addEventListener("click", function () {
//   this.classList.toggle("active");
//   if (modalGnb.style.display === "none" || modalGnb.style.display === "") {
//     modalGnb.style.display = "block";
//   } else {
//     modalGnb.style.display = "none";
//   }
// });

// header > trigger btn

$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".modal-gnb").toggleClass("active");
});

$(".menu a").click(function () {
  $(".modal-gnb").removeClass("active");
  $(".trigger").removeClass("active");
});

// scrollTo : header > trigger btn

$(".menu a").click(function () {
  $.scrollTo(this.hash || 0, 900);
});

// header scroll event
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});
