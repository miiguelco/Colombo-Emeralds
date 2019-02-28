

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
