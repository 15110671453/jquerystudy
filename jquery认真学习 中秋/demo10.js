

$(function(){
	/*这里 jquery 的css 方法 与attr方法的区别*/
	// alert($('div').css('color'));
	// $('div').css('color','red');
	/*以上是简单应用   如何获取 标签的多个css属性 呢*/
    
    	// alert($('div').css(['color','width','height']));/*返回的是 Object Object*/

    	// var box = $('div').css(['color','width','height']);

    	// for (var i in box) {
    	  
    	//   alert(i+':'+box[i]);
    	// }

    	/*以上是原生javascript 的遍历 对象数组*/

    	/*jquery提供的
    	(jquery提供的一些工具方法) 
    	遍历对象数组的方法 ，
    	第一个参数传递 对象数组的 键值对的键  第二个参数 对应键的值

    	两种情况
    	*/
    	//遍历原生的javascript对象数组
     // $.each(box,function(attr,value){

     //  alert(attr + ':' + value);

     // });

     //遍历jquery封装的对象数组
     // $('div').each(function(index,element){


     // });

     /*
		jquery 的css 方法 实现 一次设置 多个css 属性 键值对
     */


     // $('div').css({
     // 	'color':'blue',
     // 	'background-color':'#eee'

     // })

     /*  css 方法 传递 function 参数 接受 处理一些计算*/  

     // $('div').css('width',function(index,value){


     // 	return parseInt(value)-500 + 'px';

     // });



     /*为标签添加 css 类别规则*/

      // $('div').addClass('red');
      // $('div').removeClass('red');

  //     var count = 0;
  //     $('#box').click(function()
  //     {
  //     	 $(this).toggleClass('red');
  //     	 /*

		// 两个样式之间的切换 但是仅限定与 浏览器默认样式之间切换
  //     	 */

  //       /*
  //       toggleClass 方法 可以传递 两个参数 
  //       第一个是 css 样式；
  //       第二个参数是 true或false

  //       */
  //     	 // $(this).toggleClass('red',count++%2 ==0 );
  //     	 /*
  //     	 频率问题
  //     	 */



  //     	 //方法1
  //     	 // if($(this).hasClass('red'))
  //     	 // {
  //     	 // 	$(this).removeClass('blue');
  //     	 // } else 
  //     	 // {
  //     	 // 	$(this).addClass('blue');
  //     	 // 	/*这里是 使用toggle  还是 add*/
  //     	 // }
     

  //     	 });

       /*
      	 实现 自定义的两个样式 之间的切换

      	 方法一：

      	 方法二：

      	 方法三：

      	 */
       //方法2
      	

      	 // $('div').click(function(){

      	 // $(this).toggleClass(function(){

        //     return $(this).hasClass('red') ? 'blue': 'red';

      	 // });


      	 // });




      	 //方法3

      	 //  $('div').click(function(){

      	 // $(this).toggleClass(function(){

        //   	//局部
        //   	 if ($(this).hasClass("red")) {
        //   	 	$(this).removeClass("red");
        //   	 	return 'blue';

        //   	 } else {

        //   	 	$(this).removeClass("blue");

        //   	 	return 'red';
        //   	 }

      	 // });



      	 // 怎样获取到

      	 	  $('div').click(function(){

      	 $(this).toggleClass(function(index,calssName,swithBool){


          	//局部
          	 if ($(this).hasClass("red")) {
          	 	$(this).removeClass("red");
          	 	return 'blue';

          	 } else {

          	 	$(this).removeClass("blue");

          	 	return 'red';
          	 }

      	 });





  

});