const contactMenu = document.querySelectorAll('.menu-item');
const content = document.getElementById('content');
const aboutMe = document.getElementById('aboutMe');
const services = document.getElementById('services');
const cotnactFrm = document.getElementById('contactFrm');

function hideContent() {
  aboutMe.classList.remove('about-me');
  aboutMe.classList.add('hide');

  services.classList.add('hide');
  cotnactFrm.classList.add('hide');
}

contactMenu.forEach((icon) => {
  icon.addEventListener('click', function (e) {
    e.preventDefault();
    contactMenu.forEach((icon) => icon.classList.remove('active'));
    this.classList.add('active');

    if (this.id === 'profileBtn') {
      hideContent();
      aboutMe.classList.add('about-me');
      aboutMe.classList.remove('hide');
    }

    if (this.id === 'servicesBtn') {
      hideContent();

      services.classList.remove('hide');
    }

    if (this.id === 'contactBtn') {
      hideContent();
      cotnactFrm.classList.remove('hide');
    }
  });
});
