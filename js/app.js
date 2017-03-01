$(document).ready(function(){

  var myGRID = $('#grid-wrap').html();

  var colors = ['green', 'blue', 'red', 'orange', 'purple', 'black'];

  $(".ball").click(function() {
      $(this).css({'background-color': colors[Math.floor(Math.random()*5)]});
  });

  $('.btncheck').on('click', function() {
    console.log(myGRID);
    $('#grid-wrap').append(myGRID);
    
  });
});
