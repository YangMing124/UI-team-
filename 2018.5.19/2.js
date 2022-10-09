var a=[];
var a1=[];
var len=document.getElementById("first").children.length;
for(var i=0;i<len;i++)
{
    a[i]=document.getElementById("first").children[i].innerHTML;//获取整体的内容
    a1[i]=a[i].split(": ");//根据括号内的东西进行划分
}
function pai(){
    a1.sort(function compare(a,b){
        return a[1]-b[1];
    });//根据二维数组排序
    for(var i=0;i<len;i++)
    {
        document.getElementById("second").children[i].innerHTML=a1[i][0];
        document.getElementById("second").children[i].innerHTML+=a1[i][1];
    }
}