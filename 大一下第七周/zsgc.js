var a=1;
var zifu="xiug";
var zz="dier";
var ff="disan";
var zf="disi";
function add(){
    var first=document.getElementById("fir");//获取第一个input的值
    var second=document.getElementById("sec");//第二个input的值
    var third=document.getElementById("thir");//第三个
    var fourth=document.getElementById("thue");//第四个
    var b=document.createElement("div");//创建一个每一行div
    var c=document.createElement("div");//每一行div里展示的div
    var d=document.createElement("div");//添加按钮的div
    var oth=document.getElementById("other");//获得需要添加孩子的div
    oth.appendChild(b);
    b.appendChild(c);
    b.appendChild(d);
    b.id="al";//给每一行的div class
    c.className="show";//给展示div class
    d.className="bu";
    var ainput1=document.createElement("input");//建立show里的input
    c.appendChild(ainput1);
    ainput1.className="ainput";
    ainput1.id=zifu+a;
    var tao1=ainput1.id;
    ainput1.value=first.value;
    var ainput2=document.createElement("input");
    c.appendChild(ainput2);
    ainput2.className="ainput";
    ainput2.id=zz+a;
    ainput2.value=second.value;
    var ainput3=document.createElement("input");
    c.appendChild(ainput3);
    ainput3.className="ainput";
    ainput3.id=ff+a;
    ainput3.value=third.value;
    var ainput4=document.createElement("input");
    c.appendChild(ainput4);
    ainput4.className="ainput";
    ainput4.id=zf+a;
    ainput4.value=fourth.value;
    var xin=document.getElementsByClassName("show");//获取展示div
    xin.innerText=first.value;//为展示div赋值
    var but1=document.createElement("input");//建立修改button
    var but2=document.createElement("input");//建立删除button
    var but3=document.createElement("input");
    d.appendChild(but1);
    but1.setAttribute("type","button");
    but1.setAttribute("value","删除");
    but1.setAttribute("onclick","dele(this);");
    but1.className="two";
    d.appendChild(but2);
    but2.setAttribute("type","button");
    but2.setAttribute("value","修改");
    but2.setAttribute("onclick","change(this);");
    but2.className="two";
    but2.id=zifu+a;
    d.appendChild(but3);
    but3.setAttribute("type","button");
    but3.setAttribute("value","保存");
    but3.setAttribute("onclick","save(this);");
    but3.className="two";
    document.getElementById(zifu+a).readOnly=true;
    document.getElementById(zz+a).readOnly=true;
    document.getElementById(ff+a).readOnly=true;
    document.getElementById(zf+a).readOnly=true;
    first.value="";
    second.value="";
    third.value="";
    fourth.value="";
    a++;
}
    //传参找到他的父亲删除他
function dele(Bede){
        var par=Bede.parentNode.parentNode;//找到整体div  al
        var shan=document.getElementById("other");//整体div的父亲
        shan.removeChild(par);//整体div的父亲删除孩子div
    }
function change(that){
    var i=0;
    var hh=that.parentNode.parentNode;
    hh.style.background="rgb(67, 170, 238)";
    var hate1=hh.firstChild.children[0];
    hate1.readOnly=false;
    hate1.value="";
    var hate2=hh.firstChild.children[1];
    hate2.readOnly=false;
    hate2.value="";
    var hate3=hh.firstChild.children[2];
    hate3.readOnly=false;
    hate3.value="";
    var hate4=hh.firstChild.children[3];
    hate4.readOnly=false;
    hate4.value="";
    i++;
}
function save(thatw){
    var hh=thatw.parentNode.parentNode;
    hh.style.background="rgb(67, 170, 238)";
    var hate1=hh.firstChild.children[0];
    hate1.readOnly=true;
    var hate2=hh.firstChild.children[1];
    hate2.readOnly=true;
    var hate3=hh.firstChild.children[2];
    hate3.readOnly=true;
    var hate4=hh.firstChild.children[3];
    hate4.readOnly=true;
    var hah=thatw.parentNode.parentNode;
    hah.style.background="rgb(155, 204, 236)";
}