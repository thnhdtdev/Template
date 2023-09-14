
      $(document).ready(function(){
          $('.items__carousel').owlCarousel({
              loop: false,
              margin: 0,
              // items: 3,
              dots: false,
              nav: true,
              navElement: 'button type="button" aria-label="Nav"',
              navText: ['<i class="fa fa-step-backward" aria-hidden="true"></i>','<i class="fa fa-step-forward" aria-hidden="true"></i>'],
              smartSpeed: 1200,
              autoHeight: false,
              autoplay: false,
              mouseDrag: false,
              startPosition: 0,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },  
                  600:{
                      items:3,
                      nav:true
                  },
                  1000:{
                      items:3,
                      nav:true,
                      loop:false
                  }
              }
          });
          $(".canvas__open").on('click', function () {
                $(".offcanvas-menu-wrapper").addClass("active");
                $(".offcanvas-menu-overlay").addClass("active");
          });

          $(".offcanvas-menu-overlay, .offcanvas__close").on('click', function () {
                $(".offcanvas-menu-wrapper").removeClass("active");
                $(".offcanvas-menu-overlay").removeClass("active");
          });
      });
      // When the user scrolls the page, execute myFunction
      window.onscroll = function() {myFunction()};

      // Get the header
      var header = document.getElementById("header");

      // Get the offset position of the navbar
      var sticky = header.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if ($(this).scrollTop()>750) {
          header.classList.add("navbar-sticky");
        } else {
          header.classList.remove("navbar-sticky");
        }
      }