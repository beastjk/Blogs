$(document).ready(function() {

    'use strict';
    // ========================================================================= //
    //  //SMOOTH SCROLL
    // ========================================================================= //
  
    $(document).on("scroll", onScroll);
  
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $(document).off("scroll");
  
      $('a').each(function() {
        $(this).removeClass('active');
        if ($(window).width() < 768) {
          $('.nav-menu').slideUp();
        }
      });
  
      $(this).addClass('active');
  
      var target = this.hash,
          menu = target;
  
      target = $(target);
      $('html, body').stop().animate({
        'scrollTop': target.offset().top - 80
      }, 500, 'swing', function() {
        window.location.hash = target.selector;
        $(document).on("scroll", onScroll);
      });
    });
  
  
    function onScroll(event) {
      if ($('.home').length) {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function() {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
        });
      }
    }
  
    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //
    // document.getElementsByClassName("typed").style.fontSize = "smaller";
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 200 ) {
        $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#  ").removeClass('subpage-nav');
      } else {
        $("#main-nav").slideUp(700);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
      }
    });
  
    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //
  
    $('.responsive').on('click', function(e) {
      $('.nav-menu').slideToggle();
    });
  
    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //
  
    var typed = $(".typed");
  
    $(function() {
      typed.typed({
        strings: ["Jay Patel.", "Gamer.", "Traveller.", "Learner.", "Photographer"],
        typeSpeed: 100,
        loop: true,
      });
    });
    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //
  
    var magnifPopup = function() {
      $('.popup-img').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
        },
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
  
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
  
          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
    };

    // Call the functions
    magnifPopup();
  
  });
  
  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).load(function(){
  
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-thumbnail',
      layoutMode: 'fitRows'
    });
  
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });





    
    var options = {
      bottom: '32px', // default: '32px'
      // slideUp: '-100px',
      right: '32px', // default: '32px'
      left: 'unset', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();

  //   $( ".inner-switch" ).on("click", function() {
  //     if( $( "body" ).hasClass( "dark" )) {
  //       $( "body" ).removeClass( "dark" );
  //       $( ".inner-switch" ).text( "OFF" );
  //     } else {
  //       $( "body" ).addClass( "dark" );
  //       $( ".inner-switch" ).text( "ON" );
  //     }
  // });

  })
  
      