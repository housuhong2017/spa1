$(function(){
  var data = [
   ['张三','男','3'],
   ['李四','女','2'],
   ['王二','男','2']
  ];


    var container = $('.main');
    var hot = new Handsontable(container.get(0),{
        data: data,
          contextMenu: true,          // 启用快捷菜单
          manualRowResize : true,     // 允许行拖动  
          manualColumnResize : true,  // 允许列拖动 
          rowHeaders: true,
          //colHeaders: true
        colHeaders:[
      '姓名',
        '性别',
        '学号'
      ]
  });
  return hot;
  });


