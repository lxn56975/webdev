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
tip.prototype=(function()
{
	//���ɺ��ʵ�Tip���ڲ�����
    function genTip(tipDomObject,title,isInfo)
	{
     tipDomObject.className="tipFormat";
     if(isInfo===false)
      tipDomObject.innerHTML="<img src='error.gif' /><span>"  + title + "</span>";
	 else
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	}
	//������ �����ڴ˴�Ӧ��this
	//alert(this.title+" in closure");
	return {
        showTip:function()
		{
			genTip(this.tipDom,this.title,this.isInfo);
            //alert(this.tipDom.innerHTML);
			this.tipDom.style.display="block";
		},
		hideTip:function()
		{
            this.tipDom.style.display="none";
		}
	}
})();



function prepareTip()
 {
	var e=document.getElementById("email");
	window.addEvent(e,'blur',blurFn);
	window.addEvent(e,'focus',focusFn);
	/* ��ʱע����
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	*/
 }
 function blurFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="�����ʽ����";
		   break;
	  case "password":
		   title="���벻��";
		   break;
	  case "name":
		   title="����������Ҫ��";
		   break;
	}
	var t=new tip(title,false,this.id+"tip");
	//�ȹر�ԭ����info tip
	t.hideTip();
	//����д����ʱ���� error tip
	if(checkFormat(this))
	t.showTip();
 }
 function checkFormat(o)
 {
	// o ��Ҫ����ʽ��dom����
	return true;
 }
 function focusFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="����������";
		   break;
	  case "password":
		   title="����������";
		   break;
	  case "name":
		   title="����������";
		   break;
	}
	var t=new tip(title,true,this.id+"tip");
	t.showTip();
 }