$(function(){
  var n=6;
  var $buttonagree = $('input[type="button"]');
  var timer = window.setInterval(()=>{
    n--;
    if(n==0){
      window.clearInterval(timer);
      $buttonagree.removeAttr('disabled');
      $buttonagree.val('同意');
    }else{
      $buttonagree.val('同意('+n+'s)');

    }
  },1000);
  $buttonagree.click(()=>{
    alert('spa-timer-button task')
  })

});
