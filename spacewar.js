var canvascontext;

var init = function() {
  var canvas = $('#game');
  try {
    canvascontext = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
}

$(document).ready(function(){
  init();
})
