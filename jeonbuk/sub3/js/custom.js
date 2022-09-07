$(function () {
  // gnb menu height 주기
  var gnbH = $(".depth").height();
  $(".gnb-bg").css({ height: gnbH });

  // gnb menu hover
  $(".menu > li").mouseenter(function () {
    $(".depth").stop().slideDown();
    $(".gnb-bg").stop().slideDown();
  });
  $(".menu > li").mouseleave(function () {
    $(".depth").stop().slideUp();
    $(".gnb-bg").stop().slideUp();
  });

  // scroll show bt-menubar
  $(window).scroll(function () {
    var scrollT = $(window).scrollTop();
    if (scrollT > 200) {
      $(".bt-menubar").slideDown();
    } else {
      $(".bt-menubar").slideUp();
    }
  });

  // .top click scroll
  $(".menubar-icon .top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


});
