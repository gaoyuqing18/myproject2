require(["../../static/conf/config.js"], function () {
    require(["jquery", "template"], function ($,template) {
     console.log($);
//更改登录用户名
var sessionstorage = window.sessionStorage;
var currentUser = sessionstorage.key(0);
$(".currentUser").html("尊敬的 "+currentUser+" 欢迎您！！！");

//商品标题
//  var prodContent = $(".lctab"); //商品明细table tr内容块
//  prodContent.empty();
//  var prod_title = $(
//      "<tr class=\"tr1\"><td width=\"426\">商品名称 </td><td width=\"80\">单价</td><td width=\"70\">重量</td><td width=\"103\">数量  </td><td width=\"90\">活动优惠</td><td width=\"100\">商品合计</td><td width=\"120\">操作</td></tr>"
//  );	 
//  prodContent.append(prod_title);
 
 //加入购物车

			 // 菜单分类部分拿数据
   // let sectionWrap = $(".section-wrap").html();
    //console.log(sectionWrap);
    // $.ajax({
    //   url: "/static/json-data/catogray.json", //如果是服务器代理请求 这里应该请求代理服务器接口/item
    //   dataType: "json",
    //   success: function (data) {
    //     //console.log(data);
    //     let tempstr = template("item_templite", { list: data });
  
    //      $(".section-wrap")[0].innerHTML += tempstr;

    //   }
		// }); 
		


    })
  })
  
  
  
  