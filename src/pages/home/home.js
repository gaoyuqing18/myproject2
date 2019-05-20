//模块化  方便引入多个js文件  不必考虑引入顺序

require(["../../static/conf/config.js"], function () {

  console.log("你快好吧");
  //找配置文件  使用插件 
  require(["jquery", "sw"], function ($, Swiper) {
    console.log($);
    console.log(Swiper);
    console.log("你快好吧");
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
      autoplay: true,//可选选项，自动滑动
      loop: true,
      slidesPerView: 'auto',
      loopedSlides: 4,
    })

    var mySwiper3 = new Swiper('#pink-recom2', {
      autoplay: true,//可选选项，自动滑动
      loop: true,
      slidesPerView: 'auto',
      loopedSlides: 3,
    })

    // $.ajax({
    //   url:'/static/json-data/items.json',
    //   dataType : "json",
    // }).done(function(data){
    //   console.log("成功");
    //   console.log(data);
    // }).fail(function(data){
    //   console.log("失败");
    //   console.log(data);
    // })

     let section_content = $(".section-content").html();
    console.log($);
    $.ajax({
      url: "/static/json-data/items.json",
      dataType: "json",
      success: function (data) {
        console.log(data);
        let data = JSON.parse(data);
        // section_content.innerHTML += template("item_templite", {
        //   data: data,
        // });
        // droplist.innerHTML = "";//先清空之前获取的 避免累积
      }
    });

  })
})

    // require(["jquery","template"], function($,template) {
    //   console.log($);
    // $(function(){
    //   console.log("ok");


    //   console.log(section_content);

//   })
// })


