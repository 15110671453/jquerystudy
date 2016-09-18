/*
   dom 的节点操作

	之前都是查找遍历 选择器  修改属性 

    现在是   动态创建元素  创建元素节点

*/

$(function(){
	//创建节点
	var box = $("<div id='box'> box 动态创建 元素节点 并插入指定位置</div>");
	//将节点插入body内
	$('body').append(box);
	//



	//向指定元素内部后面插入节点content
	// $('#divbox').append('<strong> emmmmm</strong>');


	//使用匿名函数向指定元素的内部后面插入节点
	// $('#divbox').append(function(index){
 //          return '<strong> emmmmm</strong>'+index;

	// });

	/*
			将指定元素移入到指定元素content内部后面 
				这里是将指定元素 移入 就不需要创建元素节点了
	*/

	// $('#strong').appendTo('div');


	/*
     prepend插入到指定元素content内部的前面
	*/
   // $('#divbox').prepend('<strong> emmmmm</strong>')



   /*
	向指定元素的外部后面插入节点content
	after（其实就是同级节点）
   */

   //也有匿名函数的实现的方式
   // $('div').after('<strong>  同级strong </strong>');


   /*

	向指定元素的外部前面插入节点content
	before（其实就是同级节点）

   */

   // $('div').before('<strong>  同级strong </strong>');

/*
  同级移入操作
*/
   $('#strong').insertAfter('div');
    $('#strong').insertBefore('div');






});