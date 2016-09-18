/*
	jquery 事件对象 理解

*/


$(function(){

/*

	  事件对象 都有哪些 属性 type  获取事件的类型 click
	  属性 target 获取事件绑定的DOM元素  触发元素
	  
	  移入移出元素 冒泡 考虑
	  currentTarget 得到的是监听元素的DOM 你绑定的是哪个就是那个
	  relatedTarget 返回移入移出时临近的DOM对象
*/
	// $('div').bind('click',function(e){
	// 	//target 冒泡了 你点的是那个 就是它触发 返回就是它 span 有层次
 //    // alert(e.target);
 //    //currentTarget 没有冒泡 无论点击那个层 都永远返回 当前监听的对象 div
 //     // alert(e.currentTarget);
 //     //在click中不能测试
 //      alert(e.relatedTarget);

	// });


	// $('div').bind('mouseout',function(e){
	// 	//target 冒泡了 你点的是那个 就是它触发 返回就是它 span 有层次
 //    // alert(e.target);
 //    //currentTarget 没有冒泡 无论点击那个层 都永远返回 当前监听的对象 div
 //     // alert(e.currentTarget);
 //     //在click中不能测试
 //      alert(e.relatedTarget);

	// });




		// $('div').bind('click',{user:'Lee',age:100},function(e){


  //      alert(e.data.age);
		// });


		// $(document).bind('click',function(e){

		// 			alert(e.pageY + ',' + e.screenY + ',' + e.clientY);
		// 			alert(e.pageX + ',' + e.screenX + ',' + e.clientX);


		// });


		/*
			timeStamp 时间戳
		*/


		// $('div').click(function(e){

		// 		alert(e.timeStamp);

		// });








});