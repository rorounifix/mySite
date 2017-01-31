$(document).ready(function(){
	$(document).scroll(function(){
		var scr = $(window).scrollTop();
		if(scr >= 50){
			$("nav").addClass("shrink");
		}else{
			$("nav").removeClass("shrink")
		}
	});
});