var count= [];//记录每次点击的数
var flag=0;//容错
var op;//记录操作符
function Clear(){
    var display=document.getElementById("show");
    display.value="";
    return 0;
}
function Delete(){
    var display=document.getElementById("show");
    var results="";
    for(var i=0;i<display.value.length-1;i++){
        results+=display.value[i];
    }
    display.value=results;
}
function Button(num){
    var display=document.getElementById("show");
    var number=num.value;
    if(number==".")
    {
        for(var i=0;i<display.value.length;i++)
        {
            if(display.value[i]=="."){
                alert("已经点过了，请重新检查！");
                return 0;
            }
        }
    }
    display.value+=number;
}
function Do(operator){
    var display=document.getElementById("show");
    if(display.value=="")
    {
        alert("请输入数字计算!运算符不要多点！");
        return 0;
    }
    else{
        console.log(flag);
        if(flag==0)
        {
            count.push(display.value);
            display.value="";
            console.log(display.value);
            op=operator.value;
            flag=1;
        }
    }
}
function To(){
    var display=document.getElementById("show");
    if(display.value=="")
    {
        alert("请点击数字运算");
        return 0;
    }
    else
    {
        count.push(display.value);
        display.value=more(op);
        flag=0;
        op="";
    }
}
function more(name){
    var results;
    switch(name){
        case '+':
            results=parseFloat(count[0])+parseFloat(count[1]);
            break;
        case '-':
            results=parseFloat(count[0])-parseFloat(count[1]);
            break;
        case '*':
            results=parseFloat(count[0])*parseFloat(count[1]);
            break;
        case '/':
            if(parseFloat(count[1])!=0){
                results=parseFloat(count[0])/parseFloat(count[1]);
                break;    
            }
            else{
                alert("不许除0！");
                return 0;
            }
            break;
        }
    count=[];
    return results.toFixed(2);
}