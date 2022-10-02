const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav');

mobileNavToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.body.classList.toggle('disable-scroll');
});
