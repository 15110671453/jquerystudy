/*

	jquery 只是

	DOM  D表示document页面 ， o表示对象 即一组含有独立特性的数据集合
	M表示模型 即页面上的元素节点 和 文本节点




*/
//元素 及 内容的操作

/*

常规的dom 操作
*/


$(function () {
	// body...

	/*
	$('#box').html() 获取html内容
	$('#box').text() 获取文本内容 有html内容会自动被清理
//
	*/
	// alert($('#box').html());
	// alert($('#box').text());
	/*
    html 与 text 都可以加value参数
    作用 是设置标签内容
     
	*/
		// $('#box').html('<em>替换HTML内容 有html标签会被正确解析 并渲染到界面</em>');

		// $('#box').text('<em>替换文本内容 有html标签会自动被转义显示到界面</em>');


		/*
		获取或设置表单中的内容
		*/

		// alert($('input').val());
		// $('input').val('www.baidu.com');


        // alert($('#inputa').val());
        // alert($('#inputb').val());
        // $('#inputb').val('女女');
        //  alert($('#inputb').val());

         /*选中 设置首选项 火狐浏览器 需要control + F5彻底刷新*/
        //  $('input').val(['男','女','编程']);

        	/*jquery 的dom操作后 我们学习 属性css操作*/

        	/*根据css属性 的键值对 获取指定key 的属性值*/
           // alert($('#box').attr('id'));




        /* 效果 鼠标悬停在 ＃box标签时 有提示框 ，使用键值对*/
            $('#box').attr('title','我是域名');




               /* 效果 鼠标悬停在 ＃box标签时 有提示框 ，使用对象 对指定标签设置 多个css 键值对*/

//               $('div').attr({
// 'title':'我是域名2',
// 'class':'red',
// 'data':'123'

//               });
            /*这里 可以设置class 
              但是我们不建议使用attr这个方法来设置class 有其他方法可以替代*/

/*这个方法 默认有两个参数
 第一个参数index 默认传递指定标签的索引 
 第二个参数value默认传递的指定标签的指定属性的默认值 
 如果没设置过 传过来的是undefined
 */
// $('div').attr("title",function(index,value){

//    return '我是域名 这里需要计算 才使用 这个方法'+(index+1);
// });


/*
在原来的标签中 追加 内容 而不是替换
怎么解决  
上边的attr 可以传递 键值对 可以传递key 加 方法
那么 html 这个可以 传递 字符串值 以外 可以
传递方法吗
*/
//解决方法一 
// $('#box').html($('#box').html()+'<b>wwww.smile.com</b>');

//方法二
 $('#box').html(function(index,value){

 	return value + '<b>wwww.smile.com</b>';

 });
/*貌似上边的方法 都可以 传一个 function 参数*/
/*这里的removeAttr 方法 不可以 传递function参数*/

 $('#box').removeAttr('title');



/*
这里可以动态创建 css 一些属性  但是我们不建议 动态创建id class等属性

这些属性 动态创建 会导致整个页面的布局混乱 所以不建议动态创建

使用时需要注意
*/















})