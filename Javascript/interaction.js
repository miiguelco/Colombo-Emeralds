

// TRANSITIONS BETWEEN WORKS


//2015
const work2015 = document.querySelector('.link-2015').addEventListener('click', showSlider2015);
const work2015Selected = document.querySelector('.link-2015');
const canvasScene = document.querySelector('canvas');
const headCont = document.querySelector('.head-container');
const sliderWork = document.querySelector('.work-slider-2015');

function showSlider2015() {
   canvasScene.style.transition = "all .4s ease-out .4s";
   canvasScene.style.opacity = "0";
   canvasScene.style.visibility = "hidden";

   work2015Selected.style.color = "rgb(250, 145, 145)";
   work2015Selected.style.transition = "all .6s ease-in .5s";

   sliderWork.style.transform = "translateY(-540px)";
   sliderWork.style.opacity = "1";
   sliderWork.style.transition = "all .6s ease-in .5s";
 }

 //2016


 // PLAY AND PAUSE BUTTON

let playButton = document.querySelector('.fa-play').addEventListener('click', playSong);
let pauseButton = document.querySelector('.fa-pause').addEventListener('click', playSong);
let player = document.getElementById('play');
let iconPlay = document.querySelector('.fa-play');
let iconPause = document.querySelector('.fa-pause');
let playToPlause = iconPlay.addEventListener('click', change);
let pauseToPlay = iconPause.addEventListener('click', change);
let artist = document.querySelector('.song-playing');



function playSong() { // plays and pauses the song
    if(player.paused) {
       player.play();
  } else {
    player.pause();
  }
}

function change() { // changes icon from play to pause
   if(iconPlay.style.visibility === "hidden") {
      iconPlay.style.visibility = "visible";
      iconPause.style.visibility = "hidden";
      artist.style.visibility = "hidden";
  } else {
     iconPlay.style.visibility = "hidden";
     iconPause.style.visibility = "visible";
     artist.style.visibility = "visible";

  }
}


// IMAGE SLIDER SECTION

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
