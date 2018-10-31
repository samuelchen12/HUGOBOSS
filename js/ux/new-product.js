/*** Created by Jimmy on 2016/3/29.*/
$(function(){


                    //收藏
        var a=true;
    $(".heart").on("click",function(){
        if(a){
            $(this).css({"color":"red"});
            a=false;
        }
        else {
            $(this).css({"color":"#333"});
            a=true;
        }
    });

                    //图片
    var img=true;
    $(".goods-search img").on("hover",function(){

        $("img").hover(
            function () {
                $(this).addClass("hover");
            },
            function () {
                $(this).removeClass("hover");
            });
    });









});