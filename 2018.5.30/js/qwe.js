function addElventHandlder(ele,event,handlder){
    ele.addEventListener(event,handlder,false);
}
window.onload=function(){
    var text=document.getElementById("number");
    var display=document.getElementById("display");
    function show(){
        sh=document.getElementById("display");
        sh.innerHTML="";
        for(var i=0;i<str.length;i++)
        {
            sh.innerHTML+='<div id="d">'+str[i]+'</div>';
        }
    }
    var duilie={
        var:str=[],
        leftin:function(){
            var a=document.getElementById("number").value;
            str.unshift(a);
            show();
        },
        rightin:function(){
            var a=document.getElementById("number").value;
            str.push(a);
            show();
        },
        leftout:function(){
            str.shift();
            show();
        },
        rightout:function(){
            str.pop();
            show();
        }
    }
    addElventHandlder(all.children[1],"click",function(){
        duilie.leftin();
    })
    addElventHandlder(all.children[2],"click",function(){
        duilie.rightin();
    })
    addElventHandlder(all.children[3],"click",function(){
        duilie.leftout();
    })
    addElventHandlder(all.children[4],"click",function(){
        duilie.rightout();
    })
}