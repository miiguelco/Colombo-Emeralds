const renderer = new THREE.WebGLRenderer({
  antialias: true
})
renderer.setSize(400, 400) // sets the renderer size to window size
renderer.setPixelRatio(window.devicePixelRatio) // sets the pixel whatever the device is
renderer.setClearColor(0x000000) // renderer color

// ADD RENDERER TO ELEMENT
const sectionTag = document.querySelector(".head-container")
sectionTag.appendChild(renderer.domElement)

// ADD SCENE
const scene = new THREE.Scene()


// ADD CAMERA
const camera = new THREE.PerspectiveCamera(40, 400 / 400, 0.1, 10000)
camera.position.z = -70 // changes the position of the camera in the Z axis
camera.position.x = 20

// ADD LIGHTS
const ambientLight = new THREE.AmbientLight(0x38AAF7)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xb19748, 0.6) // light like sun direction
directionalLight.position.set(50, 100, -100) // by default the direction is from the top, in here we are changing the angle
scene.add(directionalLight)


// ADD OBJECT LOADER AND MTL LOADER
const objLoader = new THREE.OBJLoader()

let head = null // this varible is null, because we haven't load the object yet

// In here we are adding a Load method to the file where we can pass more info. It's like adding an event listener ---> Load eath.mtl and then do this
  objLoader.load("data/male_head.obj", function(obj) { // Loads the obj and adds it to the scene
    head = obj
    scene.add(obj)
  })

// ADD ANIMATION
const animate = function () {
  if (head) { // if head is not null rotate
    head.rotateY(0.01)
  }
  camera.lookAt(scene.position) // tells the camera to focus on scene position
  renderer.render(scene, camera) // What we want to do in this loop? we want to render the scene and the camera
  requestAnimationFrame(animate) // loops the function animate

}

animate() // strats the function


// ADD RESIZE EVENT
window.addEventListener ("resize", function () {
  camera.aspect = 400 / 400
  camera.updateProjectionMatrix() // tells the camera to re-focus on certain things

  renderer.setSize(400, 400)
})
