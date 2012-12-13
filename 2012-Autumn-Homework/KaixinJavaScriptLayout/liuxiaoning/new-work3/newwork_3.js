window.addEvent =function(element,event,fn){
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
     element.attachEvent("on"+event, function(){ fn.call(o) });
     
   }
}
function tip(title,isInfo,id)
{
  this.title=title;
  this.isInfo=isInfo;
  this.tipDom=document.getElementById(id);
}


function xiaoshi()
{
    
     div_email_change.style.display='none';
}


function prepareTip()
 {
	var txt=document.getElementById("txt_email");
	window.addEvent(txt,'blur',blurFn);
	window.addEvent(txt,'focus',focusFn);
	window.addEvent(txt,'keyup',change_email);
	var n=document.getElementById("txt_name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("txt_password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	var a=document.getElementById("select_year");
	window.addEvent(a,'change',jiance_birthday);
	var b=document.getElementById("select_month");
	window.addEvent(b,'change',jiance_birthday);
	var c=document.getElementById("select_day");
	window.addEvent(c,'change',jiance_birthday);
	var d=document.getElementById("div_daohang");
	window.addEvent(d,'mouseover',bianse);
	window.addEvent(d,'mouseout',fanhui);
	var e=document.getElementById("div_bangzhu");
	window.addEvent(e,'mouseover',bianse);
	window.addEvent(e,'mouseout',fanhui);
	var f=document.getElementById("div_zhuce");
	window.addEvent(f,'mouseover',bianse);
	window.addEvent(f,'mouseout',fanhui);
	var g=document.getElementById("div_denglu");
	window.addEvent(g,'mouseover',bianse);
	window.addEvent(g,'mouseout',fanhui);
	var h=document.getElementById("div_daohang");
	window.addEvent(h,'mouseover',daohang_chuxian);
 }
 function blurFn()
 {
	var title;
	switch(this.id)
	{
	  case "txt_email":
	       mail_turnNone();
		   txt_email_yincang.style.display="none";
		   
		   break;
	  case "txt_password":
	       jiance_password();
		   txt_password_yincang.style.display="none";
		   
		   break;
	  case "txt_name":
	       jiance_name();
		   txt_name_yincang.style.display="none";
		   
		   break;
	}
	
	
 }

 function focusFn()
 {
	var title;
	switch(this.id)
	{
	  case "txt_email":
		   
		   mail_turnNone();
		  
		   break;
	  case "txt_password":
		   jiance_password();
		   	 
		   break;
	  case "txt_name":
		  jiance_name();
		   break;
	}
 }
 //EMAIL输入时的选择框
  function change_email()
      {
           div_email_change.style.display="block";
          aa01.innerHTML=txt_email.value+"@qq.com";
           aa02.innerHTML=txt_email.value+"@163.com";
           aa03.innerHTML=txt_email.value+"@sina.com";
           aa04.innerHTML=txt_email.value+"@sina.cn";
           aa05.innerHTML=txt_email.value+"@hotmail.com";
           aa06.innerHTML=txt_email.value+"@gmail.com";
           aa07.innerHTML=txt_email.value+"@sohu.cn";
           aa08.innerHTML=txt_email.value+"@yahoo.cn";
           aa09.innerHTML=txt_email.value+"@139.cn";
           
      }
   //检测EMAIL的格式是否正确
        //-----------------------
     function mail_turnNone()
    {
        var temp=document.getElementById('txt_email').value;
         document.getElementById('txt_email_yincang').style.display = "none";
          //* 判断邮箱是否符合格式要求
         if(IsEmail(temp)&&(!IsEmpty(temp)))
         {
            document.getElementById('tutu0000').style.display = "block";
           document.getElementById('txt_email_yincang').style.display = "none";
           document.getElementById('div_jiance_email').style.display = "none";
          }
        else if(IsEmpty(temp))
         {
             document.getElementById('tutu0000').style.display = "none";
             document.getElementById('txt_email_yincang').style.display = "block";
              document.getElementById('div_jiance_email').style.display = "none";
         }
         else
        {
            document.getElementById('txt_email_yincang').style.display = "none";
            document.getElementById('div_jiance_email').style.display = "block";
           document.getElementById('tutu0000').style.display = "none";
        }
      }

function IsEmail(fData)
{
    if (IsEmpty(fData))
        return true
    if (fData.indexOf("@")==-1)
        return false
    var NameList=fData.split("@");
    if (NameList.length!=2)
        return false 
    if (NameList[0].length<1 )
        return false   
    if (NameList[1].indexOf(".")<=0)
        return false 
    if (fData.indexOf("@")>fData.indexOf(".")) 
        return false
    if (fData.indexOf(".")==fData.length-1)
        return false
    return true    
}

function IsEmpty(fData)
{
    return ((fData==null) || (fData.length==0) )
}
     //------------------------------------------------------------
     
     //检测输入的密码是否正确
      function jiance_password()
     {
        var str_password=txt_password.value;
         if(str_password.length==0)
                 { txt_email_yincang.style.display="none";
		          txt_password_yincang.style.display="block";
		          txt_name_yincang.style.display="none";}
                 else 
                 {
                   if(str_password.length<6 &&str_password.length!=0 )
                    div_jiance_password.style.display="block";
                  else
                      div_jiance_password.style.display="none";
                     if(str_password.length>=6)
                        tutu000.style.display="block";
                        else
                          tutu000.style.display="none";
                    }
        
     }
     // 检测输入的姓名是否正确
      function jiance_name()
       {
            var str_name=txt_name.value;
            if(str_name.length==0)
               {
                    txt_email_yincang.style.display="none";
		            txt_password_yincang.style.display="none";
		            txt_name_yincang.style.display="block";
		            tutu00.style.display="none";
		            div_jiance_name.style.display="none";
               }
           
                     else{                          var temp=document.getElementById("txt_name").value;                 var   result=temp.charCodeAt(temp.length-1)>=10000 ;              
                  if(result==true)
                {
                     tutu00.style.display="block";
		            div_jiance_name.style.display="none";
                }
                else 
                {
                    tutu00.style.display="none";
		            div_jiance_name.style.display="block";
                }
                
                }
       }
   //检测生日  的格式是否正确
   
   function jiance_birthday()
       {
           if(select_year.value!="请选择" && select_month.value!="--" && select_day.value!="--" )
                 tutu02.style.display="block";
               else 
                   tutu02.style.display="none";
       }
       //右上角
       function bianse()
       {
           this.style.backgroundColor="#E7454F";
       }
       function fanhui()
       {
           this.style.backgroundColor="#DB3741";
       }
       //导航栏里面的背景变换
       function _bgcolor(e)
       {   
             e.style.background="rgb(235,75,85)";
       }
       function _bgcolor_cancel(e)
       {
           e.style.background="#FAFAFA";
       }
       function daohang_chuxian()
       {
              action_top_right.style.display="block";
       }