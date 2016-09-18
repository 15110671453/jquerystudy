

$(function(){

/*
从最上层的视图小范围 往下层的视图冒泡 
多个层都有点击事件 冒泡 会导致事件响应混乱
*/
	$('span').click(function(e){
		// e.stopPropagation();//阻止冒泡行为
         alert('span');
	});

   $('div').click(function(e){
   		// e.stopPropagation();//阻止冒泡行为
         alert('div');
	});


   /*
	系统 标签的 一些默认行为 阻止
	比如 我们超链接 不跳转页面 给弹窗
   */

   $('a').click(function(e){
      e.preventDefault();//阻止默认行为
      e.stopPropagation();
   	alert('不跳转 阻止超链接的默认行为 跳转行为');
   
   })

   $('a').click(function(e){
    
   		alert(e.isDefaultPrevented());
   	alert(e.isPropagationStopped());
   
   })
   /*阻止冒泡 以及后续事件 －－－－*/

   

   /*
   提交表单 

	form action 需要一个页面 不设置 就是提交本页面

   */

   // $('form').submit(function(e){

   // 	   e.preventDefault();//阻止默认行为
   // 	   alert('阻止表单提交');
   // });





});