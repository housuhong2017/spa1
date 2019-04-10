$(function(){
/*  var xData = [],
      yData = [];
for(var i = 0; i<= 1; i+=0.1){
  xData.push(roundFractional(i, 1));
  yData.push(roundFractional(h(i), 2));
}*/

var myChart = echarts.init($('.main').get(0));
var option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data:['销量']
  },
  xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
        
};
myChart.setOption(option);
});
