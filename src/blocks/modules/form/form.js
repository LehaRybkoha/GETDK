import 'jquery-validation';
import 'jquery-mask-plugin';
let docType;
let notes;
let owType = "Гражданин РФ Физическое лицо";
$(document).ready(function() {
	const form = $("#form");
	const vin = $("#inputVin");
	const frame = $("#inputFrame");
	const carcass = $("#inputCarcass");
    const maxMass = $("#inputMaxMass");
    const minMass = $("#inputMinMass");

    // $('.header').mouseover(function() {
    //     console.log(notes);
    //     console.log(docType);
    //     console.log(owType);
    // })

    $('.form-wrapper').quickWizard();
    $("#inputDate").mask("00.00.0000");
    $("#inputPhone").mask("+7 (000) 000-00-00");


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
		max: $.validator.format( "Неправильно заполнено поле" ),
		min: $.validator.format( "Неправильно заполнено поле" ),
		step: $.validator.format( "Неправильно заполнено поле" )
	});
	$.validator.addMethod('regexp', function(value, element, params) {
        var expression = new RegExp(params);
        return this.optional(element) || expression.test(value);
    });
 //    if(empty.val() > permanent.val()) {
 // //         permanent.addClass('error')
 // //         permanent.val("");
 // //         alert("Разрешенная масса должна быть больше Массы без нагрузки, пожалуйста, проверьте данные и введите их еще раз.");
 // // //     }
 //    $(".form__second-step").validate({
 //        lengthCheck: function() {
 //            if(minMass.val() > maxMass.val()) {
 //                alert("false");
 //                return false;
 //            } else {
 //                alert("suka");
 //            }
 //        },
 //        submitHandler: function() { alert("Submitted!") },
 //    });

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
    			regexp: /^[-A-z\d]+$/g,
    		},
    		inputFrame: {
    			regexp: /^[-A-z\d]+$/g,
    		},
    		inputSeries: {
                regexp: /^[А-я\d]+$/g,
    			minlength: 4
    		},
    		inputNumber: {
    			regexp: /^[А-я\d]+$/g
    		},
            inputCompany: {
                regexp: /^[А-я\d\s"]+$/g
            },
            email: {
                email: true
            },
            inputSurname: {
                regexp: /^[А-я]+$/g
            },
            inputName: {
                regexp: /^[А-я]+$/g
            },
            inputPatronymic: {
                regexp: /^[А-я]+$/g
            },
            inputGenSurname: {
                regexp: /^[А-я]+$/g
            },
            inputDate: {
                minlength: 10
            }
    	},
    	messages: {
    		inputVin: "Хотя бы одно из трёх полей должно быть заполнено. Если ваш VIN содержит менее 17 символов, то впишите его в поле 'Номер Кузова",
    		inputMarkVeh: "Неправильно заполнено поле",
    		inputMileage: "Неправильно заполнено поле",
    		inputGosNum: "Неправильно заполнено поле",
    		inputMinMass: "Неправильно заполнено поле",
    		inputMaxMass: "Неправильно заполнено поле",
            inputCompany: "Неправильно заполнено поле",
            inputSurname: "Неправильно заполнено поле",
            inputName: "Неправильно заполнено поле",
            inputPatronymic: "Неправильно заполнено поле",
    	}
    });
    // function checkMass() {
    //     let maxVal = minMass.val();
    //     let minVal = maxMass.val();

    //     if (maxVal.length > 0 && minVal.length > 0) {
    //         if (maxVal > minVal || minVal < maxVal) {
    //             alert("yeah");
    //         }
    //     }        
    // }
    // let i = 0;
    // while (i = 0) {
    //     checkMass()
    // }
    // $(maxMass, minMass).on("blur", function(){
    //     let maxVal = minMass.val();
    //     let minVal = maxMass.val();

    //     if (maxVal.length > 0 && minVal.length > 0) {
    //         if (maxVal > minVal || minVal < maxVal) {
    //             alert("yeah");
    //         }
    //     }
    // });

    $(".input-hint").mouseenter(function() {
         $(this).parent().find(".hint").css("display", "flex");
         $(this).parent().find(".hint").css("transition", "0.5s");
         $(this).parent().find(".input-hint--opacity").css("opacity", "0.5");
    });
    $(".input-hint").click(function() {
         $(this).parent().find(".hint").css("display", "flex");
         $(this).parent().find(".hint").css("transition", "0.5s");
         $(this).parent().find(".input-hint--opacity").css("opacity", "0.5");
    });
    $(".hint").mouseleave(function() {
         $(".input-hint").parent().find(".hint").css("display", "none");
         $(".input-hint").parent().find(".hint").css("transition", "0.5s");
         $(".input-hint").parent().find(".input-hint--opacity").css("opacity", "1");
    });
    $(".hint-cancel").click(function() {
    	$(".input-hint").parent().find(".hint").css("display", "none");
    	 $(".input-hint").parent().find(".hint").css("transition", "0.5s");
    	 $(".input-hint").parent().find(".input-hint--opacity").css("opacity", "1");
    });

    $("#bike, #sedan, #bus, #truck").click(function(){
        $(".auto-animation").css("transform", "translateX(500%)")
        $(".auto-animation").css("transition", "all 5s ease-in-out")
        $(".auto-animation").css("will-change", "transform");
        $(".auto-animation").css("will-change", "transform");
        let transitionAnimate = "all 4s ease-in-out";
        let transformAnimate = "rotate(5000deg)";
        $("<style>.auto-animation:before{transition:" + transitionAnimate + "}</style>").appendTo(".auto-animation");
        $("<style>.auto-animation:before{transform:" + transformAnimate + "}</style>").appendTo(".auto-animation");
        $("<style>.auto-animation:after{transition:" + transitionAnimate + "}</style>").appendTo(".auto-animation");
        $("<style>.auto-animation:after{transform:" + transformAnimate + "}</style>").appendTo(".auto-animation");
        // $(".auto-animation,.auto-animation ").cssAfter("transform", "translate(300%,0)");
    });

    $("#bike, #sedan").click(function(){
        setTimeout(function() {
             $(".form-section").css("display", "flex");
             $(".form-content__tachograph").css("display", "none");
             $(".logo-link").css("position", "absolute");
             $(".logo-link").css("left", "42%");
             $(".logo-link").css("bottom", "25%");
             $(".logo-desc, .main").hide();
             $(".header").css("position", "relative");
             $(".header").css("background-color", "#fff");
        }, 3000);
    });


    $("#bus, #truck").click(function(){
        setTimeout(function() {
        	 $(".form-section").css("display", "flex");
        	 $(".logo-link").css("position", "absolute");
        	 $(".logo-link").css("left", "42%");
        	 $(".logo-link").css("bottom", "25%");
        	 $(".logo-desc, .form-content__use, .main").hide();
        	 $(".header").css("position", "relative");
             $(".header").css("background-color", "#fff");
             $(".email").css("color", "#2C2C2C");
        }, 3000);
    });


    $("#checkinputGosNum").click(function(){
    	if($(this).prop("checked") == true) {
    		$("#inputGosNum").val("ОТСУТСТВУЕТ");
            $("#inputGosNum").attr("disabled", "disabled");
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
            $("#inputGosNum").removeAttr("disabled");
    		$("#inputGosNum").removeClass("valid");
    		$("#inputGosNum").addClass("error");
            $("#inputGosNum").val("");
    		$("#inputGosNum-error").show();
    	}
    });
    $("#checkinputPTS, #checkinputSRTS").click(function(){
    	$("#inputNumber").val("");
    	if($(this).prop("checked") == true) {
    		$("#inputSeries").removeAttr("disabled");
    	}
    });
    $("#checkinputVin").click(function(){
    	if($(this).prop("checked") == true) {
            $("#inputVin-error").hide();
            $("#inputVin").removeAttr("required");
            $("#inputVin").attr("disabled", "disabled");
            $("#inputVin").removeClass("error");
            $("#inputVin").val("");
    	} else if($(this).prop("checked") == false) {
            $("#inputVin").removeAttr("disabled");
            $("#inputVin").attr("required", "required");
            $("#inputVin").val("");
    	}
    });
     $("#checkinputCarcass").click(function(){
    	if($(this).prop("checked") == true) {
            $("#inputCarcass").removeAttr("required");
            $("#inputCarcass").attr("disabled", "disabled");
            $("#inputCarcass").removeClass("error");
    	} else if($(this).prop("checked") == false) {
    		$("#inputCarcass").removeAttr("disabled");
    		$("#inputCarcass").attr("required", "required")
            $("#inputCarcass").val("");
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
            $("#inputFrame").removeAttr("required");
            $("#inputFrame").attr("disabled", "disabled");
            $("#inputFrame").removeClass("error");
    	} else if($(this).prop("checked") == false) {
            $("#inputFrame").removeAttr("disabled");
            $("#inputFrame").attr("required", "required")
            $("#inputFrame").val("");
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
    $("#checkinputSerieNum").click(function(){
        if($(this).prop("checked") == true) {
            $("#inputSerieNum").val("ОТСУТСТВУЕТ");
            $("#inputSerieNum").removeAttr("required");
            $("#inputSerieNum").attr("disabled", "disabled");
            $("#inputSerieNum").removeClass("error");
        } else if($(this).prop("checked") == false) {
            $("#inputSerieNum").removeAttr("disabled");
            $("#inputSerieNum").attr("required", "required")
            $("#inputSerieNum").val("");
        }
    });
    $("#checkinputMark").click(function(){
        if($(this).prop("checked") == true) {
            $("#inputMark").val("ОТСУТСТВУЕТ");
            $("#inputMark").removeAttr("required");
            $("#inputMark").attr("disabled", "disabled");
            $("#inputMark").removeClass("error");
        } else if($(this).prop("checked") == false) {
            $("#inputMark").removeAttr("disabled");
            $("#inputMark").attr("required", "required")
            $("#inputMark").val("");
        }
    });
    $("#checkinputModel").click(function(){
        if($(this).prop("checked") == true) {
            $("#inputModel").val("ОТСУТСТВУЕТ");
            $("#inputModel").removeAttr("required");
            $("#inputModel").attr("disabled", "disabled");
            $("#inputModel").removeClass("error");
        } else if($(this).prop("checked") == false) {
            $("#inputModel").removeAttr("disabled");
            $("#inputModel").attr("required", "required")
            $("#inputModel").val("");
        }
    });
    $(".form-content__field-checkblockDocument").children("input").click(function(){
    	if($("#checkinputPTS").prop("checked") == true) {
            docType = "ПТС";
    		$("#inputSeries").val("");
    		$("#inputSeries").removeAttr("disabled");
            $("#inputNumber").removeClass("valid");
    		$("#inputNumber").attr("maxlength", "6");
    		$("#inputNumber").attr("minlength", "6");
    		$("#inputSeries").attr("required", "required");
    	} else if($("#checkinputSRTS").prop("checked") == true) {
            docType = "СРТС";
            $("#inputSeries").val("");
    		$("#inputSeries").off("keyup");
            $("#inputNumber").removeClass("valid");
    		$("#inputSeries").removeAttr("disabled");
    		$("#inputNumber").attr("maxlength", "6");
    		$("#inputNumber").attr("minlength", "6");
    		$("#inputSeries").attr("required", "required");
    	} else if($("#checkinputDocument").prop("checked") == true) {
            docType = "Иностранный документ";
    		$("#inputSeries").off("keyup");
    		$("#inputNumber, #inputSeries").val("");
            $("#inputNumber").removeClass("valid");
    		$("#inputSeries").attr("disabled", "disabled");
    		$("#inputSeries").removeAttr("required");
    		$("#inputNumber").removeAttr("maxlength");
    		$("#inputNumber").removeAttr("minlength");
            $("#inputSeries").removeClass("error");
    	}
    });
     $(".checkblock-using").children("input").click(function(){
        if($("#checkinputOwn").prop("checked") == true) {
            notes = "Для личных целей";
        } else if($("#checkinputRoute").prop("checked") == true) {
            notes = "Для маршрутных перевозок";
        } else if($("#checkinputStudy").prop("checked") == true) {
            notes = "Для учебной езды";
        } else if($("#checkinputTaxi").prop("checked") == true) {
            notes = "В такси";
        }
     });
     $(".form-content__field-checkblockPerson").children("input").click(function(){
        if($("#checkinputHabitant").prop("checked") == true && $("#checkinputPhisical").prop("checked") == true) {
            owType = "Гражданин РФ Физическое лицо";
        } else if($("#checkinputHabitant").prop("checked") == true && $("#checkinputForeign").prop("checked") == true) {
            owType = "Гражданин РФ Юридическое лицо";
        } else if($("#checkinputForeign").prop("checked") == true) {
            owType = "Иностранный гражданин";
        }
     });
     $(".tachYesNo").children("input").click(function(){
        if($("#checkinputYes").prop("checked") == true) {
            $(".form-content__tachograph-wrapper").show();
        } else if($("#checkinputNo").prop("checked") == true ) {
            $(".form-content__tachograph-wrapper").hide();
        }
     });

    $("#checkinputHabitant, #checkinputForeign, #checkinputPhisical, #checkinputEntity").click(function() {
    	if($("#checkinputEntity").prop("checked") == true) {
    		$(".form-content__field-input--company, .form-content__field-input--genSurname").show();
    		$(".form-content__field-input--surname").hide();
            $(".form-content__field-input--surname").next().hide();
    	} else if($("#checkinputPhisical").prop("checked") == true) {
    		$(".form-content__field-input--surname").show();
    		$(".form-content__field-input--company, .form-content__field-input--genSurname").hide();
            $(".form-content__field-input--company, .form-content__field-input--genSurname").next().hide();
    	} 

        if($("#checkinputForeign").prop("checked") == true) {
    		$(".form-content__field-input--surname").show();
    		$(".form-content__field-input--company, .form-content__field-input--genSurname").hide();
            $("#checkinputPhisical:checked, #checkinputEntity:checked").prop("checked", false);
            $("#checkinputPhisical").removeAttr("checked");
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
            $(".form-section").css("background", "linear-gradient(180deg, #FFD567 0%, #D89A04 100%)");
            $(".form-footer__btn-prev").css("background-color", "#FFDD84");
            $(".header").css("background-color", "#FFD567");
            $(".email").css("color", "#fff");
        }
    });
    $(".form__first-step").find("button.form-wizard-next").click(function() {
        if ($(".fieldset__first-step").css("display") == "none") {
           $(".form-footer__btn-prev").show();
        }
    });
    $("#form-wizard-prev").click(function() {
    	$(".form-section").css("background", "#F6F6F6");
        $(".header").css("background-color", "#fff");
        $(".form-footer__btn-prev").css("background-color", "#fff");
    });
     $(".form__six-step").change(function() {
        let $step = $(this),
        $submitBtn = $step.find(".submit-btn");
            if ($("#inputEmail, #inputPhone").hasClass("valid")) {
                 $submitBtn.removeAttr("disabled");
            } 
            if ($("#inputEmail, #inputPhone").hasClass("error")) {
                $submitBtn.attr("disabled", "disabled");
            }
    });
    // $(".form__first-step").find(".form-content__field-input").change(function(){
    //     if($(this).valid()) {
    //         $(".form__first-step").find(".form-wizard-next").removeAttr("disabled");
    //     }
    // // });
    //  $(".form__second-step").change(function() {
    //   let $step = $(this),
    //     $stepBtn = $step.find('.form-wizard-next');

    //   $step.find(".form-content__field-input").each(function() {
    //     let length = $step.find(".form-content__field-input.valid").length;
    //     console.log(length);
    //     if (length >= 3) {
    //       $stepBtn.removeAttr("disabled");
    //     } 
    //     if ($(".form-content__field-input").hasClass("error")) {
    //         $stepBtn.attr("disabled", "disabled");
    //     }
    //   });
    // });
    // $(".form__third-step").change(function() {
    //   let $step = $(this),
    //     $stepBtn = $step.find('.form-wizard-next');

    //   $step.find(".form-content__field-input").each(function() {
    //     let length = $step.find(".form-content__field-input.valid").length;
    //     console.log(length);
    //     let serie = $("#inputSeries");
    //     if (length == 1 && serie.prop("disabled") == true || length > 1 && serie.prop("disabled") == false) {
    //       $stepBtn.removeAttr("disabled");
    //     }
    //     if ($(".form-content__field-input").hasClass("error")) {
    //         $stepBtn.attr("disabled", "disabled");
    //     }
    //   });
    // });
    // $(".form__fourth-step").change(function() {
    //   let $step = $(this),
    //     $stepBtn = $step.find('.form-wizard-next');

    //   $step.find(".form-content__field-input").each(function() {
    //     let length = $step.find(".form-content__field-input.valid").length;
    //     console.log(length);
    //     $step.find(".form-footer").mouseover(function() {
    //         if (length = 0) {
    //             $("#inputVin").attr("required", "required");
    //             $("#checkinputVin:checked").prop("checked", false);
    //             form.valid();
    //         } 
    //     })
    //     // if (frame.val().length < 1 && carcass.val().length < 1 && vin.val().length < 1) {
    //     //     $("#inputVin").attr("required", "required");
    //     //     $("#checkinputVin:checked").prop("checked", false);
    //     //   // $stepBtn.removeAttr("disabled");
    //     //   // $(".inputCarcass").removeClass("error");
    //     //   // $(".inputFrame").removeClass("error");
    //     // } 
    //     if ($(this).hasClass("error")) {
    //         $stepBtn.attr("disabled", "disabled");
    //     }
    //   });
    // });

    // $(".form__fourth-step").find(".form-wizard-next").mouseover(function() {
    //         if(frame.val().length < 1 && carcass.val().length < 1 && vin.val().length < 1) {
    //             $("#inputVin").attr("required", "required");
    //             $("#inputVin").attr("aria-invalid", "true");
    //             $("#inputVin").removeAttr("disabled");
    //             $("#inputVin").addClass("error");
    //             $("#checkinputVin:checked").prop("checked", false);
    //             //alert("Хотя бы одно из трёх полей должно быть заполнено. Если ваш VIN содержит менее 17 символов, впишите его в поле 'Номер Кузова' ");
    //         }
    //     });
    // $(".form__second-step").find("#inputMaxMass").change(function(){
    //     if(form.valid()) {
    //         $(".form__second-step").find(".form-wizard-next").removeAttr("disabled");
    //     }
    // });
    // $(".form__third-step").find("#inputDate").change(function(){
    //     if(form.valid()) {
    //         $(".form__third-step").find(".form-wizard-next").removeAttr("disabled");
    //     }
    // });
    // $(".form__fourth-step").find("#checkinputOwn, #checkinputRoute, #checkinputTaxi, #checkinputStudy").change(function(){
    //     if(form.valid()) {
    //         $(".form__fourth-step").find(".form-wizard-next").removeAttr("disabled");
    //         $(".inputCarcass").removeClass("error")
    //         $(".inputFrame").removeClass("error")
    //     }
    // });
    // $(".form__five-step").find("#inputPatronymic").change(function(){
    //     if(form.valid()) {
    //         $(".form__five-step").find(".form-wizard-next").removeAttr("disabled");
    //     }
    // });
    // $(".form__six-step").find("input").change(function(){
    //     if(form.valid()) {
    //         $(".submit-btn").removeAttr("disabled");
    //     }
    // });
});



$(function() {
    let make = $("#inputMarkVeh").val();
    let model = $("#inputCarModel").val();
    let yearMake = $("#selectReleaseYear").val();
    let mileage = $("#inputMileage").val();
    let regSign = $("#inputGosNum").val();
    let fuel = $("#selectFuelType").val();
    let minWeight = $("#inputMinMass").val();
    let maxWeight = $("#inputMaxMass").val();
    let typeDoc = docType;
    let checkYear = $("#checkYear").val();
    let checkFuel = $("#checkFuel").val();
    let checkBreaks = $("#checkBreaks").val();
    let checkTires = $("#checkTires").val();
    let checkMilage = $("#checkMilage").val();
    let serial = $("#inputSeries").val();
    let number = $("#inputNumber").val();
    let date = $("#inputDate").val();
    let vin = $("#inputVin").val();
    let bodyNum = $("#inputCarcass").val();
    let chassis = $("#inputFrame").val();
    let note = notes;
    let typeOw = owType;
    let compName = $("#inputCompany").val();
    let compSurn = $("#inputGenSurname").val();
    let owSurname = $("#inputSurname").val();
    let owName = $("#inputName").val();
    let owParent = $("#inputPatronymic").val();
    let tahoSerial = $("#inputSerieNum").val();
    let tahoMake = $("#checkinputMark").val();
    let tahoModel = $("#checkinputModel").val();
    

      $('#form').submit(function(e) {
        var $form = $(this);
        $(this).attr('disabled', true);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: {
            make:make,
            model:model,
            yearMake:yearMake,
            mileage:mileage,
            regSign:regSign,
            fuel:fuel,
            minWeight:minWeight,
            maxWeight:maxWeight,
            typeDoc:typeDoc,
            checkYear:checkYear,
            checkFuel:checkFuel,
            checkBreaks:checkBreaks,
            checkTires:checkTires,
            checkMilage:checkMilage,
            serial:serial,
            number:number,
            date:date,
            vin:vin,
            bodyNum:bodyNum,
            chassis:chassis,
            note:note,
            typeOw:typeOw,
            compName:compName,
            compSurn:compSurn,
            owSurname:owSurname,
            owName:owName,
            owParent:owParent,
            tahoSerial:tahoSerial,
            tahoMake:tahoMake,
            tahoModel:tahoModel,
            },
        }).done(function() {
          console.log('success');
          $('.form').hide();
          $('.payment').show();
          $('body').scrollTop(5000);
            const el = document.getElementById('form');
            el.scrollIntoView(); // Прокрутка до верхней границы
        }).fail(function() {
          console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });