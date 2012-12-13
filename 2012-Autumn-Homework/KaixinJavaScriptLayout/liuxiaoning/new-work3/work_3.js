
 
      function out_email()
      {
         div_yincang_password.style.display="none";
         div_yincang_name.style.display="none";
         div_yincang_email.style.display="block";
        div1.style.display="none";
      }
      function out_email2()
      {
      div_yincang_password.style.display="none";
       div_yincang_name.style.display="none";
      div1.style.display="block";
      }
      function out_password()
      {
           var str_password ;
           str_password=text_password.value;
           if(str_password.length==0)
                {
                  div_yincang_name.style.display="none";
                  div_yincang_email.style.display="none";
                  div_yincang_password.style.display="block";
                  div1.style.display="none";
                  }
                else  
                   div_yincang_password.style.display="none";
      }
      function out_name()
      {
         var str_name;
         str_name=text_name.value;
         if(str_name==0)
         {
            div_yincang_password.style.display="none";
            div_yincang_email.style.display="none";
            div_yincang_name.style.display="block";
            div1.style.display="none";
            }
           else 
               div_yincang_name.style.display="none";
      }
      function zhuanhuan1()
      {
      li_two.style.display="block";
      li_one.style.display="none";
      }
      function zhuanhuan2()
      {
      li_one.style.display="block";
      li_two.style.display="none";
      }
      function xiaoshi()
      {
            div_yincang_password.style.display="none";
         div_yincang_name.style.display="none";
         div_yincang_email.style.display="none";
        div1.style.display="none";
        
      }
      function out_tutu01()
      {
          tutu01.style.display="block";
      }
      function change_email()
      {
           div_email_change.style.display="block";
          aa01.innerHTML=text_email01.value+"@qq.com";
           aa02.innerHTML=text_email01.value+"@163.com";
           aa03.innerHTML=text_email01.value+"@sina.com";
           aa04.innerHTML=text_email01.value+"@sina.cn";
           aa05.innerHTML=text_email01.value+"@hotmail.com";
           aa06.innerHTML=text_email01.value+"@gmail.com";
           aa07.innerHTML=text_email01.value+"@sohu.cn";
           aa08.innerHTML=text_email01.value+"@yahoo.cn";
           aa09.innerHTML=text_email01.value+"@139.cn";
           
      }
  
     //-----------------------
     function mail_turnNone()
    {
        var temp=document.getElementById('text_email01').value;
         document.getElementById('div_yincang_email').style.display = "none";
          //* 判断邮箱是否符合格式要求
         if(IsEmail(temp)&&(!IsEmpty(temp)))
         {
            document.getElementById('tutu0000').style.display = "block";
           document.getElementById('div_yincang_email').style.display = "none";
           document.getElementById('div_jiance_email').style.display = "none";
          }
        else if(IsEmpty(temp))
         {
             document.getElementById('tutu0000').style.display = "none";
             document.getElementById('div_yincang_email').style.display = "block";
              document.getElementById('div_jiance_email').style.display = "none";
         }
         else
        {
            document.getElementById('div_yincang_email').style.display = "none";
            document.getElementById('div_jiance_email').style.display = "block";
           document.getElementById('tutu0000').style.display = "none";
        }
      }

