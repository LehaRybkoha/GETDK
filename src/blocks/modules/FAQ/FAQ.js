$(function() {
	$('.faq-content__item').hide()
	$('#faq1').click(function () {
        $('#faqit1').slideToggle();
        $('#faq1').toggleClass("rotate");
    });	
    $('#faq2').click(function () {
        $('#faqit2').slideToggle();
        $('#faq2').toggleClass("rotate");
    });
    $('#faq3').click(function () {
        $('#faqit3').slideToggle();
        $('#faq3').toggleClass("rotate");
    });
    $('#faq4').click(function () {
        $('#faqit4').slideToggle();
        $('#faq4').toggleClass("rotate");
    });
});