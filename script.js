$(document).ready(function () {
  $('.a-enter-vr').append(
    '<button class="button-togle-animation">animation</button><input id="size-vr" type="range" min="0" max="100" value="0"></input>'
  );
  $('.a-enter-ar').append(
    '<button class="button-togle-animation">animation</button><input id="size-ar" type="range" min="0" max="100" value="0"></input>'
  );
  
  var model = $('a-entity')[0];
  var canvas = $('.a-canvas');

  var animate = true;
  
  $('.button-togle-animation').click(function () {
    animate = !animate;
    animate == true ? model.play() : model.pause();
  });

  var size = 0.25;

  function changeSize(element) {
    var tempSize = $(element).val();
    var resize = size + tempSize / 400;
    model.setAttribute('scale', { x: resize, y: resize, z: resize });
  }

  $('#size-ar').change(() => changeSize('#size-ar'));
  $('#size-vr').change(() => changeSize('#size-vr'));

  var startX = null;

  function handleTouchStart(evt) {
    startX = evt.touches[0].pageX;
  }

  function handleTouchMove(evt) {
    if (!startX) return;
    
    var moveX = evt.touches[0].pageX;
    var scroll = startX - moveX;

    model.setAttribute('rotation', { x: 0, y: scroll, z: 0 });
  }

  document
    .querySelector('.a-canvas')
    .addEventListener('touchstart', (evt) => handleTouchStart(evt));
  document
    .querySelector('.a-canvas')
    .addEventListener('touchmove', (evt) => handleTouchMove(evt));

  var mouseDown = false;

  function startDragging(evt) {
    mouseDown = true;
    startX = evt.pageX;
  }

  function stopDragging(evt) {
    mouseDown = false;
  }

  canvas.on('mousemove', (evt) => {
    evt.preventDefault();

    if (!mouseDown) return;

    var moveX = evt.pageX;
    var scroll = startX - moveX;

    model.setAttribute('rotation', { x: 0, y: scroll, z: 0 });
  });

  canvas.mousedown((evt) => startDragging(evt));
  canvas.mouseup((evt) => stopDragging(evt));
  canvas.mouseleave((evt) => stopDragging(evt));
});