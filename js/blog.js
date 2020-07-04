var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 500,
      diableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });