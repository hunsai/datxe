$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $("#backtop").fadeIn();
  } else {
    $("#backtop").fadeOut();
  }
});
// active
$(document).ready(function () {
  $(".menu-tab button").click(function () {
    $(".menu-tab button").removeClass("active"); // Xóa class active khỏi tất cả các button
    $(this).addClass("active"); // Thêm class active vào button được nhấn
  });
});
