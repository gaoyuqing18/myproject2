//模块化  方便引入多个js文件  不必考虑引入顺序

require(["../../static/conf/config.js"], function () {

    //找配置文件  使用插件 
    require(["jquery"], function ($) {
    console.log($);
     
    })
  })
  
  
  
  