
var canvascontext;

var init = function() {
  var canvas = $('#game');
  try {
    canvascontext = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
}
var daeloader;
var scene;
var camera;
var renderer;

var setup = function() {
  daeloader = new THREE.ColladaLoader();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  camera.position.z = 10;
  daeloader.load('http://superdoggy.github.io/3D-Space-War/Spaceship3.dae', function(collada){
    scene.add(collada.scene); //So... does this add the model itself to the scene? I'm assuming collada is the model. Hmm.
    render();
  })
  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 2, 0, 10 );
  scene.add( light );
}
var render = function () {
  requestAnimationFrame( render );

  renderer.render(scene, camera);
};
var planet = function(size, position) {
  this.size = size || 100;
  this.position = position || {x:0, y:0, z:0};
}
var powerup = function(power, position) {
  this.power = power || "nothing"
  this.position = position || {x:0, y:0, z:0};
}




window.addEventListener("load", function(){
    setup();
    init();
})
