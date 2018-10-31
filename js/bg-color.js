/**
 * Created by Administrator on 2016/3/30 0030.
 */

$(function(){

    $("#email").focusout(function() {
        check_email();
    });

    //输入框背景颜色

    $(".dialog-style").focusout(function() {
        $(this).css("background-color", ($(this).val() == "" || $(this).val() == "请选择") ? "#F4D9D9" : "#E5E5E5");
    });

    $(".form-control").focusout(function() {
        $(this).css("background-color", ($(this).val() == "" || $(this).val() == "请选择") ? "#F4D9D9" : "#E5E5E5");
    });
    //登录框外包颜色
    $(".borders").focus(function(){
        $(this).css({"border":"none","box-shadow":"none"});

    });

    //Email的判断
    //$("#email").blur(function(){
    //    $("#error").remove();
    //    var i= $("#email").val()
    //    if($("#email").val()==""){
    //        $(".email_error").append("<span id='error'>请输入您的Email地址</span>");
    //    }
    //});


    $("#password").blur(function(){
        $("#password_error").remove();
        var i= $("#password").val()
        if($("#password").val()==""){
            $(".password_error").append("<span id='password_error'>请输入您的密码</span>");
        }
    });

    $("#passwords").blur(function(){
        $("#passwords_error").remove();
        var i= $("#passwords").val()
        if($("#passwords").val()==""){
            $(".passwords_error").append("<span id='passwords_error'>请输入您的密码</span>");
        }
    });

    $(".caller").blur(function(){
        $("#calls_error").remove();
        var i= $(".caller").val()=="";
        if($(".caller").val()=="请选择"){
            $(".caller_error").append("<span id='calls_error'>请输入姓名</span>");
        }
    });


    //$(".caller").blur(function(){
    //    $("#calls_error").remove();
    //    var i= $(".caller").val()=="";
    //    if($(".caller").val()=="请选择"){
    //        $(".caller_error").append("<span id='calls_error'>请输入姓名</span>");
    //    }
    //});

})


//$(function(){
//    $("#email").blur(function(){
//        $("#error").remove();
//        var i= $("#email").val()
//        if($("#email").val()==""){
//            $(".email_error").append("<span id='error'>请输入您的Email地址</span>");
//
//        }
//    });
//
//});

