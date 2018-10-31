/**
 * Created by shiyu.Chen on 2016/3/31 0031.
 */




//优惠券弹出框
$(function () {


//数量与总价的变换事件
    function getToTal(){

        var selected=0;//数量
        var subtotal=0;//单件价格
        var price=0;//总价
        $(".single").each(function(index){
            var checkbox=$(this).find("input");
            if(checkbox.prop("checked")){
                $(".choose-number option:selected")
                selected=parseInt($(this).siblings(".cho-num").find(".choose-number option:selected").val());
                subtotal=parseInt(selected * parseInt($(this).siblings(".price").find(".unit-price").text()));
                $(this).siblings(".sum").find(".one-sum").text(subtotal);
                price+=parseInt(subtotal);
                $(".two-sum").text(price);
                $(".all-sum").text(price);
            }
            else{
                $(".all-select").prop("checked",false);
                $(".two-sum").text(price);
                $(".all-sum").text(price);
            }
        })
    }


    //全选框
    $(".all-select").on("click", function () {
        if (this.checked) {
            $(".select-single").prop("checked", true);
            $(".all-select").prop("checked", true);
            getToTal();
        }
        else {
            $(".select-single").prop("checked", false);
            $(".all-select").prop("checked", false);
            getToTal();
        }
    })




    //选中事件
    $(".single input").on("click",function(){
        getToTal();
    })

    //数量改变

    $(".choose-number").change(function () {
        var val=parseInt($(this).children(":selected").text());
        getToTal();
    })



    //优惠券弹出框
    var Button = true;
    $(".disBtn").on("click", function () {
        if (Button) {
            $(".coupon-display").hide();
            $(".coupon-hide").show();
            $(".disBtn span").text("-");
            Button = false;
        } else {
            $(".coupon-hide").hide();
            $(".coupon-display").show();
            $(".disBtn span").text("+");
            Button = true;
        }
    })

    //结算按钮悬停不变色
    $(".btn-no").hover(function (event) {
        $(this).css("color", "#FFFFFF");
    }, function (event) {
        $(this).css("color", "#FFFFFF");
    });

    //商品价格
        $(".cho-num").change(function () {
            var num = parseInt($(this).children(".choose-number").find(":selected").text());//获取数量
            //alert(num);
            var unitPrice = parseInt($(this). siblings(".price").find(".unit-price").text());//获取单价
            //alert(unitPrice);
            var sumPrice = parseInt(unitPrice * num);
            $(this).siblings(".sum").find(".one-sum").text(sumPrice);
        })



    //护理信息的显示隐藏

        $(".care-title").on("click", function () {
            $(this).hide();
            $(this).siblings(".care-info").show();
        })
        $(".care-info").on("click", function () {
            $(this).hide();
            $(this).siblings(".care-title").show();
        })

//激发模态框

        $(".delete-btn").click(function(){
            $('#myModal').modal("show");
        })


})























