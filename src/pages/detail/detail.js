require(["../../static/conf/config.js"], function () {
    require(["jquery"], function ($) {
     console.log($);

   
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
    })
  })
  
  
  
  