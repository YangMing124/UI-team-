var time=null;
var timer=null;
var left=2;
window.onload=function(){
    time=setInterval(function move(){
        // console.log(left);
        left=left-2;
        var left1=left+'px';
        document.getElementById("turn").style.marginLeft=left1;
        if(left%(-500)==0&&left!=0)
        {
            window.clearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },500);
        }
        if(left==0)
        {
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio15").style.background="white";
            document.getElementById("radio13").style.background="white";
            document.getElementById("radio11").style.background="grey";
            document.getElementById("radio12").style.background="white";
            window.clearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },500);
        }
        if(left==-500)
        {
            document.getElementById("radio13").style.background="white";
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio15").style.background="white";
            document.getElementById("radio11").style.background="white";
            document.getElementById("radio12").style.background="grey";
        }
        if(left==-1000)
        {
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio15").style.background="white";
            document.getElementById("radio11").style.background="white";
            document.getElementById("radio12").style.background="white";
            document.getElementById("radio13").style.background="grey";
        }
        if(left==-1500)
        {
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio15").style.background="white";
            document.getElementById("radio11").style.background="white";
            document.getElementById("radio13").style.background="white";
            document.getElementById("radio14").style.background="grey";
        }
        if(left==-2000)
        {
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio12").style.background="white";
            document.getElementById("radio11").style.background="white";
            document.getElementById("radio15").style.background="grey";
            document.getElementById("radio13").style.background="white";
        }
        if(left==-2498)
        {
            ocument.getElementById("radio13").style.background="white";
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio15").style.background="white";
            document.getElementById("radio11").style.background="grey";
            document.getElementById("radio12").style.background="white";
        }
        if(left==500)
        {
            document.getElementById("radio14").style.background="white";
            document.getElementById("radio12").style.background="white";
            document.getElementById("radio11").style.background="white";
            document.getElementById("radio15").style.background="grey";
            document.getElementById("radio13").style.background="white";
        }
        if(left<-2500)
        {
            left=0;
            window.clearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },500);
        }
        rightgo=function(){
            var a=left%500;
            left=left-a;
            left=left-498;
            if(left==-2000)
            {
                left=2;
            }
            left1=left+'px';
            ClearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
            window.clearInterval(time);
        }
        leftgo=function(){
            var a=left%500;
            left=left-a;
            left=left+502;
            if(left==0)
            {
                left=-1998;
            }
            left1=left+'px';
            ClearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
        }
        r1=function(){
            left=2;
            left1=left+'px';
            ClearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
        }
        r2=function(){
            left=-498;
            left1=left+'px';
            ClearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
        }
        r3=function(){
            left=-998;
            left1=left+'px';
            ClearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
        }
        r4=function(){
            left=-1498;
            left1=left+'px';
            ClearInterval(time);
            timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
        }
        r5=function(){
            left=-1998;
            left1=left+'px';
            ClearInterval(time);
                timer=window.setTimeout(function(){
                time=window.setInterval(move,1)
            },50);
        }
    },1);
}