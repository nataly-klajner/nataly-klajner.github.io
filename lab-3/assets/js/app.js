$('.button').click(function() { //anonymous function necessary in jQuery
    var name = $(this).data('name'); //this means .button and 'name' is what we called the data attribute in html
    hello(name);
});


function hello(name) {
    // debugger;
    // console.log(name); 
    //var message = '<p>Hi ' + name + '!</p>';
    var message = '<img src="assets/img/' + name + '" />';
    $('.content').prepend(message); //jQuery
}

//String
//"double" or 'single'
// 'single with "double inside"'



//Numbers
//Booleans: true or false / 0 or 1

//Arrays
//var dresser = ['socks', 'shirts', 'pants', 'off season'];
//dresser = [0, 'socks', [0,]]

//Append=one line bellow the other
//Prepen=above the previous line