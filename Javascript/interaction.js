

const workLink = document.querySelector('.item-1').addEventListener('click', closeScene);
const canvasScene = document.querySelector('canvas');
const headCont = document.querySelector('.head-container');
const sliderWork = document.querySelector('.work-slider');

function closeScene() {
   canvasScene.style.transition = "all .4s ease-out .4s";
   canvasScene.style.opacity = "0";
   canvasScene.style.visibility = "hidden";

   sliderWork.style.transform = "translateY(-540px)";
   sliderWork.style.opacity = "1";
   sliderWork.style.transition = "all .6s ease-in .5s";
 }


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
