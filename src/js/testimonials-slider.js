export default (() => {
  const slider = document.querySelector('.testimonials-slider .slider');
  const slides = document.querySelectorAll('.testimonials-slider .slide');
  const dotsWrapper = document.querySelector('.testimonials-slider .dots-wrapper');
  const dots = document.querySelectorAll('.testimonials-slider .dot');
  let currentSlide = 0;
  let firstTouchX = null;
  let firstTouchY = null;
  let touchEndX = null;
  let touchEndY = null;
  let diffX = null;
  let diffY = null;

  const changeSlide = function(index) {
    dots[currentSlide].classList.remove('active-dot');
    slides[currentSlide].classList.remove('show-slide');
    slides[currentSlide].classList.add('hide-slide');
    currentSlide = index;
    dots[currentSlide].classList.add('active-dot');
    slides[currentSlide].classList.remove('hidden-slide');
    slides[currentSlide].classList.remove('hide-slide');
    slides[currentSlide].classList.add('show-slide');
  };

  const touchStart = function(e) {
    firstTouchX = Math.floor(e.touches[0].clientX);
    firstTouchY = Math.floor(e.touches[0].clientY);
  };

  const touchMove = function(e) {
    touchEndX = Math.floor(e.touches[0].clientX);
    touchEndY = Math.floor(e.touches[0].clientY);
    diffX = Math.abs(firstTouchX - touchEndX);
    diffY = Math.abs(firstTouchY - touchEndY);
  };

  const touchEnd = function() {
    if(touchEndX < firstTouchX && diffX > diffY) {
      currentSlide + 1 < slides.length ? changeSlide(currentSlide + 1) : changeSlide(0);
    } else if(touchEndX > firstTouchX && diffX > diffY) {
      currentSlide > 0 ? changeSlide(currentSlide - 1) : changeSlide(slides.length - 1);
    }
    diffX = 0;
  };

  slider.addEventListener('touchstart', e => touchStart(e));
  slider.addEventListener('touchmove', e => touchMove(e));
  slider.addEventListener('touchend', () => touchEnd());
  dotsWrapper.addEventListener('click', e => {
    if(e.target && e.target.nodeName === 'BUTTON' && e.target.className === 'dot') {
      const parent = e.target.parentElement;
      const index = [...parent.parentElement.children].indexOf(parent);
      changeSlide(index);
    }
  });
})();
