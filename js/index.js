/**
 * Created by Administrator on 2016/3/30 0030.
 */
    $(function() {
        $('#slider').vmcSlider({
            gridVertical: 20,
            gridHorizontal: 10,
            autoPlay: true,
            ascending: true,
            effects: [ 'fade' ],
            ie6Tidy: false,
            random: false,
            duration: 2000,
            speed: 900
        });



$(" .wrap-2").hover(function(){
    $(this).children(".img-text").find("span").stop(false).animate({
        "bottom" : "0"
    });
},function(){

    $(this).children(".img-text").find("span").stop(true).animate({
        "bottom" : "-200"
    });
});
$(" .wrap-2").hover(function(){
    $(this).children(".img-text").find(".mask-layer").stop(false).animate({
        "bottom" : "0"
    });
},function(){

    $(this).children(".img-text").find(".mask-layer").stop(true).animate({
        "bottom" : "-200"
    });
});

$(" .wrap-fours").hover(function(){
    $(this).children(".img-text").find("span").stop(false).animate({
        "bottom" : "0"
    });
},function(){

    $(this).children(".img-text").find("span").stop(true).animate({
        "bottom" : "-200"
    });
});
$(" .wrap-fours").hover(function(){
    $(this).children(".img-text").find(".mask-layer").stop(false).animate({
        "bottom" : "0"
    });
},function(){

    $(this).children(".img-text").find(".mask-layer").stop(true).animate({
        "bottom" : "-200"
    });
});

$(" .wrap").hover(function(){
    $(this).children(".img-text").find("span").stop(false).animate({
        "bottom" : "0"
    });
},function(){

    $(this).children(".img-text").find("span").stop(true).animate({
        "bottom" : "-200"
    });
});
$(" .wrap").hover(function(){
    $(this).children(".img-text").find(".mask-layer").stop(false).animate({
        "bottom" : "0"
    });
},function(){

    $(this).children(".img-text").find(".mask-layer").stop(true).animate({
        "bottom" : "-200"
    });
});

$(function(){
    var a=true;
    $(" .dress-size").on("click",function(){
        if(a){
            $(this).css({"background-color":"#000000","color":"#ffffff"});
            $(".append_left").css({"background-color":"#000000"});
            a=false;
        }
        else {
            $(this).css({"background-color":"#ffffff","color":"#000000"});
            $(".append_left").css({"background-color":"#cccccc"});
            a=true
        }
    })
});








//按钮颜色改变
$(document).ready(function(){
    $(".search-btn").mouseover(function(){
        $(".search-btn").css("background","#FFFFFF").css("color","#000000");
    });
    $(".search-btn").mouseout(function(){
        $(".search-btn").css("background","#000000").css("color","#FFFFFF");
    });
});





$(document).ready(function(){
    $(".read-btn2").mouseover(function(){
        $(".read-btn2").css("background","#FFFFFF").css("color","#000000");
    });
    $(".read-btn2").mouseout(function(){
        $(".read-btn2").css("background","#000000").css("color","#FFFFFF");
    });
});
$(document).ready(function(){
    $(".read-btn3").mouseover(function(){
        $(".read-btn3").css("background","#FFFFFF").css("color","#000000");
    });
    $(".read-btn3").mouseout(function(){
        $(".read-btn3").css("background","#000000").css("color","#FFFFFF");
    });
});
//轮播图按钮
$(document).ready(function(){
    $(".pho-btn").mouseover(function(){
        $(".pho-btn").css("background","#FFFFFF").css("color","#000000");
    });
    $(".pho-btn").mouseout(function(){
        $(".pho-btn").css("background","#000000").css("color","#FFFFFF");
    });
});














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
//})







//模态轮播
window.onload=function() {
    // 获取元素
    var container = document.getElementById(' container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var animated = false;
    var timer;//定时器
    // 底部按钮样式
    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }

        buttons[index - 1].className = "on";
    }

    //动画效果
    function animate(offset) {
        animated = true;
        var time = 1;//位移总时间
        var inteval = 10;//位移间隔时间
        var speed = offset / (time / inteval);//每次位移量
        var left = parseInt(list.style.left) + offset;

        function go() {
            if ((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);//setTimeout只 执行一次
            }
            else {
                animated = false;
                list.style.left = left + "px";
                if (left > -350) {
                    list.style.left = -2100 + 'px';
                }
                if (left < -2100) {
                    list.style.left = -350 + 'px';
                }
            }
        }

        go();

    }

    //自动播放
    // function play(){
    //     timer=setInterval(function(){//setInterval  设置定时器、可一直执行
    //         next.onclick();
    //     },3000);
    // }
    //function stop(){
    //    clearInterval(timer);
    //}
    // 下一张
    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 6) {
            index = 1
        } else {
            index += 1;
        }
        showButton();
        if (!animated) {
            animate(-350);
        }
    }
    //下一张
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 6
        } else {
            index -= 1;
        }
        showButton();
        if (!animated) {
            animate(350);
        }

    }

//    //底部圆点点击事件
    for(var i=0;i<buttons.length;i++){
    	buttons[i].onclick=function(){
            if (animated) {
            return;
            }
    		if (this.className=="on") {
    			return;
    		}
            var myIndex=parseInt(this.getAttribute('index'));//点击的位置
    		var offset=-350*(myIndex-index);
    		animate(offset);
    		index=myIndex;
    		showButton();

    	}
    }
    //container.onmouseover = stop;//鼠标移近焦点图中停止滚动
    //container.onmouseout = play;//鼠标离开焦点图自动滚动
    // play();
}

    });


//------------------------------返回顶部-----------------------------------------//


var speed = 500;//滚动速度
$(window).scroll(function(){      //滚动事件
    var h=$(window).scrollTop();
    if(h>=500){
        $(".scrolls").css({"display": "block"});
        //$('.toTop').fadeIn(300);
    }
    else{
        $(".scrolls").css({"display": "none"});
    }
});
//回到顶部
$(".toTops").click(function () {
    //alert(1)
    $('html,body').animate({
        scrollTop: '0px'}, speed);
});