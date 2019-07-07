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
var money = 100;
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