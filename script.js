$(function(){

  //humburger menu//
  $(".btn-gnavi").on("click", function(){
       if($(this).hasClass("open")) {
           $(".btn-gnavi").removeClass("open");
           $(".header-wrapper").removeClass("downsize");
           $(".global-navi").removeClass("open");
           $(".global-navi").addClass("close");
           $(".header-wrapper").addClass("upsize");
       } else {
           // メニューを開いたら次回クリック時は閉じた状態になるよう設定
           $(".btn-gnavi").addClass("open");
           $(".header-wrapper").addClass("downsize");
           $(".global-navi").addClass("open");
           $(".global-navi").removeClass("close");
           $(".header-wrapper").removeClass("upsize");
       }
   });


//slideshow 375<//
var page=0;
var lastPage =parseInt($(".img-top").length-1);
    $(".img-top").css("display","none");
    $(".img-top").eq(page).css("display","block");
function changePage(){
     $(".img-top").fadeOut(1000);
     $(".img-top").eq(page).fadeIn(1000);
};

var Timer;
function startTimer(){
Timer =setInterval(function(){
          if(page === lastPage){
                         page = 0;
                         changePage();
               }else{
                         page ++;
                         changePage();
          };
     },5000);
}
startTimer();

//slideshow iphone//
var pages=0;
var lastPages =parseInt($(".img-top-ip").length-1);
    $(".img-top-ip").css("display","none");
    $(".img-top-ip").eq(pages).css("display","block");
function changePages(){
     $(".img-top-ip").fadeOut(1000);
     $(".img-top-ip").eq(pages).fadeIn(1000);
};

var Timer;
function startTimers(){
Timer =setInterval(function(){
          if(pages === lastPages){
                         pages = 0;
                         changePages();
               }else{
                         pages ++;
                         changePages();
          };
     },5000);
}
startTimers();

});
