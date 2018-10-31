/**
 * Created by Jimmy on 2016/3/29.
 */

$(function() {

//----------------------------------------点击start收藏-------------------------------//
var a=true;
    $(".icon .start").on("click", function () {
    //var pc = $(this).attr("src");
        if (a){
            $(this).attr("src","../images/xinghei.png");
            a=false;
        }
        else {
            $(this).attr("src","../images/xingyuan.png");
            a=true;
        }


});
//------------------------------------------鼠标滑过图片切换---------------------//

    $(".goods-cool .heart").hover(function(){
        var src=  $(this).attr("src");
        $(this).attr("src","../images/1.2.jpg");
    }).mouseout(function(){

        $(this).attr("src","../images/1.1.jpg").show();
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



    var p=true;
    $(".area1").click(function() {
        if (p) {
            $(".fa-down").removeClass("fa fa-sort-desc fa-1x").addClass("fa fa-caret-right fa-1x");
            $(this).siblings("ul").hide();
            p = false;
        }
        else {
            $(".fa-down").removeClass("fa fa-caret-right fa-1x").addClass("fa fa-sort-desc fa-1x");
            $(this).siblings("ul").show();
            p = true;
        }
    });

    var l=true;
    $(".area2").click(function() {
        if (l) {
            $(".fa-down2").removeClass("fa fa-sort-desc fa-1x").addClass("fa fa-caret-right fa-1x");
            $(this).siblings("ul").hide();
            l = false;
        }
        else {
            $(".fa-down2").removeClass("fa fa-caret-right fa-1x").addClass("fa fa-sort-desc fa-1x");
            $(this).siblings("ul").show();
            l = true;
        }
    });

    var o=true;
    $(".area3").click(function() {
        if (o) {
            $(".fa-down3").removeClass("fa fa-sort-desc fa-1x").addClass("fa fa-caret-right fa-1x");
            $(this).siblings("ul").hide();
            o = false;
        }
        else {
            $(".fa-down3").removeClass("fa fa-caret-right fa-1x").addClass("fa fa-sort-desc fa-1x");
            $(this).siblings("ul").show();
            o = true;
        }
    });
//------------------------图片遮罩层---------------------------------//

    $(".down-center-pic div").hover(function(){
        $(this).children("span").stop(false).animate({
            "top" : "180"
        });
    },function() {

        $(this).children("span").stop(true).animate({
            "top": "300px"
        });

    });
//--------------------------------十字-----------------------------------//

    $(".btu img").hover(function(){
        var src=  $(this).attr("src");
        $(this).attr("src","../images/shihei.png");
    }).mouseout(function(){

        $(this).attr("src","../images/shiyuan.png").show();
    });

//复选框单选实现
    $("input:checkbox").each(function(index){

        $(this).change(function(){
            $("input:checkbox:lt("+index+")").removeAttr("checked");
            $("input:checkbox:gt("+index+")").removeAttr("checked");
        });
    });
//复选框单选实现结束

//模态框 尺码点击事件

        $(".size-top .size div").each(function (index) {
            var p = true;
            $(".size-top .size>div:eq("+index+")").click(function(){
                if (p) {
                    $(".size-top .size>div").css("background", "white").css("color", "black");
                    $(this).css("background", "black").css("color", "white");
                    $(".shopping-left").css("background-color", "black");
                    p = false;
                } else {
                    $(".size-top .size>div").css("background", "white").css("color", "black");
                    $(this).css("background", "white").css("color", "black");
                    $(".shopping-left").css("background-color", "white").css("background-color", "#999");
                    p = true;
                }

            });

        });

//$(".size-top .size div").click(function(){
//    var p=true;
//    if(p){
//        $(".size-top .size>div").css("background", "white").css("color", "black");
//        p=false;
//    }else{
//        $(".size-top .size>div").css("background", "black").css("color", "white");
//        p=true;
//    }
//
//});
//模态框 尺码点击事件结束


//    模态框收藏
    var X=true;
    $(".shopping-right").on("click", function () {
        //var pc = $(this).attr("src");
        if (X){
            $(this).css("background-color","black");
            $(".shopping-right i").css("color","white");
            X=false;
        }
        else {
            $(this).css("background-color","#8c8c8c");
            $(".shopping-right i").css("color","black");
            X=true;
        }


    });

//    模态框收藏结束
//轮播
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
    };
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

    //放大镜

    //页面加载完毕后执行
    window.onload = function () {

        var objDemo = document.getElementById("demo");
        var objSmallBox = document.getElementById("small-box");
        var objMark = document.getElementById("mark");
        var objFloatBox = document.getElementById("float-box");
        var objBigBox = document.getElementById("big-box");
        var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

        objMark.onmouseover = function () {
            //alert(1)
            objFloatBox.style.display = "block";
            objBigBox.style.display = "block"
        };

        objMark.onmouseout = function () {
            //alert(2)
            objFloatBox.style.display = "none";
            objBigBox.style.display = "none"
        };

        objMark.onmousemove = function (ev) {

            var _event = ev || window.event;  //兼容多个浏览器的event参数模式

            var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
            var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

            if (left < 0) {
                left = 0;
            } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                left = objMark.offsetWidth - objFloatBox.offsetWidth;
            }

            if (top < 0) {
                top = 0;
            } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                top = objMark.offsetHeight - objFloatBox.offsetHeight;

            }

            objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
            objFloatBox.style.top = top + "px";

            var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
            var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

            objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
            objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
        };
    }




});