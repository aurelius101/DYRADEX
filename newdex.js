
$(document).ready(()=>{

(function($) {
	$(document).ready(function(){
		$(window).scroll(function() {
		var deg = $(window).scrollTop()*1;
		$('#sideball').css({ transform: 'rotate(' + deg + 'deg)' });
		});
	});
})(jQuery)



});
