require(["../../static/conf/config.js"], function () {
    require(["jquery"], function ($) {
     console.log($);
 
     $("#loginName").on('focus', function() {
        $("#warnMsgLog").html("");
     })
//登录验证 
 $("#loginBtn").on('click', function(){
   
      var storage=window.localStorage;
      var phone= document.login.loginName.value;
     var userPassword= document.login.loginPassword.value;
   
      var flag = false;
        for(let i=0; i<storage.length; i++) {
            var userName = localStorage.key(i);
           if(userName==phone&&localStorage.getItem(userName)==userPassword){
               
               flag = true;
               $("#warnMsgLog").html("登录成功");
               window.location.href='../home/home.html';
           }
        }
        if(!flag) {
            $("#warnMsgLog").html("用户名不存在或密码不正确！！");
             
        }
       
    

    })
  })   
})
