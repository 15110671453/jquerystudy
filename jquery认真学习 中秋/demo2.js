//代码风格

// $(
// 	function () {
// 		// body...
		
// 		$是jquery对象  
// 		$加圆括号 其实是jquery的方法  里面可以放一个要执行的匿名函数
// 		页面元素的选择 dom选择器
		
// 		$('#box');
// 		$('#box').css('color','red');

// 	}
// );

// jQuery(
// 	function () {
// 		// body...
		
// 		$是jquery对象  
// 		页面元素的选择 dom选择器
// 		.css是内置功能函数 添加一个行内的css样式
// 		在执行功能函数时并不是直接被$和jquery对象调用执行
// 		而是$和jquery对象 执行选择器获取 dom节点 后的jquery对象
// 		调用该功能函数
		
// 		jQuery('#box');
// 		jQuery('#box').css('color','red');
// 	}
// );

// $(
// 	function () {
// 		// body...
// 		/*
// 		$是jquery对象  
// 		$加圆括号 其实是jquery的方法  里面可以放一个要执行的匿名函数
// 		页面元素的选择 dom选择器
// 		*/
// 		alert($);//返回jquery对象的内部
// 		alert($());//返回的是jquery对象
// 		alert($('#box'));//返回的是jquery对象 但是该对象已获取了指定的dom节点 以便以后的使用
// 		alert($('#box').css('color','red').css('font-size','200px').css('font-weight','50'));//返回的是jquery对象并且执行了内部函数 修改css样式

// 	}
// );


//加载模式
/*javascript 提供的 必须等待html加载完毕 还包括图片加载完毕*/
// window.onload=function () {
// 	// body...
// 	alert('1');
// };
// window.onload=function () {
// 	// body...
// 	alert('2');
// };
/*onload 只会执行一次 前面的都会被覆盖掉 */
/*jquery加载模式  只需要等待网页中的DOM结构加载完毕 就会*/
// $(document).ready(
// 	function () {
// 	// body...
// 		  alert(1);
// 				}
  
// 	);
// $(document).ready(
// 			function () {
// 	// body...
// 		  alert(2);
// 				}
// 	);
/* */
/*jquery加载的 方式 不会覆盖 每一个都可以执行*/
// $(function(){

// });



/*
jquery对象互换  $ 可以不断连缀 每次返回的都是jquery对象 object object
但是有时候我们需要返回原生dom对象 object htmlDivElement
*/

// $(function () {
// 	// body...
// 	alert($('#box').get(0));//[Object HTMLDivElement]
// 	alert($(document.getElementById('box')).css('color','blue'));

// });

/*
多个库之间的冲突
prototype 也是使用$符
我们自己写的Base库 也是使用$ 符
jquery 也是
该如何引用

Jquery库在base库之前引用 那么$符所有权归base库 jquery使用

Jquery库在base库之后引用 那么$符所有权归Jquery库 无法使用base库

JQuery.noConflict();//把自己的$符所有权移除


*/


/*

Jquery选择器  引擎 继承了css语法 用javascript封装 做到了
模拟css 语法

可以对DOM元素的 标签名 属性名 状态 等 进行快速准确的 选择


*/   


/*
dom节点选取 我们采用过的方式

我们使用css dom获取  这种方式 只是用来改变样式 增加样式；
我们使用javascript document byid bytagname 

现在使用jquery

*/

//简单选择器
$(function () {
	// body...

    
});






