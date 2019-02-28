// IMAGE SLIDERS

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
let imageLegendTwo = document.getElementsByClassName('paragraph-container-2016'); // selects all for 2017
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





// 2017
let slidesThree = document.getElementsByClassName('img-container-2017'); // selects all images 2017
let leftSideArrowThree = document.querySelector('.left-arrow-2017'); // Select left side arrow icon
let rightSideArrowThree = document.querySelector('.right-arrow-2017'); // Select right side arrow icon
let imageLegendThree = document.getElementsByClassName('paragraph-container-2017'); // selects all for 2017
let currentThree = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function resetThree() {
  for (let i = 0; i < slidesThree.length; i++) {
    slidesThree[i].style.display = 'none';
  }
  for (let i = 0; i < imageLegendThree.length; i++) {
    imageLegendThree[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlideThree() {
  resetThree();
  slidesThree[0].style.display = 'block';
  imageLegendThree[0].style.display = 'block';
}

// Show previous image
function slideLeftThree() {
  resetThree();
  slidesThree[currentThree - 1].style.display = 'block';
  imageLegendThree[currentThree - 1].style.display = 'block';
  currentThree--;
}

// Show next image
function slideRightThree() {
  resetThree();
  slidesThree[currentThree + 1].style.display = 'block';
  imageLegendThree[currentThree + 1].style.display = 'block';
  currentThree++;
}

// Left arrow click event
leftSideArrowThree.addEventListener('click', function () {
  if (currentThree === 0) {
    currentThree = slidesThree.length;
    currentThree = imageLegendThree.length;
  }
  slideLeftThree();
});


// Right arrow click event
rightSideArrowThree.addEventListener('click', function () {
  if (currentThree === slidesThree.length - 1) {
    currentThree = -1;
  }
  if (currentThree === imageLegendThree.length - 1) {
    currentThree = -1;
  }
  slideRightThree();
});

strartSlideThree();

// CLIENT SLIDER

let slidesFour = document.getElementsByClassName('img-container-clients'); // selects all images clients
let leftSideArrowFour = document.querySelector('.left-arrow-clients'); // Select left side arrow icon
let rightSideArrowFour = document.querySelector('.right-arrow-clients'); // Select right side arrow icon
let imageLegendFour = document.getElementsByClassName('paragraph-container-clients'); // selects all for clients
let currentFour = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function resetFour() {
  for (let i = 0; i < slidesFour.length; i++) {
    slidesFour[i].style.display = 'none';
  }
  for (let i = 0; i < imageLegendFour.length; i++) {
    imageLegendFour[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlideFour() {
  resetFour();
  slidesFour[0].style.display = 'block';
  imageLegendFour[0].style.display = 'block';
}

// Show previous image
function slideLeftFour() {
  resetFour();
  slidesFour[currentFour - 1].style.display = 'block';
  imageLegendFour[currentFour - 1].style.display = 'block';
  currentFour--;
}

// Show next image
function slideRightFour() {
  resetFour();
  slidesFour[currentFour + 1].style.display = 'block';
  imageLegendFour[currentFour + 1].style.display = 'block';
  currentFour++;
}

// Left arrow click event
leftSideArrowFour.addEventListener('click', function () {
  if (currentFour === 0) {
    currentFour = slidesFour.length;
    currentFour = imageLegendFour.length;
  }
  slideLeftFour();
});


// Right arrow click event
rightSideArrowFour.addEventListener('click', function () {
  if (currentFour === slidesFour.length - 1) {
    currentFour = -1;
  }
  if (currentFour === imageLegendFour.length - 1) {
    currentFour = -1;
  }
  slideRightFour();
});

strartSlideFour();

// ACID ART SLIDER

let slidesFive = document.getElementsByClassName('img-container-acid'); // selects all images acid
let leftSideArrowFive = document.querySelector('.left-arrow-acid'); // Select left side arrow icon
let rightSideArrowFive = document.querySelector('.right-arrow-acid'); // Select right side arrow icon
let imageLegendFive = document.getElementsByClassName('paragraph-container-acid'); // selects all for acid
let currentFive = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function resetFive() {
  for (let i = 0; i < slidesFive.length; i++) {
    slidesFive[i].style.display = 'none';
  }
  for (let i = 0; i < imageLegendFive.length; i++) {
    imageLegendFive[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlideFive() {
  resetFive();
  slidesFive[0].style.display = 'block';
  imageLegendFive[0].style.display = 'block';
}

// Show previous image
function slideLeftFive() {
  resetFive();
  slidesFive[currentFive - 1].style.display = 'block';
  imageLegendFive[currentFive - 1].style.display = 'block';
  currentFive--;
}

// Show next image
function slideRightFive() {
  resetFive();
  slidesFive[currentFive + 1].style.display = 'block';
  imageLegendFive[currentFive + 1].style.display = 'block';
  currentFive++;
}

// Left arrow click event
leftSideArrowFive.addEventListener('click', function () {
  if (currentFive === 0) {
    currentFive = slidesFive.length;
    currentFive = imageLegendFive.length;
  }
  slideLeftFive();
});


// Right arrow click event
rightSideArrowFive.addEventListener('click', function () {
  if (currentFive === slidesFive.length - 1) {
    currentFive = -1;
  }
  if (currentFive === imageLegendFive.length - 1) {
    currentFive = -1;
  }
  slideRightFive();
});

strartSlideFive();


// PORTRAITS SLIDER

let slidesSix = document.getElementsByClassName('img-container-portraits'); // selects all images portraits
let leftSideArrowSix = document.querySelector('.left-arrow-portraits'); // Select left side arrow icon
let rightSideArrowSix = document.querySelector('.right-arrow-portraits'); // Select right side arrow icon
let imageLegendSix = document.getElementsByClassName('paragraph-container-portraits'); // selects all for portraits
let currentSix = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function resetSix() {
  for (let i = 0; i < slidesSix.length; i++) {
    slidesSix[i].style.display = 'none';
  }
  for (let i = 0; i < imageLegendSix.length; i++) {
    imageLegendSix[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlideSix() {
  resetSix();
  slidesSix[0].style.display = 'block';
  imageLegendSix[0].style.display = 'block';
}

// Show previous image
function slideLeftSix() {
  resetSix();
  slidesSix[currentSix - 1].style.display = 'block';
  imageLegendSix[currentSix - 1].style.display = 'block';
  currentSix--;
}

// Show next image
function slideRightSix() {
  resetSix();
  slidesSix[currentSix + 1].style.display = 'block';
  imageLegendSix[currentSix + 1].style.display = 'block';
  currentSix++;
}

// Left arrow click event
leftSideArrowSix.addEventListener('click', function () {
  if (currentSix === 0) {
    currentSix = slidesSix.length;
    currentSix = imageLegendSix.length;
  }
  slideLeftSix();
});


// Right arrow click event
rightSideArrowSix.addEventListener('click', function () {
  if (currentSix === slidesSix.length - 1) {
    currentSix = -1;
  }
  if (currentSix === imageLegendSix.length - 1) {
    currentSix = -1;
  }
  slideRightSix();
});

strartSlideSix();
