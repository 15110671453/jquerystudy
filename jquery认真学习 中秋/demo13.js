/*

	jquery提供的包裹节点

	向指定元素





*/

$(function(){

   	//	向指定元素 外部包裹一层html标签 

   	// $('div').wrap('<strong>特特天堂</strong>');
    // $('div').wrap('<strong><em></em></strong>');

    //向指定元素包裹一层DOM节点对象
    // $('div').wrap($('strong').get(0));
     // $('div').wrap(document.createElement('strong'));



      //使用匿名函数包裹 


      // $('div').wrap(function(index){

      // 	return '<strong><em>'+index+'</em></strong>';

      // });

      // $('div').unwrap();
      //  $('div').unwrap();

      	//包裹 将每个div当作做一个独立体
      // $('div').wrap('<strong>特特天堂</strong>');



      //包裹 将所有div看作一个独立体 进行包裹
      // $('div').wrapAll('<strong>特特天堂</strong>');
      
      //包裹 内层包裹
      // $('div').wrapInner('<strong>特特天堂</strong>');

      /*
		jquery 复制节点 
      */


     $('div').click(function(){

     	alert('wwwwwww');
     });
     /*
		复制节点  时 clone 是true 还是false 
		决定 克隆节点时 是否 也克隆点击事件
     */
     // $('div').clone(false).appendTo("body");

     /*
     删除节点
	一般删除
	精确删除
     */

     // $('div').remove();
    
    /*
    remove 删除掉 节点  再添加进去 是把 事件行为删除掉的

    还有一种方式  detach 方法 该方法 删除再添加 是把 事件行为保留的
    */
      // $('div').remove('.box');
     
     // $('div').remove().appendTo("body");
     // $('div').detach().appendTo("body");
     //清空节点 删除节点中的字内容 自节点 但是当前的节点还是保留的 留一个空标签而已
     // $('div').empty();


    /*替换后 原先标签的事件 也移除了*/
     $('div').replaceWith('<span>替换节点</span>');

    // $('<span>替换节点</span>').replaceAll('div');




});