;(function($){
    $.fn.zoom = function(options){
        // 默认配置
        var _option = {
            align: "left",				// 当前展示图片的位置，则放大的图片在其相对的位置
            thumb_image_width:362,		// 当前展示图片的宽
            thumb_image_height:524,	// 当前展示图片的高
            source_image_width: 1500,  	// 放大图片的宽
            source_image_height: 2250,	// 放大图片的高
            zoom_area_height: "justify",// 放大图片的展示区域的高
            zoom_area_distance: 100,     //
            zoom_easing: true,          // 是否淡入淡出
            click_to_zoom: false,
            zoom_element: "auto",
            show_descriptions: true,
            description_location: "bottom",
            description_opacity: 0.7,
            small_thumbs: 5,			// 小图片展示的数量
            smallthumb_inactive_opacity: 0.4, 	// 小图片处于非激活状态时的遮罩透明度
            smallthumb_hide_single: true,    	//
            smallthumb_select_on_hover: false,
            smallthumbs_position: "bottom",		// 小图片的位置
            show_icon: true,
            hide_cursor: false,			// 鼠标放到图片时，是否隐藏指针
            speed: 1000,     			//
            autoplay: false,				// 是否自动播放
            autoplay_interval:10, 	// 自动播放时每张图片的停留时间
            keyboard: true,
            right_to_left: false,

        }

        if(options){
            $.extend(_option, options);
        }

        var $ul = $(this);
        if($ul.is("ul") && $ul.children("li").length && $ul.find(".etalage_big_image").length){

            $ul.addClass('etalage clearfix').show();
            var $li = $ul.children("li").addClass("etalage_thumb"),
                li_len = $li.length,
                autoplay = _option.autoplay;
            $li.first().addClass("etalage_thumb_active").show();
            if(li_len<2){
                autoplay = false;
            }

            $ul.find(".etalage_thumb_image").css({width:_option.thumb_image_width, height:_option.thumb_image_height}).show();

            var scalex = _option.thumb_image_width / _option.source_image_width,
                scaley = _option.thumb_image_height / _option.source_image_height,
                scxy = _option.thumb_image_width / _option.thumb_image_height;

            var $etalage_magnifier, $etalage_magnifier_img, $etalage_zoom_area, $etalage_zoom_img;

            // 遮罩显示的区域
            if(!$(".etalage_magnifier").length){
                $etalage_magnifier = $('<li class="etalage_magnifier"><div class=""><img src="" /></div></li>');
                $etalage_magnifier_img = $etalage_magnifier.find('img');

                $ul.append($etalage_magnifier);

                $etalage_magnifier.css({top:top, left:left});
                $etalage_magnifier_img.attr('src', $ul.find('.etalage_thumb_active .etalage_thumb_image').attr('src')).css({width: _option.thumb_image_width, height: _option.thumb_image_height});
                $etalage_magnifier.find('div').css({width:_option.thumb_image_width*scalex, height:_option.thumb_image_height*scaley});
            }

            // 大图
            if(!$('.etalage_zoom_area').length){
                $etalage_zoom_area = $('<li class="etalage_zoom_area"><div><img class="etalage_zoom_img" /></div></li>');
                $etalage_zoom_img = $etalage_zoom_area.find('.etalage_zoom_img');
                var top = 0,
                    left = 0;

                $ul.append($etalage_zoom_area);

                if(_option.align=="left"){
                    top = 0;
                    left = 0 + _option.thumb_image_width + _option.zoom_area_distance;
                }

                $etalage_zoom_area.css({top:top, left:left});
                $etalage_zoom_img.css({width: _option.source_image_width, height: _option.source_image_height});
            }

            var autoPlay = {
                autotime : null,
                isplay : autoplay,

                start : function(){
                    if(this.isplay && !this.autotime){
                        this.autotime = setInterval(function(){
                            var index = $ul.find('.etalage_thumb_active').index();
                            changeLi((index+1)%_option.small_thumbs);
                        }, 10000);
                    }
                },

                stop : function(){
                    clearInterval(this.autotime);
                    this.autotime = null;
                },

                restart : function(){
                    this.stop();
                    this.start();
                }
            }

            // 循环小图
            var $small = '';
            if(!$(".etalage_small_thumbs").length){
                var top = _option.thumb_image_height+10,
                    width = _option.thumb_image_width,
                    smwidth = 26,
                    smheight = 42,
                    ulwidth =
                        smurl = '',
                    html = '';

                for(var i=0; i<_option.small_thumbs; i++){
                    smurl = $li.eq(i).find('.etalage_thumb_image').attr("src");

                    if(i==0){
                        html += '<li class="etalage_smallthumb_active"><img src="'+smurl+'" alt="small" style="width:'+smwidth+'px; height:'+smheight+'px;" /></li>';
                    }else{
                        html += '<li style="opacity:0.4;"><img src="'+smurl+'" alt="small" style="width:'+smwidth+'px; height:'+smheight+'px;" /></li>';
                    }
                }

                $small = $('<li class="etalage_small_thumbs" style="top:'+top+'px; width:'+width+'px;"><ul class="clearfix" style="width: 485px;">'+html+'</ul></li>');
                $ul.append($small);

                $small.delegate("li", "click", function(event){
                    changeLi($(this).index()+0);
                    autoPlay.restart();
                });

                autoPlay.start();
            }

            function changeLi(index){
                $ul.find('.etalage_thumb_active').removeClass('etalage_thumb_active').stop().animate({opacity: 0}, _option.speed, function() {
                    $(this).hide();
                });
                $small.find('.etalage_smallthumb_active').removeClass('etalage_smallthumb_active').stop().animate({opacity: _option.smallthumb_inactive_opacity}, _option.speed);

                $li.eq(index).addClass('etalage_thumb_active').show().stop().css({opacity: 0}).animate({opacity: 1}, _option.speed);
                $small.find('li:eq('+index+')').addClass('etalage_smallthumb_active').show().stop().css({opacity: _option.smallthumb_inactive_opacity}).animate({opacity: 1}, _option.speed);

                $etalage_magnifier_img.attr("src", $li.eq(index).find('.etalage_thumb_image').attr("src"));
            }

                $(".img_right").click(function() {
                    var small_index = $ul.find('.etalage_thumb_active').index();
                    if (small_index == 4) {
                        small_index = -1;
                    }
                    changeLi(small_index+1);
                    })

                    $(".img_left").click(function(){
                        var small_index=$ul.find('.etalage_thumb_active').index();
                        /*alert(small_index);*/
                        if(small_index==0){
                            small_index=5
                        }
                        changeLi(small_index-1);
                })



            _option.zoom_area_height = _option.zoom_area_width / scxy;
            $etalage_zoom_area.find('div').css({width:_option.zoom_area_width, height:524});

            $li.add($etalage_magnifier).mousemove(function(event){
                var xpos = event.pageX - $ul.offset().left,
                    ypos = event.pageY - $ul.offset().top,
                    magwidth = _option.thumb_image_width*scalex,
                    magheight = _option.thumb_image_height*scalex,
                    magx = 0,
                    magy = 0,
                    bigposx = 0,
                    bigposy = 0;

                if(xpos < _option.thumb_image_width/2){
                    magx = xpos > magwidth/2 ? xpos-magwidth/2 : 0;
                }else{
                    magx = xpos+magwidth/2 > _option.thumb_image_width ? _option.thumb_image_width-magwidth : xpos-magwidth/2;
                }
                if(ypos < _option.thumb_image_height/2){
                    magy = ypos > magheight/2 ? ypos-magheight/2 : 0;
                }else{
                    magy = ypos+magheight/2 > _option.thumb_image_height ? _option.thumb_image_height-magheight : ypos-magheight/2;
                }

                bigposy = magy / scaley;
                bigposx = magx / scalex;

                $etalage_magnifier.css({'left':magx, 'top':magy});
                $etalage_magnifier_img.css({'left':-magx, 'top': -magy});

                $etalage_zoom_img.css({'left': -bigposx, 'top': -bigposy});
            }).mouseenter(function(event){
                autoPlay.stop();

                $etalage_zoom_img.attr("src", $(this).find('.etalage_big_image').attr('src'));
                $etalage_zoom_area.css({"background-image":"none"}).stop().fadeIn(400);

                $ul.find('.etalage_thumb_active').stop().animate({'opacity':0.5}, _option.speed*0.7);
                $etalage_magnifier.stop().animate({'opacity':1}, _option.speed*0.7).show();
            }).mouseleave(function(event){
                $etalage_zoom_area.stop().fadeOut(400);
                $ul.find('.etalage_thumb_active').stop().animate({'opacity':1}, _option.speed*0.7);
                $etalage_magnifier.stop().animate({'opacity':0}, _option.speed*0.7, function(){
                    $(this).hide();
                });

                autoPlay.start();
            })
        }
    }


})(jQuery);



