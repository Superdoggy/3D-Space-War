var canvascontext;

var init = function() {
  var canvas = $('#game');
  try {
    canvascontext = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
}
var daeloader = new THREE.ColladaLoader();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

var setup = function() {
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
setup();

$(document).ready(function(){
  init();
})
