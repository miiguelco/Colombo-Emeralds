// IMAGE SLIDER

//2015
let slides = document.getElementsByClassName('img-container'); // selects all images 2015
let leftSideArrow = document.querySelector('.left-arrow'); // Select left side arrow icon
let rightSideArrow = document.querySelector('.right-arrow'); // Select right side arrow icon
let imageLegend = document.getElementsByClassName('paragraph-container'); // selects all para 2015
let current = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < imageLegend.length; i++) {
    imageLegend[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlide() {
  reset();
  slides[0].style.display = 'block';
  imageLegend[0].style.display = 'block';

}

// Show previous image
function slideLeft() {
  reset();
  slides[current - 1].style.display = 'block';
  imageLegend[current - 1].style.display = 'block';
  current--;
}

// Show next image
function slideRight() {
  reset();
  slides[current + 1].style.display = 'block';
  imageLegend[current + 1].style.display = 'block';
  current++;
}

// Left arrow click event
leftSideArrow.addEventListener('click', function () {
  if (current === 0) {
    current = slides.length;
    current = imageLegend.length;
  }
  slideLeft();
});


// Right arrow click event
rightSideArrow.addEventListener('click', function () {
  if (current === slides.length - 1) {
    current = -1;
  }
  if (current === imageLegend.length - 1) {
    current = -1;
  }
  slideRight();
});

strartSlide();



// 2016
let slidesTwo = document.getElementsByClassName('img-container-2016'); // selects all images 2016
let leftSideArrowTwo = document.querySelector('.left-arrow-2016'); // Select left side arrow icon
let rightSideArrowTwo = document.querySelector('.right-arrow-2016'); // Select right side arrow icon
let imageLegendTwo = document.getElementsByClassName('paragraph-container-2016'); // selects all para 2015
let currentTwo = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function resetTwo() {
  for (let i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = 'none';
  }
  for (let i = 0; i < imageLegendTwo.length; i++) {
    imageLegendTwo[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlideTwo() {
  resetTwo();
  slidesTwo[0].style.display = 'block';
  imageLegendTwo[0].style.display = 'block';

}

// Show previous image
function slideLeftTwo() {
  resetTwo();
  slidesTwo[currentTwo - 1].style.display = 'block';
  imageLegendTwo[currentTwo - 1].style.display = 'block';
  currentTwo--;
}

// Show next image
function slideRightTwo() {
  resetTwo();
  slidesTwo[currentTwo + 1].style.display = 'block';
  imageLegendTwo[currentTwo + 1].style.display = 'block';
  currentTwo++;
}

// Left arrow click event
leftSideArrowTwo.addEventListener('click', function () {
  if (currentTwo === 0) {
    currentTwo = slidesTwo.length;
    currentTwo = imageLegendTwo.length;
  }
  slideLeftTwo();
});


// Right arrow click event
rightSideArrowTwo.addEventListener('click', function () {
  if (currentTwo === slidesTwo.length - 1) {
    currentTwo = -1;
  }
  if (currentTwo === imageLegendTwo.length - 1) {
    currentTwo = -1;
  }
  slideRightTwo();
});

strartSlideTwo();
