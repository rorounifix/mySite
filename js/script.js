	
$(document).ready(function(){
	
	
	
	var width = $(window).width();
	if(width <= 767){
		$('nav').addClass(' shrink');
	}else{
		$(document).scroll(function(){
			if($(window).scrollTop() > 60){
				$('nav').addClass('shrink');
			}else{
				 $('nav').removeClass('shrink');
			};
		});
	}
	
});



