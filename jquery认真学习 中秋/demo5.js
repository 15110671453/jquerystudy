/*
	jquery 为后代选择器 提供了一个等价的find 方法
 
	子选择器
	next 选择器 两个要求：1、下一个 2、某一个节点的同级节点 （兄弟节点）
	next all 选择器 
	在IE6  是不支持的

*/

$(function () {
	// body...


	$('#box>p').css('color','orange');
	/*
	jquery 为我们提供了css 选择器的 书写方法 
	jquery为 后代选择器 提供了 find等效方法
    为next 选择器 提供了 next 方法
    为nextall 选择器  提供了nextAll 选择器

    如果使用了以上的三个方法 但是没有传参数 会怎样？？？

    等效 传了参数 '*' 一样

    但是* 通配选择会消耗更多资源  我们最好考虑 优化


    jquery 为我们提供了 css没有的方法 寻找同一个节点的上一个节点

   		 $('#box').prev('p').css('color','red');
	
		 $('#box').prevAll('p').css('color','red');

		 $('#box').nextAll('p').css('color','red');
	  这些选择器方法 最好不要连缀
	  $('#box').siblings('p').css('color','blue');
		//nextUntil方法
	  $('#box').nextUntil('p').css('color','cyan');
		//prevUntil方法
		  $('#box').prevUntil('p').css('color','cyan');
	*/
	
})