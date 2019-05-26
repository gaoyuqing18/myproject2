//模块化  方便引入多个js文件  不必考虑引入顺序

require(["../../static/conf/config.js"], function () {

  //找配置文件  使用插件 
  require(["jquery", "sw", "template"], function ($, Swiper, template) {
  console.log($);
  //更改登录用户名
   var sessionstorage = window.sessionStorage;
   var currentUser = sessionstorage.key(0);
  $(".currentUser").html("尊敬的 "+currentUser+" 欢迎您！！！");

    //  轮播图
    var mySwiper1 = new Swiper('#ad-banner', {
      autoplay: true,//可选选项，自动滑动
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    var mySwiper2 = new Swiper('#recom-banner', {
      autoplay: true,
      loop: true,
      slidesPerView: 'auto',
      loopedSlides: 4,
    })

    var mySwiper3 = new Swiper('#pink-recom2', {
      autoplay: true,
      loop: true,
      slidesPerView: 'auto',
      loopedSlides: 3,
    })

// 菜单分类部分拿数据
   // let sectionWrap = $(".section-wrap").html();
    //console.log(sectionWrap);
    $.ajax({
      url: "/static/json-data/catogray.json", //如果是服务器代理请求 这里应该请求代理服务器接口/item
      dataType: "json",
      success: function (data) {
        //console.log(data);
        let tempstr = template("item_templite", { list: data });
  
         $(".section-wrap")[0].innerHTML += tempstr;

      }
    });


    // 楼梯部分
    var click = false;  //避免点击左侧导航与滚动页面同时起作用
    $(window).scroll( function(){//滚动页面时要计算滚动距离 停下来才显示用防抖
     //console.log($(this).scrollTop());
      if( $(this).scrollTop() > 1000) {
        $("#floor").show();
      } else {
        $("#floor").hide();
      }
    });
    $("#floor ul li:last").click(function(){
      $("html").animate({scrollTop: 0}, 500);
    })
		
		$("#floor ul li:not(:last)").click(function() {
			click = true;
			$(this).addClass("hover").siblings().removeClass("hover");
			let index = $(this).index();
			$("html").animate({scrollTop: 1000+ 860*index },100, function() {
                click = false;
			}); 
		})
		
		$(window).scroll(function() {
			if(!click) {
				let num = Math.floor(  ($(window).scrollTop()-1000)/860  );
                if(num>=0) {
					$("#floor ul li").eq(num).addClass("hover").siblings().removeClass("hover");
					//:eq() 选择器选取带有指定 index 值的元素。
				}
			}
    })

  })
})



