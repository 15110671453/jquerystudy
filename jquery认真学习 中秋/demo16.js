


$(function(){


	// $('div').mouseover(function(){

	// 	$(this).css('background','red');
	// });
	// $('div').mouseout(function(){
  
 //  		$(this).css('background','blue');

	// });


/*
		（会考虑层次 可能触发多次执行）
		mouseover mouseout 与 mouseenter mouseleave 
		（不考虑层次 不会多次执行）对比
*/
	// $('div').mouseover(function(){
	// 	$('strong').html(function(index,value){

	// 		return value + '1';
	// 	})

	// });

	// $('div').mouseenter(function(){
	// 	$('strong').html(function(index,value){

	// 		return value + '1';
	// 	})

	// });



	/*键盘事件*/

	 // $('input').keyup(function(){
  	//       alert('键盘叹气');

	 // });

	 // $('input').keydown(function(e){

	 // 	alert(e.keyCode);
	 // a 65
	 // });

	 //  $('input').keypress(function(e){

	 // 	alert(e.charCode);
	 // a 97
	 // })




	 /*
		focus  blur 分别表示 光标激活 与 丢失


	 */


	 // $('input').blur(function(){

	 // 	alert('光标丢失');
	 // });


	 // $('input').focus(function(){

	 // 	alert('光标丢失');
	 // });


	 // $('div').focusin(function(){

	 // 	alert('光标激活');
	 // });
	 //  $('div').focusout(function(){

	 // 	alert('光标丢失');
	 // });


/*
其效果 与mouseenter mouseleave 可以做对比 发现效果基本一致

再对比mouseover moverout
*/
	 $('div').hover(function(){
     $(this).css('background','red');

	 },function(){
     $(this).css('background','blue');

	 });



})