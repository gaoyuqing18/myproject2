"use strict";require(["../../static/conf/config.js"],function(){require(["jquery","template"],function(e,o){console.log(e);var t=window.sessionStorage,r=t.key(0);e(".currentUser").html("尊敬的 "+r+" 欢迎您！！！");for(var n=window.localStorage,l=0;l<n.length;l++)if(n.key(l)=="buy"+t.key(0)){console.log("ok");var s=JSON.parse(n.getItem(n.key(l)));console.log(s.goodtitle);var i=o("goodsMsg_template",{list:s});e(".lctab")[0].innerHTML+=i}})});