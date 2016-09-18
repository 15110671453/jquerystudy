/*

  jquery 提供的css 操作方法的 核心方法  .css  addCss；

 css  height:200px , padding:100px, border:100px,margin:100px
  第一种：长度 高度 的设置（不计算 内边距 外边距 与 边框） width  height 200；

  第二种：innerWidth 包含padding内边距 400

  第三种： outerWidth 包含边框border 与 内边距padding 600

  第四种 outerWidth(true) 支持 将margin 外边距 计算在内


*/

$(function(){

	// alert($('div').css('width'));
	// alert(typeof $('div').css('width'));//string

	// /*获取*/
 //    alert(typeof $('div').width());//number
 //    /*设置*/
 //  //默认单位px  也可以传字符串 500px 或换单位 500pt

 //    // $('div').width(500);

 //    $('div').width(function(index,width){

 //    		return width - 500 +'px';

 //    });

   /*
	offset 获取 标签 距 视口的位置 left  top
	position 获取 标签 相对 父级元素的 left top 位置

   */   

     //alert($('div').offset());//返回的是object object ;get 获取元素 也不可以；只是一个对象

// 有两个属性
      // alert($('div').offset().left);

      /*滚动条 对象是window*/
      alert($(window).scrollTop());

      alert($(window).scrollTop(300));











});