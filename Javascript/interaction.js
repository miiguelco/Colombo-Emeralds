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
