export default (() => {
  const headerNav = document.querySelector('header .nav');

  const smoothScroll = function(el) {
    el.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  const scrollTo = function(e) {
    if(e.target && e.target.nodeName === 'A' && !e.target.classList.contains('logo')) {
      e.preventDefault();
      const scrollToEl = document.querySelector(e.target.getAttribute('href'));
      smoothScroll(scrollToEl);
    }
  };

  headerNav.addEventListener('click', e => scrollTo(e));
})();
