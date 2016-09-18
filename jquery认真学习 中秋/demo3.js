

$(function(){
	/* 最基础的ID选择器  在css 选择器中是  添加样式  在jquery中是 添加行为  这里的行为
	会更宽泛  不单单是添加css样式 还可以添加点击事件等

	元素名选择器  id选择器  class选择器
	*/
	$('#box').css('color','red');
   /*元素选择器  获取多个 相同html标签名的对象*/
    $('div').css('color','orange');
    /*class 选择器 */
    $('.classdiv').css('color','blue');

    // alert($('div').size());

    /*
    css高级选择器 会对部分浏览器不兼容
    但是jquery 做到了兼容
    */

    $('#box>p').css('color','cyan');


    /*对比原生的获取节点  jquery 多了容错
		if( document.getElementById('pox'))
		{
		 document.getElementById('pox').style.color = 'red';

		}
	   
    */
    	if ($('#box').get(0)) {
    			alert('2');
    	}



});
/*
进阶选择器



群组选择器

后代选择器

通配选择器

















*/

