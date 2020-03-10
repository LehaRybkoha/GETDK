$(function() {
	$(".osago__submit-btn--first").click(function() {
		$(".osago-load, .osago__title-desc").show();
		$(".osago-content, .osago-footer").hide();
		$(".osago__title").css("margin-bottom", "0");
	});
});