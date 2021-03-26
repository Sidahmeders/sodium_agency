export default (() => {
  const btnOpenNav = document.querySelector('.btn-open-nav');
  const btnCloseNav = document.querySelector('.btn-close-nav');
  const nav = document.querySelector('header nav');

  const navToggle = function() {
    nav.classList.remove('sticky-nav');
    nav.classList.add('nav-toggle');
    btnOpenNav.classList.add('hide-btn');
  };

  const closeNav = function() {
    nav.classList.remove('nav-toggle');
    btnOpenNav.classList.remove('hide-btn');
  };

  btnOpenNav.addEventListener('click', navToggle);
  btnCloseNav.addEventListener('click', closeNav);
  nav.addEventListener('click', closeNav);
  window.addEventListener('scroll', closeNav);
  window.addEventListener('resize', closeNav);
})();
