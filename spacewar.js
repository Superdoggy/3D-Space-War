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

  camera.position.z = 5;
  daeloader.load('https://github.com/Superdoggy/3D-Space-War/blob/gh-pages/TestSphere.dae', function(collada){
    scene.add(collada.scene); //So... does this add the model itself to the scene? I'm assuming collada is the model. Hmm.
    render();
  })
}
var render = function () {
  requestAnimationFrame( render );

  renderer.render(scene, camera);
};

window.addEventListener("load", function(){
  setTimeout(function() {
    setup();
    init();
  }, 2000);
});
