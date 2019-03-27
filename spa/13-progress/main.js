$(function(){
  var $progess = $('progess');
  var timer = 0;
  var i = 0;

  $(`#start-button`).click(function(){
    if(timer !==0)
      return;
  timer = window.setInterval(function(){
    $progess.attr('value',i++);
  },100);
  } );

});
