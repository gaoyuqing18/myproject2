require(["../../static/conf/config.js"], function () {
    require(["jquery", "template"], function ($,template) {
     console.log($);

		  //更改登录用户名
			var sessionstorage = window.sessionStorage;
			var currentUser = sessionstorage.key(0);
		 $(".currentUser").html("尊敬的 "+currentUser+" 欢迎您！！！");
 	 
   //放大镜部分
       let $smallImg = $("#smallImg");  //小图片
			let $smallGlass = $("#smallCursor"); //小放大镜
			let $bigImg = $("#bigImg"); //大图片
			let $bigGlass = $("#bigCursor"); //大放大镜

			$smallGlass.width($bigGlass.width()/$bigImg.width() * $smallImg.width());
		$smallGlass.height($bigGlass.width()/$bigImg.width() * $smallImg.width());

		 $smallImg.hover(function(){ // 鼠标放在小图片上小放大镜出来
				 $smallGlass.show();
			   $bigGlass.show();
			 },function(){//鼠标离开小图片 小放大镜隐藏 回调函数
				 $smallGlass.hide();
				 $bigGlass.hide();

		 });
			
			 $smallImg.mousemove(function(e){//鼠标在小图上移动
				let left = e.clientX - $smallImg.offset().left - $smallGlass.width()/2;
				 let top = e.clientY - $smallImg.offset().top - $smallGlass.height()/2;
			
		 	left = Math.min(Math.max(0, left), $smallImg.width()-$smallGlass.width());
		 	top = Math.min(Math.max(0, top), $smallImg.height()-$smallGlass.height());
				
			 	$smallGlass.css({ left, top });
				
				let scale = $bigImg.width()/$smallImg.width();
				$bigImg.css({
		 		"left" : -scale*left,
					"top" : -scale*top
					
			 	})
			 })


		//加入购物车
    //  let sectionWrap = $(".section-wrap").html();
    // console.log(sectionWrap);
    $.ajax({
      url: "/static/json-data/items.json", //如果是服务器代理请求 这里应该请求代理服务器接口/item
      dataType: "json",
      success: function (data) {
			//	console.log( data.detail[0].subTitle);
				$(".goods-title").html(data.detail[0].title);
				$(".detail").html(data.detail[0].subTitle);
				$(".tag-name1").html(data.detail[0].information1);
				$(".tag-name2").html(data.detail[0].information2);
				$(".origin-price").html(data.detail[0].price);
				$(".discount-price").html(data.detail[0].discountprice);

				//console.log($("#goodsNo").attr("value"));
			//	console.log($("#goodsNo").html());
				var num= parseInt($("#goodsNo").html());
				var price = parseInt($(".discount-price").html());
			//	console.log(num);

				 $(".reduce").on('click', function() {//减少按钮
			     	//console.log("ok");
					 num=num-1 ; 
					 if(num<=0)  {
						 num=0;
						$("#goodsNo").html(num);
					 }else{
						 $("#goodsNo").html(num);
					 }	  
				 })

				 $(".plus").on('click', function() {//添加按钮
					 num=num+1 ; 
						$("#goodsNo").html(num);  
				})

				//点击加入购物车之后在获取num值及商品相关信息，加入localStorage
				$("#jCard").on('click', function() {
							num= parseInt($("#goodsNo").html());
							//console.log(num);
							var totalPrice = num*price;

						if(window.localStorage&&(num!=0)){//浏览器支持localStorage
							var storage = window.localStorage; 
								var goodItemMsg ={  //每一个商品存成一个对象
									
									userName: sessionstorage.key(0),
									goodImg: data.detail[0].prodPicUrl,
									goodtitle: 	data.detail[0].title,
									goodNo: data.detail[0].id,
									num: num,
									price: price,
									totalPrice: totalPrice
								}
								//console.log(goodItemMsg);
								//console.log('buy'+sessionstorage.key(0));
								var listStr=JSON.stringify(goodItemMsg);  //数据转换成字符串
								//console.log(typeof listStr);
								
								storage.setItem('buy'+sessionstorage.key(0),listStr);
								//key 'buy'+用户名 value商品信息 
								$("#catNum").html(num);
							}
				
				})


				
		} 


		})

	})
})
  
  
  
  