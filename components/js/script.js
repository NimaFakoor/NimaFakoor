$('.base').clone().addClass('overlay').appendTo('.landing');
$('.cta').hover(function() {
  $('.overlay').toggleClass('over');
});

/*--------------------
Codepen Preview Tile
--------------------*/
setTimeout(function() {
  $('.overlay').addClass('over').delay(600).queue(function() {
    $(this).removeClass("over").dequeue();
  });
}, 400)