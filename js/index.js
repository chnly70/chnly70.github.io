/*
//警示視窗
alert('Hello World!');
//變數(不可放數字)
var message = 'Hello World!';

//8.9行意思相同
msg = 'Hello World';
msg += 'foobar';
msg = msg + 'foobar';

//變數相加
var a = 'Hello World!';
var b = 'foobar';
var msg = a+b;

//數值相加
var a = 1;
var b = 2;
var msg = a+b;
alert(msg);

//引號是字串
var a ='1';
var b ='2';
var c ='3';
var msg = a + b + parseInt(c);
alert(msg);*/

//20190508 作業-1
/*var a = 1;
var b = 50;
var total = (a+b)*b/2;
alert (total);

//20190508 作業-2
var a = (3+2-1)/(8+2-6-2);
alert (a);*/

//20190515
/*var a=2;
// 條件判斷
// if
if (a == 0){
	alert ('a = 0');
}
else if (a == 2){
	alert ('佩青吃芒果')
}
else {
	alert ('佩青愛等紅綠燈');
}
*/


// JQ
$('#button').on('click',function(e)){
	var a = $('#input').val();
	var dum = '佩青';

	if (a == 0)
	{
		alert ('佩青吃芒果');
	}
	else if (a == 1)
	{
		alert ('佩青吃芭樂');
	}

	else 
	{
		alert ('佩青不吃');
	}
}
	/*switch (a)
	{
		case '0':
			alert(dum + '芒果');
			break;
		case '1':
			alert(dum + '芭樂');
			break;
		default:
			alert(dum + '不吃');
			break;
	}
*/
/*
//20190515作業
$('#button').on('click',function(e)){
	var a = $('#input').val();

		if (a=='apple')
		{
			alert ('蘋果');
		}

		else if (a=='banana');
		{
			alert('香蕉');
		}

		else if (a=='peach');
		{
			alert('桃子');
		}

		else {
			alert('不知道');
		}

}

