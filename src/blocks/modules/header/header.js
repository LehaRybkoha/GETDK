import $ from 'jquery';
window.jQuery = $;
$(function() {
	$( ".nav-close" ).click(function(){
		$("#nav").css("width", "0");
		$("html").css("background-color", "white");
	});
	$( ".nav-open" ).click(function(){
		$("#nav").css("width", "320px");
		$("html").css("background", "rgba(44, 44, 44, 0.7) !important");
		$("html").css("transition", "0.5s");
	});
});