//第一題
$('#selecTest').on('change',function(){
	var color = $('#selecTest').val();

	$('#text').css({
		'color':color
	});
});

//第二題
/*for (var i =1 ; i <= 200; i++) {
		var div = $('<div/>').css({
		'width': '50px',
		'height':'50px',
		'border':'2px solid #000',
		'margin':'10px',
		'float':'left'
		});
		div.text(i);

		$('#box').append(div);
}*/

for (var i = 1; i <= 200; i++) {
	var n = (i % 4) + 1;
	
	var div = $('<div/>').addClass('myclass bg_'+ n);
	div.text(i);
	$('#box').append(div);
}

//第三題
var j = 0;
$('#btn_add').on('click',function(){
	var div = $('<div/>').addClass('myclass');
	div.text(j);
	$('#box_2').append(div);
	j++;

});


