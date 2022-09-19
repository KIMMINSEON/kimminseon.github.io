$(function () {
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
