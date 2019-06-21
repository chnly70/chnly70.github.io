/*var sum = 0;
$('#select_Number').on('change', function() {
    $('.show_detail').html('');
    var num = $('#select_Number').val();
    for (var i = 1; i <= 9; i++) {
        sum = num * i;
        var sumstyle = $('<span>').text(num).addClass('gray');
        $('.show_detail').append(sumstyle).append('*' + i + '=' + sum + '</br>');

    }

});*/

/*var text = $('<span>').text('Hello world.');
$('.show_detail').append(text);*/

var box1 = $('<div>').addClass('box red')
$('.show_detail').append(box1);
var box2 = $('<div>').addClass('box blue')
$('.show_detail').append(box2);
var box3 = $('<div>').addClass('box green')
$('.show_detail').append(box3);



/*for (i = 1; i <= 9; i) {
    for (j = 1; j <= 9; j) {
        document.write(i "*"
            j "="
            i * j " ");
        if (i == j) { document.write("<br/>"); break; } //用的if語句，如果這兩個數字相同了 那麼跳出，另起一行
    }
}*/