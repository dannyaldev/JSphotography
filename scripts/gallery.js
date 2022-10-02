const imageCarousel = document.getElementById('imageCarousel');
const toggleWedding = document.getElementById('ringIcon');
const toggleLandscape = document.getElementById('treeIcon');
const loadMoreBtn = document.getElementById('loadMore');
const filter = document.getElementsByClassName('menu-icon');

//url string

const weddingImages = 'wedding';
const landscapeImages = 'landscape';

//default filter
let type = weddingImages;

const icons = Array.from(filter);
let imageIndexes = [0, 1, 2, 3, 4, 5];

//tracks current location of next/load more btn
let track = 0;
//load default gallery

let allImages = true;
let url = 'assets/images/photography/';

let i = 1; //  set your counter to 1
//timed loop to automatically cycle through images at random

myLoop();
setWedding();

function myLoop() {
  setTimeout(function () {
    j = Math.floor(Math.random() * 15);
    r = Math.floor(Math.random() * 2 + 1);

    if (allImages && r % 2) {
      carouselImages = `${url}${weddingImages}`;
    } else if (allImages) {
      carouselImages = `${url}${landscapeImages}`;
    }

    imageCarousel.src = `${carouselImages}${j}.jpg`;
    i++;

    if (i <= 14) {
      myLoop();
    }

    if (i == 14) {
      i = 1;
    }
  }, 2000);
}

function setWedding() {
  carouselImages = `${url}${weddingImages}`;
  allImages = false;
  imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/assets/images/photography/${weddingImages}${i}.jpg`;
    gallery.appendChild(image);
    image.classList.add('gallery-img');
  });
}

function setLandscape() {
  carouselImages = `${url}${landscapeImages}`;
  allImages = false;
  imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/assets/images/photography/${landscapeImages}${i}.jpg`;
    gallery.appendChild(image);
    image.classList.add('gallery-img');
  });
}

toggleLandscape.addEventListener('click', () => {
  gallery.querySelectorAll('*').forEach((j) => j.remove());
  imageIndexes = [0, 1, 2, 3, 4, 5];
  type = landscapeImages;
  track = 0;
  setLandscape();
});

toggleWedding.addEventListener('click', () => {
  imageIndexes = [0, 1, 2, 3, 4, 5];
  type = weddingImages;
  gallery.querySelectorAll('*').forEach((j) => j.remove());

  setWedding();
});

icons.forEach((icon) => {
  icon.addEventListener('click', function () {
    icons.forEach((icon) => icon.classList.remove('active'));
    this.classList.add('active');
  });
});

//loads more images to gallery

loadMoreBtn.addEventListener('click', function (e) {
  e.preventDefault();
  gallery.querySelectorAll('*').forEach((j) => j.remove());

  if (type === landscapeImages && track === 0) {
    imageIndexes = [6, 7, 8, 9, 10, 11];
    track = 1;
    setLandscape();
    return;
  }

  if (type === landscapeImages && track === 1) {
    gallery.querySelectorAll('*').forEach((j) => j.remove());
    imageIndexes = [12, 13, 14, 15];
    track = 2;
    setLandscape();
    return;
  }

  if (type === landscapeImages && track === 2) {
    gallery.querySelectorAll('*').forEach((j) => j.remove());
    imageIndexes = [0, 1, 2, 3, 4, 5];
    track = 0;
    setLandscape();
    return;
  }

  if (type === weddingImages && track === 0) {
    imageIndexes = [6, 7, 8, 9, 10, 11];
    track = 1;
    setWedding();
    return;
  }

  if (type === weddingImages && track === 1) {
    gallery.querySelectorAll('*').forEach((j) => j.remove());
    imageIndexes = [12, 13, 14, 15, 16, 17];
    track = 2;
    setWedding();
    return;
  }

  if (type === weddingImages && track === 2) {
    gallery.querySelectorAll('*').forEach((j) => j.remove());
    imageIndexes = [0, 1, 2, 3, 4, 5];
    track = 0;
    setWedding();
    return;
  }
});

//make surrounding images smaller when clicked
