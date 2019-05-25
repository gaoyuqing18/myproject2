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
    //    for(var i=localStorage.length - 1 ; i >=0; i--){  
    //     console.log("log:"+localStorage.key(i));  
    //       console.log('第'+ (i+1) +'条数据的键值为：' + localStorage.key(i) +'，数据为：' + localStorage.getItem(localStorage.key(i)));  
    //        }  
   
      
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
