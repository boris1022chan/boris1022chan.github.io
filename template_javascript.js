$(function() {
	$(".menu-icon").on("click", function() {
		var menu = $(".mobile-nav-dropdown");
		var height = menu.css("height");
		if (menu.css("height") != "0px") {
			 $(".mobile-nav-dropdown").css("height", "0px");
		}
		else
			$(".mobile-nav-dropdown").css("height", "75vh");
	});
});