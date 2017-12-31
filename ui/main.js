$('#hyperlink').click(function(){
window.location.href="http://www.google.com";


});
 $('#name').click(function() {
    $('.main').animate({
     left:"0px"
	  
    }, 100);
	$('body').animate({
		left:"200px"
	},100);
	});
$('.main').click(function() {
    $('.main').animate({
     left:"-295px"
	  
    }, 100);
	$('body').animate({
		left:"0px"
	},100);
	});