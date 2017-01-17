function menuIcon(x) {
	// icon animation
    x.classList.toggle("change");    
    // menu dropdown
    if (document.getElementById("dropdown").style.height != "0px"){
    	document.getElementById("dropdown").style.height = "0px";
    }
    else {
    	document.getElementById("dropdown").style.height = "100vh";
    }

}

$(document).ready(function(){
	$('.x-navbar-fixed-top').css("background-color", "transparent");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.x-navbar-fixed-top').css("background-color", "rgba(255,255,255,0.6)").css("transition","0.3s ease-in-out ");
		} else {
			$('.x-navbar-fixed-top').css("background-color", "transparent").css("transition","0.3s ease-in-out ");
		}
	});
});