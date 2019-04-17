$(function(){
    var t=$("progress"),n=0,c=0;
    $("#begin").click(function(){
      0===n&&(n=window.setInterval(function(){
              t.attr("value",c++)
      },500))
    }),
        $("#pause").click(function(){window.clearInterval(n),n=0}),
  $("#reset").click(function(){t.attr("value",c=0)})

});
