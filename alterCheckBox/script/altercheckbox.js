/*ReBuild Checkbox Style with jQuery Ver1.0*\

@ Code By : 一米
@ E-Mail: yimity@yimity.com http://yimity.com
@ Update : 2013-11-25 (Ver 1.0)
@ Download: http://github.com/yimity/checkbox/

\***================Please keep the above copyright information================***/
;(function($) {
    $.fn.alterCheckBox = function(options){
        //设置默认值
        options=$.extend({
            checked:"checked",  /* 默认选中样式*/
            unchecked:"unchecked" /* 默认未选中样式*/
        },options);

        $(this).hide();

        // 获取checkbox的属性，并生成新的结构
        var $checkbox = $(this);
        var len = $checkbox.length;

        for (var i = 0; i < len; i++) {
            var $checkboxi = $checkbox.eq(i),
                ischecked  = $checkboxi.is(":checked"),
                text;

            if (ischecked) {
                text = '<span class="altercheckbox-'+options.checked+' '+options.checked+'"></span>';
            } else{
                text = '<span class="altercheckbox-'+options.checked+' '+options.unchecked+'"></span>';
            }

            $checkbox.eq(i).after(text);
        }

        $("body").on("click",(".altercheckbox-"+options.checked),function(){
            var $prev      = $(this).prev($checkbox),
                ischecked  = $prev.is(":checked");

            if (ischecked) {
                $(this).addClass(options.unchecked).removeClass(options.checked);
                $prev.attr("checked",false)
            } else{
                $(this).addClass(options.checked).removeClass(options.unchecked);
                $prev.attr("checked",true)
            }
        });
    }
})(jQuery);