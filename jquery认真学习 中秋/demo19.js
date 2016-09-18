/*

	高级事件

	模拟用户操作
	比如 用户点击 本来用户点击触发

	现在不用用户点击 浏览器模拟

	当使用模拟事件时 需要绑定一个触发
*/

$(function(){

	// $('#inputid').click(function(){

	// 	alert('模拟用户事件操作');
	// });

	// //模拟用户操作
	// $('#inputid').trigger('click');



	//  连缀写法  以及 额外 数据参数data  的 传递

	// $('#inputid').click(function(e,data1,data2,data3,data4){

	// }).trigger('click',['123','abc',{user:'lee'},['1','2','3']]);


	/*
		1、对比 bind 方法的 额外数据 的传递
		2、 click mouse 这些系统事件 但是自定义事件 怎么来 需要用到bind、
		并用trigger 触发 才能执行调用
	*/

	/*trigger  */


	$('#inputid').bind('myevent',function(){
     alert('自定义事件');
	 });


	$('#inputid').trigger('myevent');

//模拟该行为  并其阻止默认行为 比如 表单提交 submit 
	// triggerHandler("")

	/*
	比较 trigger 方法 返回的是 jquery的对象，还可以连缀设置 css ;
	不会阻止冒泡

	如果是triggerHandler 方法  返回的情况 根据 触发的方法 是否有返回值

	若有 就返回  若无就返回 undefined ；无法使用连缀

	triggerHandler 阻止冒泡
	*/



	/*
		命名空间 解决 匿名函数 绑定事件行为 的移出
		命名空间的事件 移出的方法

	*/


	 // $('#inputid').bind('click.abc',function(){
  //        alert('abcclick');
	 // });
	 // $('#inputid').bind('mouseover.abc',function(){
  //        alert('abcmouse');
	 // });
	 //  $('#inputid').bind('click.xyz',function(){
  //        alert('xyz');
	 // });

	 //  $('#inputid').unbind(".abc");
	 //    $('#inputid').unbind("click.abc");








})