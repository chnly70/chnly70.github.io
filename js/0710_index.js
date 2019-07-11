//ajax 非對稱js與xml技術

$.ajax({
	url:'https://jsonplaceholder.typicode.com/photos', //抓的路徑
	method:'GET', //抓的方式 GET,POST,PATCH,DELETE,PUT
	dataType:'jsonp' //抓的格式,跨伺服器的話要加"p"
})

//done連線完成後要做的事情(data為自取名稱)
/*.done(function(data){
	console.log(data);
});*/

.done(function(data){
	$.each(data,function(i,e){
		var h1 = $('<h1>').text(e.title);
		$('#data').append(h1);
	});
});