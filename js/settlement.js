/**
 * Created by shiyu.Chen on 2016/4/7 0005.
 */
$(function(){

    $(".prv").change(function(){
        var former="请选择";

        if($(this).val()=="福建省"){
            $(".city").append("<option value=福州市>福州市</option>"+
                "<option value=厦门市>厦门市</option>"+
                "<option value=泉州市>泉州市</option>"+
                "<option value=南平市>南平市</option>"+
                "<option value=宁德市>宁德市</option>"+
                "<option value=龙岩市>龙岩市</option>"+
                "<option value=三明市>三明市</option>"+
                "<option value=漳州市>漳州市</option>"+
                "<option value=莆田市>莆田市</option>"+
                "<option value=石狮市>石狮市</option>"+
                "<option value=武夷山>武夷山</option>"+
                "<option value=福清>福清</option>"
            );
        }
        else if ($(this).val()=="请选择"){
            $(".town").val(former);
            $(".city").val(former);
        }

    });

    $(".city").change(function(){
        if($(this).val()=="厦门市"){
            $(".town").append("<option value=湖里区>湖里区</option>"+
                "<option value=思明区>思明区</option>"+
                "<option value=集美区>集美区</option>"+
                "<option value=翔安区>翔安区</option>"+
                "<option value=同安区>同安区</option>"+
                "<option value=海沧区>海沧区</option>"
            );
        }
    });
    //发票选择事件
    $(".unneed-checkbox").change(function () {
        var checkbox=$(this);
        if (checkbox.prop("checked")){
            $(".type-invoice").hide();
            $(".invoice-row").hide();
            $(".personal-invoice").prop("checked",true);
            $(".company-invoice").prop("checked",false);
        }
    })
    $(".need-checkbox").change(function () {
        var checkbox=$(this);
        if (checkbox.prop("checked")){
            $(".type-invoice").show();
        }

    })
    $(".personal-invoice").change(function () {
        var checkbox=$(this);
        if (checkbox.prop("checked")){
            $(".invoice-row").hide();
        }
    })
    $(".company-invoice").change(function () {
        var checkbox=$(this);
        if (checkbox.prop("checked")){
            $(".invoice-row").show();
        }
    })
})


