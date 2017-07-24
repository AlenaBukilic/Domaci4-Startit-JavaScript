$(document).ready(function(){
	$("#engfra").click(function(){
		$(".language").toggle();
	});
	$(".next").click(function(){
		$(".cover").css("background-image", "url(images/cover2.jpg)");
		$("#color-one").css("background-color", "#fff");
	});
	$(".prev").click(function(){
		$(".cover").css("background-image", "url(images/cover3.jpg)");
		$("#color-two").css("background-color", "#fff");
	});
	$(".dropbtn").click(function(){
		$(".dropdown-content").toggle();
	});
});



