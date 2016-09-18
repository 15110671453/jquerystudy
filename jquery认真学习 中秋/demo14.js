/*

之前 使用常规的 dom和css选择器
dom节点操作
已经可以操作一些表单行为

那么这里为什么还要再来个表单选择器呢

*/
/*
表单元素 一般都放在 form标签中  但是有javascript的话 
就不需要一定有form才能提交表单

*/
/*表单选择器 不用id 和class 使用； 用id 和 class 操作 其实这里的方法就没必要使用了*/
$(function(){

/*textarea select button*/
/*我们的常规表单选择器 做法*/
		// alert($('input').val());
		// //这种写法解决了 多个input 指定获取的问题 但是语意不清晰
		// alert($('input').eq(1).val());
		// //语意清晰
		// alert($('input[name=paswd]').val());
/* 做法：
textarea select button input 我们的表单 有这么多
*/
       // alert($(':radio[name=sex]').eq(1).val());

       alert($('form:hidden'));

/*
表单 选择器 还有表单 过滤器



*/

   		// alert($('form:enabled').size());
      
      alert($('form:checked'));



});





















