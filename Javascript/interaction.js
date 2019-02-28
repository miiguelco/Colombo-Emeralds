

// TRANSITIONS BETWEEN WORKS .............................................

// Heading colombo

const heading = document.querySelector('.heading').addEventListener('click', showCanvas);

function showCanvas() {

  canvasScene.style.transition = "all .9s ease-out .8s";
  canvasScene.style.opacity = "1";
  canvasScene.style.visibility = "visible";

  work2015Selected.style.color = "rgb(249, 245, 229)";
  work2015Selected.style.transition = "all .6s ease-in .5s";
  work2016Selected.style.color = "rgb(249, 245, 229)";
  work2016Selected.style.transition = "all .6s ease-in .5s";
  work2017Selected.style.color = "rgb(249, 245, 229)";
  work2017Selected.style.transition = "all .6s ease-in .5s";
  workClientsSelected.style.color = "rgb(249, 245, 229)";
  workClientsSelected.style.transition = "all .6s ease-in .5s";
  workAcidSelected.style.color = "rgb(249, 245, 229)";
  workAcidSelected.style.transition = "all .6s ease-in .5s";

  sliderWork2015.style.opacity = "0";
  sliderWork2015.style.transition = "all .3s ease-in .4s";
  sliderWork2016.style.opacity = "0";
  sliderWork2016.style.transition = "opacity .3s ease-out .4s";
  sliderWork2017.style.opacity = "0";
  sliderWork2017.style.transition = "opacity .3s ease-out .4s";
  sliderWorkClients.style.opacity = "0";
  sliderWorkClients.style.transition = "opacity .4s ease-out .4s";
  sliderAcidWork.style.opacity = "0";
  sliderAcidWork.style.transition = "opacity .4s ease-out .4s";

  arrowsWrapper.style.visibility = "hidden";
  arrowsWrapperTwo.style.visibility = "hidden";
  arrowsWrapperThree.style.visibility = "hidden";
  arrowsWrapperFour.style.visibility = "hidden";
  arrowsWrapperFive.style.visibility = "hidden";

}

//2015
const work2015 = document.querySelector('.link-2015').addEventListener('click', showSlider2015);
const work2015Selected = document.querySelector('.link-2015');
const canvasScene = document.querySelector('canvas');
const headCont = document.querySelector('.head-container');
const sliderWork2015 = document.querySelector('.work-slider-2015');
const arrowsWrapper = document.querySelector('.legend-arrows-wrapper');

