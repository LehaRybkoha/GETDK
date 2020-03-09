import 'jquery-validation';
import 'jquery-mask-plugin';

$(document).ready(function() {
	const form = $( '#form' );
	const vin = $("#inputVin");
	const frame = $("#inputFrame");
	const carcass = $("#inputCarcass");

    $('.form-wrapper').quickWizard();
    $("#inputDate").mask("00/00/0000");


    jQuery.extend(jQuery.validator.messages, {
	    required: "Поле должно быть заполнено",
	    email: "Неправильно заполнено поле",
		remote: "Неправильно заполнено поле",
		url: "Неправильно заполнено поле",
		date: "Неправильно заполнено поле",
		dateISO: "Неправильно заполнено поле",
		number: "Неправильно заполнено поле",
		digits: "Неправильно заполнено поле",
		equalTo: "Неправильно заполнено поле",
		maxlength: $.validator.format( "Неправильно заполнено поле" ),
		minlength: $.validator.format( "Неправильно заполнено поле" ),
		rangelength: $.validator.format( "Неправильно заполнено поле" ),
		range: $.validator.format( "Неправильно заполнено поле" ),
		max: $.validator.format( "Неправильно заполнено поле" ),
		min: $.validator.format( "Неправильно заполнено поле" ),
		step: $.validator.format( "Неправильно заполнено поле" )
	});
	$.validator.addMethod('regexp', function(value, element, params) {
    	var expression = new RegExp(params);
    	return this.optional(element) || expression.test(value);
	});
    form.validate({
    	rules: {
    		inputMarkVeh: {
    			regexp: /^[-/A-zА-я()\d\s]+$/g
    		},
    		inputCarModel: {
    			regexp: /^[-/A-zА-я()\d\s]+$/g	
    		},
    		inputMileage: {
    			regexp: /\d/g,
    			range: [1, 1999999]
    		},
    		inputGosNum: {
    			regexp:/^[АВЕКМНОРСТУХ\d]+$/g
    		},
    		inputMinMass: {
    			regexp: /\d/g,
    			range: [1, 49999]
    		},
    		inputMaxMass: {
    			regexp: /\d/g,
    			range: [2, 50000]
    		},
    		inputVin: {
    			regexp: /^[A-z\d]+$/g
    		},
    		inputCarcass: {
    			regexp: /^[-A-z\d]+$/g
    		},
    		inputFrame: {
    			regexp: /^[-A-z\d]+$/g
    		},
    		inputSeries: {
    			regexp: /[А-я\d]/g,
    			minlength: 4
    		},
    		inputNumber: {
    			regexp: /[А-я\d]/g
    		}
    	},
    	messages: {
    		inputVin: "Хотя бы одно из трёх полей должно быть заполнено. Если ваш VIN содержит менее 17 символов, впишите его в поле 'Номер Кузова",
    		inputMarkVeh: "Неправильно заполнено поле",
    		inputMileage: "Неправильно заполнено поле",
    		inputGosNum: "Неправильно заполнено поле",
    		inputMinMass: "Неправильно заполнено поле",
    		inputMaxMass: "Неправильно заполнено поле"
    	}
    });

    $(".input-hint").click(function() {
    	 $(this).parent().find(".hint").css("display", "flex");
    	 $(this).parent().find(".hint").css("transition", "0.5s");
    	 $(this).parent().find(".input-hint--opacity").css("opacity", "0.5");
    });
    $(".hint-cancel").click(function() {
    	$(".input-hint").parent().find(".hint").css("display", "none");
    	 $(".input-hint").parent().find(".hint").css("transition", "0.5s");
    	 $(".input-hint").parent().find(".input-hint--opacity").css("opacity", "1");
    });

    $("#bike, #sedan").click(function(){
    	 $(".main").css("display", "none");
    	 $(".form-section").css("display", "flex");
    	 $(".form-content__tachograph").css("display", "none");
    	 $(".logo-link").css("position", "absolute");
    	 $(".logo-link").css("left", "42%");
    	 $(".logo-link").css("bottom", "25%");
    	 $(".logo-desc").hide();
    	 $(".header").css("position", "relative");
    });

    $("#bus, #truck").click(function(){
    	 $(".main").css("display", "none");
    	 $(".form-section").css("display", "flex");
    	 $(".form-content__use").css("display", "none");
    	 $(".logo-link").css("position", "absolute");
    	 $(".logo-link").css("left", "42%");
    	 $(".logo-link").css("bottom", "25%");
    	 $(".logo-desc").hide();
    	 $(".header").css("position", "relative");
    });


    $("#checkinputGosNum").click(function(){
    	if($(this).prop("checked") == true) {
    		$("#inputGosNum").val("");
    		$("#inputGosNum").removeAttr("required");
    		$("#inputGosNum").removeClass("error");
    		$("#inputGosNum").addClass("valid");
    		$("#inputGosNum-error").hide();
    		$("#inputGosNum").keyup(function(){
    			let replaceSpace = $(this).val(); 
		        let result = replaceSpace.replace(/[\s\S]/g, "");
		        $(this).val(result);
    		});
    	} else if($(this).prop("checked") == false) {
    		$("#inputGosNum").off("keyup");
    		$("#inputGosNum").attr("required", "required");
    		$("#inputGosNum").removeClass("valid");
    		$("#inputGosNum").addClass("error");
    		$("#inputGosNum-error").show();
    	}
    });
    $("#checkinputPTS, #checkinputSRTS").click(function(){
    	if($(this).prop("checked") == true) {
    		$("#inputSeries").removeAttr("disabled");
    	}
    });
    $("#checkinputVin").click(function(){
    	if($(this).prop("checked") == true) {
    		$("#inputVin").val("");
    		$("#inputVin").removeAttr("required");
    		$("#inputVin").keyup(function(){
    			let replaceSpace = $(this).val(); 
		        let result = replaceSpace.replace(/[\s\S]/g, "");
		        $(this).val(result);
    		});
    	} else if($(this).prop("checked") == false) {
    		$("#inputVin").off("keyup");
    		$("#inputVin").attr("required", "required");
    	}
    });
     $("#checkinputCarcass").click(function(){
    	if($(this).prop("checked") == true) {
    		$("#inputCarcass").val("");
    		$("#inputCarcass").removeAttr("required");
    		$("#inputCarcass").keyup(function(){
    			let replaceSpace = $(this).val(); 
		        let result = replaceSpace.replace(/[\s\S]/g, "");
		        $(this).val(result);
    		});
    	} else if($(this).prop("checked") == false) {
    		$("#inputCarcass").off("keyup");
    		$("#inputCarcass").attr("required", "required");
    	}
    });
    $("#checkinputSameCarcass").click(function(){
    	if($(this).prop("checked") == true) {
    		let inputVal = $("#inputVin").val();
    		$("#inputCarcass").val(inputVal);
    	} else if($(this).prop("checked") == false) {
    		$("#inputCarcass").val("");
    	}
    });
    $("#checkinputFrame").click(function(){
    	if($(this).prop("checked") == true) {
    		$("#inputFrame").val("");
    		$("#inputFrame").removeAttr("required");
    		$("#inputFrame").keyup(function(){
    			let replaceSpace = $(this).val(); 
		        let result = replaceSpace.replace(/[\s\S]/g, "");
		        $(this).val(result);
    		});
    	} else if($(this).prop("checked") == false) {
    		$("#inputFrame").off("keyup");
    		$("#inputFrame").attr("required", "required");
    	}
    });
    $("#checkinputSameFrame").click(function(){
    	if($(this).prop("checked") == true) {
    		let inputVal = $("#inputVin").val();
    		$("#inputFrame").val(inputVal);
    	} else if($(this).prop("checked") == false) {
    		$("#inputFrame").val("");
    	}
    });
    $(".form-content__field-checkblockDocument").children("input").click(function(){
    	if($("#checkinputPTS").prop("checked") == true) {
    		$("#inputSeries").val("");
    		$("#inputSeries").removeAttr("disabled");
    		$("#inputNumber").attr("maxlength", "6");
    		$("#inputNumber").attr("minlength", "6");
    		$("#inputSeries").attr("required", "required");
    		$("#inputSeries").keyup(function(){
    			let replaceSpace = $(this).val(); 
		        let result = replaceSpace.replace(/[^\d]/g, "");
		        $(this).val(result);
    		});
    	} else if($("#checkinputSRTS").prop("checked") == true) {
    		$("#inputSeries").off("keyup");

    		$("#inputSeries").removeAttr("disabled");
    		$("#inputNumber").attr("maxlength", "6");
    		$("#inputNumber").attr("minlength", "6");
    		$("#inputSeries").attr("required", "required");
    	} else if($("#checkinputDocument").prop("checked") == true) {
    		$("#inputSeries").off("keyup");
    		$("#inputSeries").val("");
    		$("#inputSeries").attr("disabled", "disabled");
    		$("#inputSeries").removeAttr("required");
    		$("#inputNumber").removeAttr("maxlength");
    		$("#inputNumber").removeAttr("minlength");
    	}
    });
    $("#inputVin, #inputFrame, #checkinputCarcass, #checkinputFrame").change(function() {
    	if(frame.val().length < 1 && carcass.val().length < 1 && vin.val().length < 1) {
    		$("#inputVin").attr("required", "required");
    		$("#checkinputVin").removeAttr("checked");
    		//alert("Хотя бы одно из трёх полей должно быть заполнено. Если ваш VIN содержит менее 17 символов, впишите его в поле 'Номер Кузова' ");
    	}
    });
    $("#checkinputHabitant, #checkinputForeign, #checkinputPhisical, #checkinputEntity").click(function() {
    	if($("#checkinputEntity").prop("checked") == true) {
    		$(".form-content__field-input--company").show();
    		$(".form-content__field-input--genSurname").show();
    		$(".form-content__field-input--surname").hide();
    	} else if($("#checkinputPhisical").prop("checked") == true) {
    		$(".form-content__field-input--surname").show();
    		$(".form-content__field-input--company").hide();
    		$(".form-content__field-input--genSurname").hide();
    	} else if($("#checkinputForeign").prop("checked") == true) {
    		$(".form-content__field-input--surname").show();
    		$(".form-content__field-input--company").hide();
    		$(".form-content__field-input--genSurname").hide();
    		$(".disable--js").addClass("disable");
    		$("#checkinputPhisical").addClass("disable");
    		$("#checkinputPhisical, #checkinputEntity").attr("disabled", "disabled");
    	} else if($("#checkinputForeign").prop("checked") == false) {
    		$(".disable--js").removeClass("disable");
    		$("#checkinputPhisical").removeClass("disable");
    		$("#checkinputPhisical, #checkinputEntity").removeAttr("disabled", "disabled");
    	}
    });
    $(".form__five-step").find("button.form-wizard-next").click(function() {
    		if ($(".fieldset__five-step").css("display") == "none") {
	    		$(".form-section").css("background-color", "#FEC530");
    		}
    });
    $("#form-wizard-prev").click(function() {
    	$(".form-section").css("background-color", "#F6F6F6");
    });
});
