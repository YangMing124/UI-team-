function node(num,name,sex,age,grade){
    this.num=num;
    this.name=name;
    this.sex=sex;
    this.age=age;
    this.grade=grade;
}
var b=[];
var content=document.getElementById("contents");
// 1.加入元素//
function add(){
    var stu1=document.getElementById("text1").value;
    var stu2=document.getElementById("text2").value;
    var stu3=document.getElementById("text3").value;
    var stu4=document.getElementById("text4").value;
    var stu5=document.getElementById("text5").value;
    if(stu1==""||stu2==""||stu3==""||stu4==""||stu5=="")
        alert("请输入全部数据!");
    else if(stu1.length>8||stu2.length>8||stu3.length>8||stu4.length>8||stu5.length>8)
        alert("请输入少于8个字符")
    else
    {
        var a=new node(stu1,stu2,stu3,stu4,stu5);
        b.push(a);
        content.innerHTML+="<div id=\"hh\">"+"<input type=\"checkbox\" id=\"check\" name=\"checkbox\">"+"<div id=\"one\">"+a.num+"</div>"+"<div id=\"two\">"+a.name+"</div>"+
        "<div id=\"three\">"+a.sex+"</div>"+"<div id=\"four\">"+a.age+"</div>"+"<div id=\"five\">"+a.grade+"</div>"+"</div>";
    }
    document.getElementById("text1").value="";
    document.getElementById("text2").value="";
    document.getElementById("text3").value="";
    document.getElementById("text4").value="";
    document.getElementById("text5").value="";
    //按学号排序
    snum=function(){
        b.sort(compare);
        function compare(n1,n2){
            return n1.num-n2.num;
        }
        content.innerHTML="";
        for(var i=0;i<b.length;i++)
        {
            content.innerHTML+="<div id=\"hh\">"+"<input type=\"checkbox\" id=\"check\">"+"<div id=\"one\">"+b[i].num+"</div>"+"<div id=\"two\">"+b[i].name+"</div>"+
            "<div id=\"three\">"+b[i].sex+"</div>"+"<div id=\"four\">"+b[i].age+"</div>"+"<div id=\"five\">"+b[i].grade+"</div>"+"</div>";
        }
    }
    //按名字排序
    first=function(){
        b.sort(compare1);
        function compare1(h1,h2){
            return h1.name.localeCompare(h2.name);
        }
        content.innerHTML="";
        for(var i=0;i<b.length;i++)
        {
            content.innerHTML+="<div id=\"hh\">"+"<input type=\"checkbox\" id=\"check\">"+"<div id=\"one\">"+b[i].num+"</div>"+"<div id=\"two\">"+b[i].name+"</div>"+
            "<div id=\"three\">"+b[i].sex+"</div>"+"<div id=\"four\">"+b[i].age+"</div>"+"<div id=\"five\">"+b[i].grade+"</div>"+"</div>";
        }
    }
    //搜索学号
    number=function(){
        var c=0;
        var stu1=document.getElementById("text1").value;
        for(var i=0;i<b.length;i++)
        {
            if(stu1==b[i].num)
            {
                c++;
                break;
            }
        }
        if(c==0){
            alert("没有该学生，请重新输入!");
        }
        else{
            content.innerHTML="";
            content.innerHTML+="<div id=\"hh\">"+"<input type=\"checkbox\" id=\"check\">"+"<div id=\"one\">"+b[i].num+"</div>"+"<div id=\"two\">"+b[i].name+"</div>"+
            "<div id=\"three\">"+b[i].sex+"</div>"+"<div id=\"four\">"+b[i].age+"</div>"+"<div id=\"five\">"+b[i].grade+"</div>"+"</div>";
        }
    }
    //年级搜索
    grade=function(){
        var c=0;
        var stu1=document.getElementById("text1").value;
        var nstu=String(stu1).substring(0,4);
        console.log(nstu);
        content.innerHTML="";
        for(var i=0;i<b.length;i++)
        {
            var every=String(b[i].num).substring(0,4);
            console.log(every);
            if(nstu==every)
            {
                c++;
                content.innerHTML+="<div id=\"hh\">"+"<input type=\"checkbox\" id=\"check\">"+"<div id=\"one\">"+b[i].num+"</div>"+"<div id=\"two\">"+b[i].name+"</div>"+
                "<div id=\"three\">"+b[i].sex+"</div>"+"<div id=\"four\">"+b[i].age+"</div>"+"<div id=\"five\">"+b[i].grade+"</div>"+"</div>";
            }
        }
        if(c==0)
            alert("查找错误！请重新查找！");
    }
    //全选
    allcheck=function(){   
        for(var i=0;i<=b.length;i++){  
            content.children[i].children[0].checked=true;  
        }     
    }
    del=function(){
        var stu1=document.getElementById("text1").value;
        for(var i=0;i<b.length;i++)
        {
            console.log(b[i].num);
            if(stu1==b[i].num)
            {
                b.splice(i,1);
                i--;
            }
        }
        console.log(b);
        content.innerHTML="";
        for(var j=0;j<b.length;j++)
        {
            content.innerHTML+="<div id=\"hh\">"+"<input type=\"checkbox\" id=\"check\">"+"<div id=\"one\">"+b[j].num+"</div>"+"<div id=\"two\">"+b[j].name+"</div>"+
            "<div id=\"three\">"+b[j].sex+"</div>"+"<div id=\"four\">"+b[j].age+"</div>"+"<div id=\"five\">"+b[j].grade+"</div>"+"</div>";
        }
    }
}
