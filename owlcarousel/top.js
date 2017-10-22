$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
    $("#navi-btn").click(function(){
    $(".navi-toggle-li").slideToggle();
  });
   $("#click-categories").click(function(){
    $(".categories-toggle").slideToggle();
  });
});
$(window).load(function(){
  $("#list-img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display-img img").attr("src", img_src);
  });
});