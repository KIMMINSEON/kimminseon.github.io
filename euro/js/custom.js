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

  // main-visual slick slider
  $(".slide-container").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
  });
});
