const nav = document.querySelector('.header-nav');
const navBtn = document.querySelector('.nav-menu-btn');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (navBtn.name === 'menu-outline') {
    navBtn.name = 'close-outline';
  } else {
    navBtn.name = 'menu-outline';
  }
});
