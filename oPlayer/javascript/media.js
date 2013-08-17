/**
 * Created with JetBrains WebStorm.
 * User: yimity
 * Date: 13-8-17
 * Time: 下午8:53
 * To change this template use File | Settings | File Templates.
*/
var oPlayer = {
    id : null,
    $ : function(elm){
        return document.getElementById(elm);
    },
    oPlay : function(elm){
        this.id.play();
    },
    oPause : function(elm){
        this.id.pause();
    },
    init : function(elm){
        this.id = this.$(elm)
    },
    oNext : function(){

    }














}