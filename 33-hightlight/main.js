$(function(){
  var editor = new Behave({
    textarea: $('.main textarea').get(0),
    replaceTab: true,
    softTabs: true,
    tabSize: 2,
    autoOpen: true,
    overwrite: true,
    autoStrip: true,
    autoIndent: true,
    fence: false
      
  });
  var $btnAddCode = $('input[type="button"]'); 
  var $btnDelCode = $('button[class="del"]');
  $btnAddCode.click(function(){
    var $code = $(''
              + '<div>'
              + '<pre class="javascript">'
              + '</pre>'
              + '<button class="delete">删除</button>'
              + '</div>'), 
        $txt = $('.main textarea');
        
    if($txt.val() !== '') {
      $code.find('pre').html($txt.val());
      hljs.highlightBlock($code.find('pre').get(0));
      $('.main').append($code);
      
    }

   var $del = $code.find('button.delete');

    $del.click(function() {
            $code.remove();
                
    });
    /*$btnDelCode.click(function(){
      $code.remove();
    });*/

  });
  return editor;
  });
