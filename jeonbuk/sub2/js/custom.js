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

  // treat-box height
  var treatH = $(".treat-box > .active").outerHeight();
  $(".treat-box").css("height", treatH);
  
  // treat-box tab
  $(".treat-type > div").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass();

    var treatTab = $(this).attr("data-alt");
    $("." + treatTab).siblings().removeClass('active');
    $("." + treatTab).addClass('active');

    var treatBoxH = $("." + treatTab).outerHeight();
    $(".treat-box").css("height", treatBoxH);
  });
});
