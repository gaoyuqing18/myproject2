require(["../../static/conf/config.js"], function () {
    require(["jquery"], function ($) {
     console.log($);
 
     $("#loginName").on('focus', function() {
        $("#warnMsgLog").html("");
     })
//登录验证 登录信息存储在sessionStorage以便登录页面获取唯一一个登录名
 $("#loginBtn").on('click', function(){
   
      var localstorage=window.localStorage;
      var sessionstorage=window.sessionStorage;
      
      //获取登录框中的登录用户信息
      var phone= document.login.loginName.value;
      var userPassword= document.login.loginPassword.value;

      //将登录用户信息存入session
     sessionstorage.setItem(phone, userPassword);   

      var flag = false;
        for(let i=0; i<localstorage.length; i++) {
            var userName = localStorage.key(i);
           if(userName==phone&&localStorage.getItem(userName)==userPassword){ 
               flag = true;
               $("#warnMsgLog").html("登录成功");
               window.location.href='../home/home.html';
           }
        }
        if(!flag) {  //localStorage中没有注册信息
            $("#warnMsgLog").html("用户名不存在或密码不正确！！");
             
        }
       
    

    })
  })   
})
