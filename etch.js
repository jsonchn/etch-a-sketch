$(document).ready(function(){
  var $app = $('#app');
  var $newGridDiv = $('<div class="new-grid-form"></div>');
  var $newGridForm = $('<form id="new-grid-form" action="/"></form>')
  var $newGridSqInput = $('<label for="sqInput">New Dimensions: </label><input type="text" id="sqInput"/>')
  var $newGridSubmit = $('<button type="submit" href="/">Generate Grid</button>')

  let renderGrid = function(sqPerSide) {
    $('.square').remove();
    const sqWidth = Math.floor(800 / sqPerSide);
    $app.css('grid-template-columns','repeat(' + sqPerSide + ', ' + sqWidth + 'px');
    $app.css('grid-template-rows','repeat(' + sqPerSide + ', ' + sqWidth + 'px');
    for (var i = 0; i < sqPerSide ** 2; i++) {
      $('<div class="square"></div>').appendTo($app);
    }
    $('.square').width(sqWidth - 1);
    $('.square').height(sqWidth - 1);
    applyMouseEnter();
  }

  let applyMouseEnter = function() {
    $('.square').on('mouseenter', function() {
      $(this).css({'background-color': '#F6AE2D'});
    })
  }

  $newGridDiv.insertBefore($app);
  $newGridForm.appendTo($newGridDiv);
  $newGridSqInput.appendTo($newGridForm);
  $newGridSubmit.appendTo($newGridForm);

  renderGrid(16);

  $('#new-grid-form').submit(function(e) {
    if ($('#sqInput').val() <= 0 || $('#sqInput').val() > 100 || isNaN($('#sqInput').val())) {
      $('#sqInput').val('Choose between 0 & 100');
      return false;
    }
    event.preventDefault();
    renderGrid($('#sqInput').val())
  })

})