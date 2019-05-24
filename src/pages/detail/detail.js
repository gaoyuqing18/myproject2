require(["../../static/conf/config.js"], function () {
    require(["jquery"], function ($) {
   console.log($);

    $(window).load(function(){
       let smallImg = $("#smallImg").html();  //小图片
       console.log(smallImg);
			// let $smallGlass = $("#smallCursor"); //小放大镜
			// let $bigImg = $("#bigImg"); //大图片
			// let $bigGlass = $("#bigCursor"); //大放大镜
			
			//smallGlass是正方形宽高一致  计算并修改小放大镜宽高
			// $smallGlass.width($bigGlass.width()/$bigImg.width() * $smallImg.width());
			// $smallGlass.height($bigGlass.width()/$bigImg.width() * $smallImg.width());
			
			// $smallImg.hover(function(){ // 鼠标放在小图片上小放大镜出来
			// 	$smallGlass.show();
			// },function(){//鼠标离开小图片 小放大镜隐藏 回调函数
			// 	$smallGlass.hide();
			// });
			
			// $smallImg.mousemove(function(e){//鼠标在小图上移动
			// 	let left = e.clientX - $smallImg.offset().left - $smallGlass.width()/2;
			// 	//offset()计算元素在可视区位置返回一个对象  offset().left读出left值
			// 	let top = e.clientY - $smallImg.offset().top - $smallGlass.height()/2;
			// 	//计算小放大镜位置 并设置移动范围
			// 	left = Math.min(Math.max(0, left), $smallImg.width()-$smallGlass.width());
			// 	top = Math.min(Math.max(0, top), $smallImg.height()-$smallGlass.height());
				
			// 	$smallGlass.css({ left, top });
			// 	//更改小放大镜位置 left是 left = left的简写
				
			// 	let scale = $bigImg.width()/$smallImg.width();
			// 	//计算图片放大倍数
			// 	$bigImg.css({
			// 		"left" : -scale*left,//根据放大倍数更改大图片位置
			// 		"top" : -scale*top
					
			// 	})
			// })
		});


     
    })
  })
  
  
  
  