//模块化  方便引入多个js文件  不必考虑引入顺序
require(["../../static/conf/config.js"], function() {

       //console.log("你快好吧");
 //找配置文件  使用插件 
   require(["jquery","sw"], function($, Swiper) {
       var mySwiper = new Swiper('#ad-banner', {
              autoplay: true,//可选选项，自动滑动
              loop : true, 
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
              },
              navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              },
        })
    }) 

    require(["jquery","sw"], function($, Swiper) {
       var mySwiper = new Swiper('#recom-banner', {
              autoplay: true,//可选选项，自动滑动
              loop : true, 
              slidesPerView: 'auto',
             loopedSlides: 4,
        })
    })
    
    require(["jquery","sw"], function($, Swiper) {
       var mySwiper = new Swiper('#pink-recom2', {
              autoplay: true,//可选选项，自动滑动
              loop : true, 
              slidesPerView: 'auto',
             loopedSlides: 3,
              // pagination: {
              //   el: '.swiper-pagination',
              //   clickable :true,
              // },
        })
    }) 
   
    
})

// require(["../conf/config"], function() {
//        require(["sw","jquery"], function(Swiper,$) {
//            var mySwiper = new Swiper('#banner1', {
//                autoplay: true,//可选选项，自动滑动
//                loop : true,
               
//                pagination: {
//                    el: '.swiper-pagination',
//                    clickable :true,
//                  },
//            })
   
//            var mySwiper = new Swiper('#banner2', {
//                autoplay: true,//可选选项，自动滑动
//                loop : true,
               
//                pagination: {
//                    el: '.swiper-pagination',
//                    clickable :true,
//                  },
//            })
//        })
       
//    })
