/*

高级选择器 是通过解析字符串 来实现的
jquery 提供的方法 就快多了 两种不同的算法
jquey 自带Sizzle引擎 ；IE67 不支持 querySelectorAll()方法
*/
$(function(){
	$('#box p').css('color','red');

	/*Sizzle 引擎 选择的顺序 处理 字符串 从右 到左
	jquery是 编程语言 要比css 灵活
	 属性 选择器 主要用到超链接 中
	*/


	/*找到 具有title 属性 的a 标签*/
	$('a[title]').css('color','red');


    /*找到具有title 属性的 a 标签  并且title属性值 为num1 的*/
	// $("a[title = num1]").css('color','orange');


	 /*找到具有title 属性的 a 标签  并且title属性值 为num 开头的*/
	// $("a[title ^= num]").css('color','orange');


	/*找到具有title 属性的 a 标签  并且title属性值 为num 结尾的*/
	$("a[title $= num]").css('color','orange');

	/*有点像正则表达式 */

});