function showSlider2015() {
   canvasScene.style.transition = "all .3s ease-out .3s";
   canvasScene.style.opacity = "0";
   canvasScene.style.visibility = "hidden";

   work2015Selected.style.color = "rgb(250, 145, 145)";
   work2015Selected.style.transition = "all .6s ease-in .5s";
   work2016Selected.style.color = "rgb(249, 245, 229)";
   work2016Selected.style.transition = "all .6s ease-in .5s";
   work2017Selected.style.color = "rgb(249, 245, 229)";
   work2017Selected.style.transition = "all .6s ease-in .5s";
   workClientsSelected.style.color = "rgb(249, 245, 229)";
   workClientsSelected.style.transition = "all .6s ease-in .5s";
   workAcidSelected.style.color = "rgb(249, 245, 229)";
   workAcidSelected.style.transition = "all .6s ease-in .5s";

   sliderWork2015.style.transform = "translateY(-540px)";
   sliderWork2015.style.opacity = "1";

   sliderWork2015.style.transition = "all .6s ease-in .5s";
   sliderWork2016.style.opacity = "0";
   sliderWork2016.style.transition = "opacity .4s ease-out .4s";
   sliderWork2017.style.opacity = "0";
   sliderWork2017.style.transition = "opacity .4s ease-out .4s";
   sliderWorkClients.style.opacity = "0";
   sliderWorkClients.style.transition = "opacity .4s ease-out .4s";
   sliderAcidWork.style.opacity = "0";
   sliderAcidWork.style.transition = "opacity .4s ease-out .4s";

   arrowsWrapper.style.visibility = "visible";
   arrowsWrapperTwo.style.visibility = "hidden";
   arrowsWrapperThree.style.visibility = "hidden";
   arrowsWrapperFour.style.visibility = "hidden";
   arrowsWrapperFive.style.visibility = "hidden";
 }


 //2016
 const work2016 = document.querySelector('.link-2016').addEventListener('click', showSlider2016);
 const work2016Selected = document.querySelector('.link-2016');
 const sliderWork2016 = document.querySelector('.work-slider-2016');
 const arrowsWrapperTwo = document.querySelector('.legend-arrows-wrapper-2016');

 function showSlider2016() {
    canvasScene.style.transition = "all .3s ease-out .3s";
    canvasScene.style.opacity = "0";
    canvasScene.style.visibility = "hidden";

    work2015Selected.style.color = "rgb(249, 245, 229)";
    work2015Selected.style.transition = "all .6s ease-in .5s";
    work2016Selected.style.color = "rgb(250, 145, 145)";
    work2016Selected.style.transition = "all .6s ease-in .5s";
    work2017Selected.style.color = "rgb(249, 245, 229)";
    work2017Selected.style.transition = "all .6s ease-in .5s";
    workClientsSelected.style.color = "rgb(249, 245, 229)";
    workClientsSelected.style.transition = "all .6s ease-in .5s";
    workAcidSelected.style.color = "rgb(249, 245, 229)";
    workAcidSelected.style.transition = "all .6s ease-in .5s";

    sliderWork2015.style.opacity = "0";
    sliderWork2015.style.transition = "opacity .4s ease-out .4s";
    sliderWork2016.style.transform = "translateY(-540px)";
    sliderWork2016.style.opacity = "1";
    sliderWork2016.style.transition = "all .6s ease-in .5s";
    sliderWork2017.style.opacity = "0";
    sliderWork2017.style.transition = "opacity .4s ease-out .4s";
    sliderWorkClients.style.opacity = "0";
    sliderWorkClients.style.transition = "opacity .4s ease-out .4s";
    sliderAcidWork.style.opacity = "0";
    sliderAcidWork.style.transition = "opacity .4s ease-out .4s";

    arrowsWrapper.style.visibility = "hidden";
    arrowsWrapperTwo.style.visibility = "visible";
    arrowsWrapperThree.style.visibility = "hidden";
    arrowsWrapperFour.style.visibility = "hidden";
    arrowsWrapperFive.style.visibility = "hidden";
  }

  //2017
  const work2017 = document.querySelector('.link-2017').addEventListener('click', showSlider2017);
  const work2017Selected = document.querySelector('.link-2017');
  const sliderWork2017 = document.querySelector('.work-slider-2017');
  const arrowsWrapperThree = document.querySelector('.legend-arrows-wrapper-2017');

  function showSlider2017() {
     canvasScene.style.transition = "all .3s ease-out .3s";
     canvasScene.style.opacity = "0";
     canvasScene.style.visibility = "hidden";

     work2015Selected.style.color = "rgb(249, 245, 229)";
     work2015Selected.style.transition = "all .6s ease-in .5s";
     work2016Selected.style.color = "rgb(249, 245, 229)";
     work2016Selected.style.transition = "all .6s ease-in .5s";
     work2017Selected.style.color = "rgb(250, 145, 145)";
     work2017Selected.style.transition = "all .6s ease-in .5s";
     workClientsSelected.style.color = "rgb(249, 245, 229)";
     workClientsSelected.style.transition = "all .6s ease-in .5s";
     workAcidSelected.style.color = "rgb(249, 245, 229)";
     workAcidSelected.style.transition = "all .6s ease-in .5s";

     sliderWork2017.style.transform = "translateY(-540px)";
     sliderWork2017.style.opacity = "1";
     sliderWork2017.style.transition = "all .6s ease-in .5s";

     sliderWork2015.style.opacity = "0";
     sliderWork2015.style.transition = "opacity .4s ease-out .4s";
     sliderWork2016.style.opacity = "0";
     sliderWork2016.style.transition = "opacity .4s ease-out .4s";
     sliderWorkClients.style.opacity = "0";
     sliderWorkClients.style.transition = "opacity .4s ease-out .4s";
     sliderAcidWork.style.opacity = "0";
     sliderAcidWork.style.transition = "opacity .4s ease-out .4s";

     arrowsWrapper.style.visibility = "hidden";
     arrowsWrapperTwo.style.visibility = "hidden";
     arrowsWrapperThree.style.visibility = "visible";
     arrowsWrapperFour.style.visibility = "hidden";
     arrowsWrapperFive.style.visibility = "hidden";
   }



   // Clients
   const workClients = document.querySelector('.link-clients').addEventListener('click', showSliderClients);
   const workClientsSelected = document.querySelector('.link-clients');
   const sliderWorkClients = document.querySelector('.work-slider-clients');
   const arrowsWrapperFour = document.querySelector('.legend-arrows-wrapper-clients');

   function showSliderClients() {
      canvasScene.style.transition = "all .3s ease-out .3s";
      canvasScene.style.opacity = "0";
      canvasScene.style.visibility = "hidden";

      work2015Selected.style.color = "rgb(249, 245, 229)";
      work2015Selected.style.transition = "all .6s ease-in .5s";
      work2016Selected.style.color = "rgb(249, 245, 229)";
      work2016Selected.style.transition = "all .6s ease-in .5s";
      work2017Selected.style.color = "rgb(249, 245, 229)";
      work2017Selected.style.transition = "all .6s ease-in .5s";
      workClientsSelected.style.color = "rgb(250, 145, 145)";
      workClientsSelected.style.transition = "all .6s ease-in .5s";
      workAcidSelected.style.color = "rgb(249, 245, 229)";
      workAcidSelected.style.transition = "all .6s ease-in .5s";

      sliderWorkClients.style.transform = "translateY(-540px)";
      sliderWorkClients.style.opacity = "1";
      sliderWorkClients.style.transition = "all .6s ease-in .5s";

      sliderWork2015.style.opacity = "0";
      sliderWork2015.style.transition = "opacity .4s ease-out .4s";
      sliderWork2016.style.opacity = "0";
      sliderWork2016.style.transition = "opacity .4s ease-out .4s";
      sliderWork2017.style.opacity = "0";
      sliderWork2017.style.transition = "opacity .4s ease-out .4s";
      sliderAcidWork.style.opacity = "0";
      sliderAcidWork.style.transition = "opacity .4s ease-out .4s";

      arrowsWrapper.style.visibility = "hidden";
      arrowsWrapperTwo.style.visibility = "hidden";
      arrowsWrapperThree.style.visibility = "hidden";
      arrowsWrapperFour.style.visibility = "visible";
      arrowsWrapperFive.style.visibility = "hidden";
    }


   // Acid
   const workAcid = document.querySelector('.link-acid').addEventListener('click', showSliderAcid);
   const workAcidSelected = document.querySelector('.link-acid');
   const sliderAcidWork = document.querySelector('.work-slider-acid');
   const arrowsWrapperFive = document.querySelector('.legend-arrows-wrapper-acid');

   function showSliderAcid() {
      canvasScene.style.transition = "all .3s ease-out .3s";
      canvasScene.style.opacity = "0";
      canvasScene.style.visibility = "hidden";

      work2015Selected.style.color = "rgb(249, 245, 229)";
      work2015Selected.style.transition = "all .6s ease-in .5s";
      work2016Selected.style.color = "rgb(249, 245, 229)";
      work2016Selected.style.transition = "all .6s ease-in .5s";
      work2017Selected.style.color = "rgb(249, 245, 229)";
      work2017Selected.style.transition = "all .6s ease-in .5s";
      workClientsSelected.style.color = "rgb(249, 245, 229)";
      workClientsSelected.style.transition = "all .6s ease-in .5s";
      workAcidSelected.style.color = "rgb(250, 145, 145)";
      workAcidSelected.style.transition = "all .6s ease-in .5s";

      sliderAcidWork.style.transform = "translateY(-540px)";
      sliderAcidWork.style.opacity = "1";
      sliderAcidWork.style.transition = "all .6s ease-in .5s";

      sliderWork2015.style.opacity = "0";
      sliderWork2015.style.transition = "opacity .4s ease-out .4s";
      sliderWork2016.style.opacity = "0";
      sliderWork2016.style.transition = "opacity .4s ease-out .4s";
      sliderWork2017.style.opacity = "0";
      sliderWork2017.style.transition = "opacity .4s ease-out .4s";
      sliderWorkClients.style.opacity = "0";
      sliderWorkClients.style.transition = "opacity .4s ease-out .4s";

      arrowsWrapper.style.visibility = "hidden";
      arrowsWrapperTwo.style.visibility = "hidden";
      arrowsWrapperThree.style.visibility = "hidden";
      arrowsWrapperFour.style.visibility = "hidden";
      arrowsWrapperFive.style.visibility = "visible";
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
