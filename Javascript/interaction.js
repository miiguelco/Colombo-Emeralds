const workLink = document.querySelector('.item-1').addEventListener('click', closeScene);
const canvasScene = document.querySelector('canvas');

function closeScene() {
   canvasScene.style.opacity = "0"
   canvasScene.style.transition = "all .4s ease-out .4s";
   canvasScene.style.display = "block";
 }
