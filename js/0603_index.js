//第一題
/*$('#selecTest').on('change',function(){
	var color = $('#selecTest').val();

	$('#text').css({
		'color':color
	});
});
*/
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
}

for (var i = 1; i <= 200; i++) {
	var n = (i % 4) + 1;
	var div = $('<div/>').addClass('myclass bg_'+ n);
	div.text(i);
	$('#box').append(div);
}
*/
//第三題
/*var j = 0;
$('#btn_add').on('click',function(){
	var div = $('<div/>').addClass('myclass');
	div.text(j);
	$('#box_2').append(div);
	j++;

});

*/
//花錢買水果
/*var apple = 9;
var banana = 8;
var money = 100;
result = myFunc(apple);
result = myFunc(banana);
console.log(result);

function myFunc(buy) {
    this.money = this.money - 2;
    var money = this.money;
    return money - buy;
}
*/
//全域變數
/*var money = 100;
var myBag = [];
var myCart = [];

var products = {
    'apple': 9,
    'banana': 8,
    'peach': 12,
    'melon': 6
};

buy('apple');
get(100);
buy('peach');
buy('banana');
buy('peach');
buy('melon');

checkout();

function buy(thing){
 var price = this.products[thing];
 this.money = this.money - price;
 this.myBag.push(thing);
}

function get(num){
 this.money = this.money + num;
}

function checkout(){
 console.log('還剩:',this.money);
 console.log('袋子裡面有:',this.myBag.join(','));
}
*/

//20190702作業
/*
var products = {
    'apple': 9,
    'banana': 8
};
var mybag = [];
var mywallet = 100;
var list = [];

buy('apple');
buy('banana');
add(20);

checkout();

function buy(thing) {
    var price = this.products[thing];
    this.mywallet = this.mywallet - price;
    this.mybag.push(thing);
    this.list.push('-' + price);
}

function add(num) {
    this.mywallet = this.mywallet + num;
    this.list.push('+' + num);
}

function checkout() {
    console.log('還剩:',this.mywallet);
    console.log('買了:',this.mybag.join(','));
    console.log(this.list.join(','));
}

//join只會用在陣列
*/
var distance = 1000;
var num = 0;
setInterval(function() {
    plus();
}, 1000);

function plus() {
    this.num = this.num + 1;
    console.log(this.num);
}