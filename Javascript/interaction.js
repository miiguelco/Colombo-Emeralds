

// TRANSITIONS BETWEEN WORKS .............................................

//2015
const work2015 = document.querySelector('.link-2015').addEventListener('click', showSlider2015);
const work2015Selected = document.querySelector('.link-2015');
const canvasScene = document.querySelector('canvas');
const headCont = document.querySelector('.head-container');
const sliderWork2015 = document.querySelector('.work-slider-2015');
const arrowsWrapper = document.querySelector('.legend-arrows-wrapper');

function showSlider2015() {
   canvasScene.style.transition = "all .4s ease-out .4s";
   canvasScene.style.opacity = "0";
   canvasScene.style.visibility = "hidden";

   work2015Selected.style.color = "rgb(250, 145, 145)";
   work2015Selected.style.transition = "all .6s ease-in .5s";
   work2016Selected.style.color = "rgb(249, 245, 229)";
   work2016Selected.style.transition = "all .6s ease-in .5s";

   sliderWork2015.style.transform = "translateY(-540px)";
   sliderWork2015.style.opacity = "1";
   sliderWork2015.style.transition = "all .6s ease-in .5s";
   sliderWork2016.style.opacity = "0";
   sliderWork2016.style.transition = "opacity .3s ease-out .3s";

   arrowsWrapper.style.visibility = "visible";
   arrowsWrapperTwo.style.visibility = "hidden";



 }

 //2016
 const work2016 = document.querySelector('.link-2016').addEventListener('click', showSlider2016);
 const work2016Selected = document.querySelector('.link-2016');
 const sliderWork2016 = document.querySelector('.work-slider-2016');
 const arrowsWrapperTwo = document.querySelector('.legend-arrows-wrapper-2016');

 function showSlider2016() {
    canvasScene.style.transition = "all .4s ease-out .4s";
    canvasScene.style.opacity = "0";
    canvasScene.style.visibility = "hidden";

    work2015Selected.style.color = "rgb(249, 245, 229)";
    work2015Selected.style.transition = "all .6s ease-in .5s";
    work2016Selected.style.color = "rgb(250, 145, 145)";
    work2016Selected.style.transition = "all .6s ease-in .5s";

    sliderWork2016.style.transform = "translateY(-540px)";
    sliderWork2016.style.opacity = "1";
    sliderWork2016.style.transition = "all .6s ease-in .5s";

    sliderWork2015.style.opacity = "0";
    sliderWork2015.style.transition = "opacity .3s ease-out .3s";

    arrowsWrapper.style.visibility = "hidden";
    arrowsWrapperTwo.style.visibility = "visible";
  }


 // PLAY AND PAUSE BUTTON ..........

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
