var x=document.getElementById("first");
var y=document.getElementsByTagName("div");
var i=0;
var k=0;
function go(){
    k=k+parseInt(x.value);
    for(;i<k;i++)
    {
        y[i].style.backgroundColor="red";
    }
    
}
