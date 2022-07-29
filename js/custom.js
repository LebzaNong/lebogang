//custom js

$(window).scroll(function(){
    if($(this).scrollTop()>5){
        $(".cn-stick-nav").addClass("fixed-top navbar-dark top-nav nav-bdr");
    }
    else
    {
        $(".cn-stick-nav").removeClass("fixed-top navbar-dark top-nav nav-bdr")
    }
});

$(window).scroll(function(){
    if($(this).scrollTop()>=50){
        $("#cn-return-to-top").fadeIn(200);
    }
    else
    {
        $("#cn-return-to-top").fadeOut()
    }
});

$("#cn-return-to-top").click(function(){
    $("body,html").animate({
        scrollTop:0
    },500);
})


$(window).scroll(function(){
    if($(this).scrollTop()>5){
        $(".cn-stick-nav .navbar-brand img").attr("src","images/logo/logo.png");
    }
    else
    {
        $(".cn-stick-nav .navbar-brand img").attr("src","images/logo/logo2.png");
    }
})

/*
$(window).scroll(function(){
    if($(this).scrollTop()>5){
        $(".cn-nav .navbar-light .navbar-nav .nav-link").addClass(".cn-scroll-nav-padding");
    }
    else
    {
        $(".cn-nav .navbar-light .navbar-nav .nav-link").removeClass(".cn-scroll-nav-padding")
    }
})
*/
