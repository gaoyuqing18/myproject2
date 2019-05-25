require(["../../static/conf/config.js"], function () {
    require(["jquery"], function ($) {
     console.log($);
//验证手机号  
    $("#telephone").on('blur',function(){
        var mobile = $("#telephone").val();
        if (mobile.length ==0)
        {
            $("#warnMsgReg").html("手机号码不能为空");
            return false;
        }
        else if (mobile.length != 11)
        {
            $("#warnMsgReg").html("请输入11位有效的手机号码");
            return false;
        }
        else{
          $("#warnMsgReg").html("");
            return true;
        }
    })
//验证密码
  $("#password").on('blur', function() {
   // console.log( $("#password").val());
      //var password = $.trim(("#password").val());
      var password = $("#password").val();
      console.log(password);
      var patrn = /^(\w){8,20}$/;
      if(password==''){
        $("#warnMsgReg").html("密码不能包含空格组成");
        //return false;
      }

      if(!patrn.exec(password)) { //用exec检验正则表达式 密码满足正则会返回true
        $("#warnMsgReg").html("密码必须为8-20个字母、数字、下划线组成");
        //return false;
      }else {
        $("#warnMsgReg").html("");
        //return true;
      }
  })

  //确认密码
  $("#re_password").on('blur', function(){
   
     var re_password = $("#re_password").val(); 
   if ($("#password").val() != re_password) {
        $("#warnMsgReg").html("两次密码输入不一致!");
        //return false;
    } else {
    	$("#warnMsgReg").html("");
        //return true;
    }
  })

//点击注册
   $("#submitBtn").on('click', function(){
     console.log("ok"); 
       var storage=window.localStorage;
      var phone= document.register.mobile.value;
      var userPassword= document.register.loginPassWord.value;

      let flag = true;

      for(let i=0; i<storage.length; i++) {
        var userName = localStorage.key(i);
       if(userName==phone){
        $("#warnMsgReg").html("该手机号已注册！请登录或换手机号注册！！");
             flag = false;
             break;
       }
    }
        if(flag) {
        storage.setItem(phone,userPassword);
          $("#warnMsgReg").html("注册成功！！");
          window.location.href='../login/login.html';
        }

    // var data = {
    //   phone: document.register.mobile.value,
    //   userPassword: document.register.loginPassWord.value,
    // }
    //  console.log(data);
    //        var d=JSON.stringify(data);
    //        console.log(d);
    //         //将JSON字符串转换成为JSON对象输出
    //         var json=storage.getItem("data");
    //         var jsonObj=JSON.parse(json);
    //         console.log(typeof jsonObj);

    })
  })   
})
