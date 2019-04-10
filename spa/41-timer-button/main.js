$(function(){
  var n=6;
  var $container = $('.main');
  var DOM = '<input class="timer-button" type="button" value="同意(7s)" disabled />';
  $container.html(DOM);
  var $btnAgree = $container.find('.timer-button');
  $btnAgree.css({
    'font-size':'1.2em',
    'height':'60px',
    'width':'150px'
  })

  //var $timerBtn = $('<input type="button" value="同意(6s)" disabled />');
  //$container.append($timerBtn);
  //var $btnAgree = $('input[type="button"]');
  var timer = window.setInterval(function(){
    n--;
    if(n===0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意('+n+'s)');

    }
  },1000);
  $btnAgree.click(()=>{
    alert('spa-timer-button task')
  })

});
