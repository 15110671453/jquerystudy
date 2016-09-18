/*
IE 6-8 中 对与 css 的 伪类选择器  很多不支持


jquery 模拟 css  做了 基本 过滤器


*/


$(function () {
	// body...
	$('li:first').css('background','#ccc');

    // $('li:last').css('background','#ccc');

        // $('#box li:last').css('background','#ccc');

        // $('ul:first li:last' ).css('background','red');'
          // $(' li:not(.red)' ).css('background','red');

           /*奇数*/
          // $('li:even').css("background",'blue');



           /*偶数*/
          //    $('li:odd').css("background",'cyan');



          	/*
          	索引值等于 
          	这里负值 从下往上计算－1-－index 正值  从上往下计算 0-－－index
          	*/
            // $('li:eq(2)').css('background','red');



            	/*
            	索引值大于 
            	 这里负值 从下往上计算－1
            	 -－index 正值  从上往下计算 0-－－index
            	 */
             // $('li:gt(2)').css('background','red'); 

             /*
            	索引值小于 
            	 这里负值 从下往上计算－1
            	 -－index 正值  从上往下计算 0-－－index
             */
            // $('li:lt(2)').css('background','red'); 


            	/*选择 光标 选中的元素*/

                 // $('input').get(0).focus();
                 /*
                 这里 focus 过滤器 必须是 网页初始状态的已经
				被激活焦点的元素 才能实现元素的获取 
				而不是鼠标点击或者 tab 键盘敲击激活的

                 */
                 //才能实现元素的获取  下边 才能获取到 并且 执行行为
            	// $(':focus').css('background','red');


            	// $("div:contains(yuku)").css('background','red');

            		/*必须是空的div  获取  div中 不能有文本节点 不能有子节点
            		纯空的div 才能获取到*/
            	// $("div:empty").css('background','red');



            	// 特殊点 has 内容选择器 与 之前的 过滤选择器不同
            	//jquery 提供了 has 方法

            	// $("ul:has(.red)").css('background','red');

            	/*
            	jquery 提供了 parent 方法 去和这里的css 选择器 不是一个效果 jquery
				是去获取 父节点
            	*/
            	
            	$("div:parent").css('background','red');


})
