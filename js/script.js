$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,            // Number of items per slide
    loop: true,          // Infinite loop
    margin: 10,          // Space between items
    nav:true,           // Show next/prev buttons
    dots: true,          // Show pagination dots
    autoplay: true,      // Enable autoplay
    autoplayTimeout: 3000, // Delay between slides
    responsive: {
      0: { items: 1 },
      768: { items:2 },
      991: { items:3 }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 650,
    once:false
  });
});
