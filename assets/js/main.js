

   
$('.owl-carousel').owlCarousel({
 margin: 20,
 loop:true,
 responsiveClass: true,
 autoplay: true, 
 autoplayTimeout: 3000,
 autoplayHoverPause: true, 
 responsive:{
     0:{
         items:1,
         nav:false
     },
     600:{
         items:3,
         nav:false
     },
     1700:{
         items:4,
         nav:true,
         loop:false
     }
 }
})
$('.owl-carousel.carousel-alt').owlCarousel({
 margin: 20,
 loop: true,
 responsiveClass: true,
 autoplay: true,
 autoplayTimeout: 3000,
 autoplayHoverPause: true,
 responsive: {
     0: {
         items: 1,
         nav: false
     },
     600: {
         items: 3,
         nav: false
     },
     1700: {
         items: 1,
         nav: true,
         loop: false
     }
 }
});

    
           
             var typed = new Typed('#typed-text', {
                 strings: [
                     "DESIGN", 
                     "FABRICATION", 
                     "DECORATION", 
                     "BOOTHS", 
                     "SIGNAGES", 
                     "PHOTOGRAPHY", 
                     "MARKETING"
                 ],
                 typeSpeed: 200,
                 backSpeed: 100,
                 backDelay: 1000, 
                 loop: true 
             });
   

             window.addEventListener("scroll", function() {
                const backToTopButton = document.getElementById("backToTop");
                if (window.scrollY > 300) {
                    backToTopButton.classList.add("show");
                } else {
                    backToTopButton.classList.remove("show");
                }
            });
            