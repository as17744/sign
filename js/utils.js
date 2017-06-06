var utils={
    addHandler:function(event,type,handler){
        if(event.addEventListener){
            event.addEventListener(type,handler);
        }
        else if(event.attachEvent){
            event.attachEvent("on"+type,handler);
        }
        else{
            event["on"+type]=handler;
        }
    }
};/**
 * Created by Gerald on 2017/4/17.
 */
