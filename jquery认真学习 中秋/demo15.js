/*
	javascript 使用事件行为 要封装

	jquery帮我们做了很多封装

	比如 单击 双击 

	click dbclick mousedown mouseup

	mouseover mouseout change select
	submit keydown keypress keyup
	blur focus load resize scroll
	error

	jquery是通过.bind方法 来为元素绑定事件
	 可以传递三个参数 第二个参数是可选的
	bind(type ,[data],fn);



*/


$(function(){

//第一种方式
	 // $('input').bind('click',function(){


	 // 	alert('dianjile ');
	 // })


//第2种方式
	 // $('input').bind('click',fn);


	 // function fn()
	 // {
	 // 	alert('执行');
	 // }


//第三种方式

     // $('input').bind('click mouseover',function(){


     // 	alert('两个行为');
     // });

//第四种方式

     // $('input').bind('mouseover mouseout',function(){
     // 	$('div').html(function(index,value){

     // 		return value + '1';
     // 	})

     // });
//第五种方式


	  // $('input').bind({

	  // 	'mouseover':function(){
	  // 		alert('移入');
	  // 	},
	  // 	'mouseout':function(){
	  // 		alert('移出');
	  // 	}
	  // });
//以上是绑定事件  事件用完之后 需要删除事件
   	//   $('input').bind('click mouseover',function(){


	  	// alert('弹窗');
	  // });
     
     // $('input').bind('click',fn1);

     //  $('input').bind('click',fn2);
     // function fn1()
     // {
     // 	alert('fn1');
     // }
     //  function fn2()
     // {
     // 	alert('fn2');
     // }


	 // $('input').unbind();//删除全部事件

  //    $('input').unbind('click');//只删除click事件

     // $('input').unbind('click',fn2); //删除input的点击事件的fn2 行为

/*jquery 除了提供 bind 方法外 还提供了 事件绑定的一些 简写方式*/

     // $('input').click(function(){
     //     alert(this);
     // });

     // $(window).unload(function(){
     // 	alert('页面卸载 页面刷新 调用该行为 只有IE支持');
     //这里不要放弹窗  主要放页面的内存的清理工作
     // })



   //   $(window).resize(function(){

   //     alert('改变窗口大小');
   // });

   //   $(window).scroll(function(){


   //   });



     $('input').select(function(){
       

       alert('文本选定');

     });

     $('input').change(function(){

        alert('文本修改');
     });

     //激活表单提交 这里 不是input  虽然 input 加的submit

     $('form').submit(function(){

         alert('表单提交 是作用form 不是input ');
     });







});














