//模块化  方便引入多个js文件  不必考虑引入顺序

require(["../../static/conf/config.js"], function () {

  //找配置文件  使用插件 
  require(["jquery", "sw", "template"], function ($, Swiper, template) {
    // console.log($);
    // console.log(Swiper);
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
    //console.log(section_content);
    $.ajax({
      url: "/static/json-data/items.json",
      dataType: "json",
      success: function (data) {
        console.log(data);

        // droplist.innerHTML = "";//先清空之前获取的 避免累积

        let tempstr = template("item_templite", { list: data });
        console.log(tempstr);

        //$(".section-content")[0].append(tempstr);
         $(".section-content")[0].innerHTML += tempstr;

      }
    });

  })
})



