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
