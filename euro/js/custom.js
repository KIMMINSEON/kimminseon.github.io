$(function () {
  // top-banner
  $(".top-banner .close-btn").click(function () {
    $(".top-banner").slideUp();
    $("header").css("top", "0");
  });

  // gnb hover
  $(".gnb > li").mouseenter(function () {
    $(".gnb > li .depth").removeClass("on");
    $(this).find(".depth").addClass("on");
  });
  $(".gnb > li").mouseleave(function () {
    $(".gnb > li .depth").removeClass("on");
  });

  // mobile menu
  var menuList = $(".mobile-menu .menu > li > div, .mobile-menu .menu > li > a");

  $(".open-btn").click(function () {
    $("body").addClass("notscroll");
    $(".mobile-menu, .menu-bg").addClass("active");
  });
  $(".mobile-menu .close-btn, .mobile-menu .menu-bg, .mobile-menu a").click(function () {
      $("body").removeClass("notscroll");
      $(".mobile-menu, .menu-bg").removeClass("active");
      menuList.removeClass("active");
    }
  );
  menuList.click(function () {
    menuList.removeClass("active");
    $(this).addClass("active");
  });
  $(".mobile-menu .menu > li > a, .mobile-menu .depth a").click(function(){
    menuList.removeClass("active");
  });

  // main-visual slick slider
  $(".slide-container").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  // main visual slick slider 버튼 위치
  var windowW = $(window).width();
  var innerW = $(".inner").width();
  var left = (windowW - innerW) / 2 + 50;
  var left1 = (windowW - innerW) / 2 + 108;

  $(".main-visual .slick-arrow.slick-prev").css("left", left + "px");
  $(".main-visual .slick-arrow.slick-next").css("left", left + 29 + "px");
  $(".main-visual .playbtn").css("left", left1 + "px");

  $(window).resize(function () {
    var windowW = $(window).width();
    var innerW = $(".inner").width();
    var left = (windowW - innerW) / 2 + 50;
    var left1 = (windowW - innerW) / 2 + 108;

    $(".main-visual .slick-arrow.slick-prev").css("left", left + "px");
    $(".main-visual .slick-arrow.slick-next").css("left", left + 29 + "px");
    $(".main-visual .playbtn").css("left", left1 + "px");
  });

  // main visual slick slider arrow
  $(".main-visual .slick-arrow").text("");
  $(".main-visual .slick-prev").append('<i class="xi-angle-left-min"></i>');
  $(".main-visual .slick-next").append('<i class="xi-angle-right-min"></i>');

  // main-visual slick slider play stop
  $(".play").click(function () {
    $(".slide-container").slick("slickPlay");
    $(".play").hide();
    $(".stop").show();
  });

  $(".stop").click(function () {
    $(".slide-container").slick("slickPause");
    $(".play").show();
    $(".stop").hide();
  });

  // community slick slider
  $(".commu-visual").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: true,
  });

  // thema tabs
  $(".thema-list .list-tit li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var tabClass = $(this).attr("data-alt");

    $(".thema-list .list-box .list-tab").removeClass("active");
    $(".thema-list .list-box ." + tabClass).addClass("active");
  });

  // review slick slider
  $(".review-box").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
