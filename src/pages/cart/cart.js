require(["../../static/conf/config.js"], function () {
    require(["jquery", "template"], function ($,template) {
     console.log($);
//更改登录用户名
var sessionstorage = window.sessionStorage;
var currentUser = sessionstorage.key(0);
$(".currentUser").html("尊敬的 "+currentUser+" 欢迎您！！！");



 //加入购物车
   var localstorage = window.localStorage;
   //console.log(localstorage.length);
   for(var i=0;i<localstorage.length; i++) {
       
    
       if(localstorage.key(i)==('buy'+sessionstorage.key(0))){
        console.log("ok");
        var data = JSON.parse(localstorage.getItem(localstorage.key(i)));
           console.log(data.goodtitle);
       let tempstr = template("goodsMsg_template", { list: data });
      //    //利用模板添加商品信息 每匹配一个商品 加一个td
          $(".lctab")[0].innerHTML += tempstr;
      }
   }

    })
  })
  
  
  
  