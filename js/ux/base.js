/*
 author:tiantian.bai
 datetime:2016-04-21
 scope:index.html
 */
/*导航栏悬浮固定在页面顶部部分*/
$(window).scroll(function() {
    var winHeight=$(window).scrollTop();
//        alert(winHeight);
    if(winHeight>285){
        $(".nav-bar").css({"display":"none"});
    }
    if(winHeight>500){
        $(".nav-bar").css({"position":"fixed","top":"0","display":"block"});
        $(".shopClass-contents").css({"top":"38px","left":"0px"});
    }
    if(winHeight<285){
        $(".nav-bar").css({"position":"relative","top":"0","display":"block"});
        $(".shopClass-contents").css({"position":"absolute","top":"38px","left":"0px"});
    }
})
/*导航栏悬浮固定部分END*/