//手风琴效果
var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}
Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
}
var accordion = new Accordion($('#accordion'), false);
//结束



//图标点击变色
$(function(){
    $(".s_code").on("click",function(){
        var  a=parseInt(this.getAttribute("active"));
        if(a==1){
            $(this).css({"background-color":"#000000","color":"#ffffff"});
            $(this).siblings(".s_code").css({"background-color":"#ffffff","color":"#000000"});
            $(this).attr("active","2");
            $(this).siblings(".s_code").attr("active","1");
            /*$(".append_left").css({"background-color":"#000000"});*/
        }
        if(a==2) {
            $(this).css({"background-color":"#ffffff","color":"#000000"});
            $(this).attr("active","1");
            $(this).siblings(".s_code").attr("active","1");
            /*$(".append_left").css({"background-color":"#cccccc"});*/
            a=1
        }
        if($(this).attr("active")==2){
            $(".append_left").css({"background-color":"#000000"});
        }
        else {
            $(".append_left").css({"background-color":"#cccccc"});
        }
    })
    /*pay页面*/
    $(".radio-content").eq(1).css({"display":"none"});
    $(".clearfix_nature input").on("click",function(){
        $(this).parents(".clearfix_nature").siblings(".radio-content").eq($(this).index()).css({"display":"block"});
        $(this).parents(".clearfix_nature").siblings(".radio-content").eq($(this).index()).siblings(".radio-content").css({"display":"none"});
    })
    $(".radio-content img").on("click",function(){
        $(this).css({"border":"2px solid #000"}).siblings("img").css({"border":"2px solid #fff"});
    })
    /*pay页面 end*/
//点击查看更多
    $(".see-more").on("click", function () {
        $(".nav-tabs-style li:eq(1)").addClass("active").siblings("li").removeClass("active");
        $('html,body').animate({
            scrollTop: '1050px'}, 10);
    })


    //换一批效果
    $(".next").on("click",function(){
        $(".next-one").toggle();
        $(".next-two").toggle();
    })



});

