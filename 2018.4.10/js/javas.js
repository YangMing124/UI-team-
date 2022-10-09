function add(){
    var one=document.getElementById("first").value;
    var two=document.getElementById("second").value;
    var re=parseInt(one)+parseInt(two);
    re=document.getElementById("result").value=re;
    document.getElementById("first").value="";
    document.getElementById("second").value="";
}
function subtraction(){
    var one=document.getElementById("first").value;
    var two=document.getElementById("second").value;
    var re=parseInt(one)-parseInt(two);
    re=document.getElementById("result").value=re;
    document.getElementById("first").value="";
    document.getElementById("second").value="";
}
function multiplication(){
    var one=document.getElementById("first").value;
    var two=document.getElementById("second").value;
    var re=parseInt(one)*parseInt(two);
    re=document.getElementById("result").value=re;
    document.getElementById("first").value="";
    document.getElementById("second").value="";
}
function division(){
    var one=document.getElementById("first").value;
    var two=document.getElementById("second").value;
    if(parseInt(two)==0)
    {
        alert("wrong!");
        document.getElementById("second").value="";
    }
    else
    {
        var re=parseInt(one)/parseInt(two);
        re=document.getElementById("result").value=re;
        document.getElementById("first").value="";
        document.getElementById("second").value="";
    }
}