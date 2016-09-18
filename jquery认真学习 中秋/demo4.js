$(function () {
	// body...

	$('div , p , strong,#box,.pox').css('color','orange');
	$('ul li a').css('color','green');

	// alert($(*).size());
	// alert($(*)[0].nodeName);//返回节点的名字 HTML 返回的是dom节点的标签名

	/*后代选择器 加 群组选择器 */
	$('ul li a ,ul li em, ul li strong').css('color','red');

	$(div.box);
})