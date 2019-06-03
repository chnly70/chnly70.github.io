
//迴圈
/*
var total = 0 ;
for (var i = 2; i<= 100; i++) {
	if (i % 2 == 0){
		total+=i;
	}
}
console.log(total);


//js改div
var div $('<div/>').css({
	'background': 'red',
	'width': '50px',
	'height': '50px'
});

//DOM 操作
console.log(div);
$('#canvas').append(div);

//陣列
var a = [];
for (var i = 0; i<100; i++) {
	a.push(i);
}
console.log(a);
*/

var colors = ['red','blue','green','yellow'];
//console.log(colors[0]);
//console.log(colors.length);
for (var i = 0 ; i < colors.length; i++) {
	console.log(colors[i]);
}
/*
//陣列+迴圈
var colors = ['red','blue','green','yellow'];

for (var i = 0 ; i < colors.length; i++) {
	var div = $('<div/>').css({
	'background': colors[i],
	'width': '50px',
	'height': '50px'
});

//DOM 操作
$('#canvas').append(div);
}
*/