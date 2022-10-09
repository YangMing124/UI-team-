function mysubmit(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var realname=document.getElementById("realname").value;
    var rpassword=document.getElementById("rpassword").value;
    var type=document.getElementById("type").value;
    var date=document.getElementById("date").value;
    var number=document.getElementById("number").value;
    var country=document.getElementById("country").value;
    var phone=document.getElementById("phone").value;
    var city=document.getElementById("city").value;
    var telephone=document.getElementById("telephone").value;
    var mail=document.getElementById("mail").value;
    var post=document.getElementById("post").value;
    var address=document.getElementById("address").value;
    var sex=document.getElementsByName("xb");
    for(var i=0;i<2;i++)
    {
        if(sex[i].checked)
        {
            alert("用户名:"+name+"\n"
                +"密码:"+password+"\n"
                +"确认密码:"+rpassword+"\n"
                +"证件类型:"+type+"\n"
                +"出生日期:"+date+"\n"
                +"证件号码:"+number+"\n"
                +"联系号码:"+phone+"\n"
                +"手机号码:"+telephone+"\n"
                +"E-mail:"+mail+"\n"
                +"真实姓名:"+realname+"\n"
                +"性别:"+sex[i].value+"\n"
                +"证件类型:"+country+"\n"
                +"城市:"+city+"\n"
                +"邮编:"+post+"\n"
                +"地址:"+address);
        }
    }
}