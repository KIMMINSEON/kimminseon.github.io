$(function () {
  // main visual slick slider
  $(".slide-container").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  });

  // jb-tv slick slider
  $(".tv-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  });
  // jb-tv slider dots text
  $(".tv-slider #slick-slide-control10").text("북부대동맥류");
  $(".tv-slider #slick-slide-control11").text("탈모, 바로알기");
  $(".tv-slider #slick-slide-control12").text("항앙치료");
  $(".tv-slider #slick-slide-control13").text("항함화학요법");

  // dc-slider slick slider
  $(".dc-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  });
  // dc-slider dots text
  $(".dc-slider .slick-dots li button").text("");

  // news click show
  $(".news ul li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  // items css height
  var itemH = $(".news .inner > div:nth-of-type(1)").height();
  $(".items").css("height", itemH);
});