//****************************************************************
//* 名　　称：IsEmail
//* 功    能：判断是否为正确的Email地址
//* 入口参数：fData：要检查的数据
//* 出口参数：True：正确的Email地址，或者空                              
//*           False：错误的Email地址
//*****************************************************************
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
//****************************************************************
//* 名　　称：IsEmpty
//* 功    能：判断是否为空
//* 入口参数：fData：要检查的数据
//* 出口参数：True：空                              
//*           False：非空
function IsEmpty(fData)
{
    return ((fData==null) || (fData.length==0) )
}
     //----------------------
     function jiance_password()
     {
        var str_password=text_password.value;
        if(str_password.length<6 &&str_password.length!=0 )
             div_jiance_password.style.display="block";
             else
               div_jiance_password.style.display="none";
               if(str_password.length>=6)
                  tutu000.style.display="block";
                  else
                     tutu000.style.display="none";
        
     }
       function jiance_name()
       {
            var str_name=text_name.value;
                if(str_name.length<6 &&str_name.length!=0 )
                   {div_jiance_name.style.display="block";
                   tutu00.style.display="none";}
             else
               div_jiance_name.style.display="none";
               if(str_name.length>=6)
                   tutu00.style.display="block";
       }
       function jiance_birthday()
       {
           if(select_year.value!="请选择" && select_month.value!="--" && select_day.value!="--" )
                 tutu02.style.display="block";
               else 
                   tutu02.style.display="none";
       }
       function jiance_address()
       {
            tutu04.style.display="block";
       }
       function bianse_zhuce()
       {
            div_zhuce.style.backgroundColor="#E7454F";
            div_zhuce.style.color="#FFFFFF";
            
            
       }
       function fanhui_zhuce()
       {
             div_zhuce.style.backgroundColor="#DB3741";
            div_zhuce.style.color="#FAD9DB";
           
       }
       function bianse_bangzhu()
       {
            div_bangzhu.style.backgroundColor="#E7454F";
            div_bangzhu.style.color="#FFFFFF";
          
       }
       function fanhui_bangzhu()
       {
             div_bangzhu.style.backgroundColor="#DB3741";
            div_bangzhu.style.color="#FAD9DB";
           
       }
       function bianse_daohang()
       {
            div_daohang.style.backgroundColor="#E7454F";
            div_daohang.style.color="#FFFFFF";
            action_top_right.style.display="block";
       }
       function fanhui_daohang()
       {
             div_daohang.style.backgroundColor="#DB3741";
            div_daohang.style.color="#FAD9DB";
            action_top_right.style.display="none";
       }
      function bianse_denglu()
       {
            div_denglu.style.backgroundColor="#E7454F";
            div_denglu.style.color="#FFFFFF";
            
       }
       function fanhui_denglu()
       {
             div_denglu.style.backgroundColor="#DB3741";
            div_denglu.style.color="#FAD9DB";
           
       }
       
       
       function _bgcolor(temp)
{
    switch(temp)
    {
        case 1:document.getElementById("phone").style.background="rgb(235,75,85)";break;
        case 2:document.getElementById("zhuantie").style.background="rgb(235,75,85)";break;
        case 3:document.getElementById("vote").style.background="rgb(235,75,85)";break;
        case 4:document.getElementById("log").style.background="rgb(235,75,85)";break;
        case 5:document.getElementById("topic").style.background="rgb(235,75,85)";break;
        case 6:document.getElementById("shopping").style.background="rgb(235,75,85)";break;
        case 7:document.getElementById("games").style.background="rgb(235,75,85)";break;
        case 8:document.getElementById("prinsiple").style.background="rgb(235,75,85)";break;
        case 9:document.getElementById("animal").style.background="rgb(235,75,85)";break;
        case 10:document.getElementById("photo").style.background="rgb(235,75,85)";break;
        case 11:document.getElementById("evaluate").style.background="rgb(235,75,85)";break;
        case 12:document.getElementById("movie").style.background="rgb(235,75,85)";break;
        case 13:document.getElementById("video").style.background="rgb(235,75,85)";break;
        case 14:document.getElementById("jipin").style.background="rgb(235,75,85)";break;
        case 15:document.getElementById("webgame").style.background="rgb(235,75,85)";break;
        case 16:document.getElementById("socialgame").style.background="rgb(235,75,85)";break;
        case 17:document.getElementById("meike").style.background="rgb(235,75,85)";break;
        case 18:document.getElementById("bargin").style.background="rgb(235,75,85)";break;
    }
}
function _bgcolor_cancel(temp)
{
    switch(temp)
    {
        case 1:document.getElementById("phone").style.background="#FAFAFA";break;
        case 2:document.getElementById("zhuantie").style.background="#FAFAFA";break;
        case 3:document.getElementById("vote").style.background="#FAFAFA";break;
        case 4:document.getElementById("log").style.background="#FAFAFA";break;
        case 5:document.getElementById("topic").style.background="#FAFAFA";break;
        case 6:document.getElementById("shopping").style.background="#FAFAFA";break;
        case 7:document.getElementById("games").style.background="#FAFAFA";break;
        case 8:document.getElementById("prinsiple").style.background="#FAFAFA";break;
        case 9:document.getElementById("animal").style.background="#FAFAFA";break;
        case 10:document.getElementById("photo").style.background="#FAFAFA";break;
        case 11:document.getElementById("evaluate").style.background="#FAFAFA";break;
        case 12:document.getElementById("movie").style.background="#FAFAFA";break;
        case 13:document.getElementById("video").style.background="#FAFAFA";break;
        case 14:document.getElementById("jipin").style.background="#FAFAFA";break;
        case 15:document.getElementById("webgame").style.background="#FAFAFA";break;
        case 16:document.getElementById("socialgame").style.background="#FAFAFA";break;
        case 17:document.getElementById("meike").style.background="#FAFAFA";break;
        case 18:document.getElementById("bargin").style.background="#FAFAFA";break;
    }
}
      
  
  