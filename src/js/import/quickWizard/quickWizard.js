(function ($) {

    $.fn.quickWizard = function (options, callback) {
        
        var settings = {
            'prevButton': '<button type="button" class="form-footer__btn-prev" id="form-wizard-prev" ><img class="form-footer__btn-prev--pic" src="/img/prevBtn.png"></button>',
            'nextButton': '<button type="button" class="form-wizard-next form-footer__btn-next">Далее <i class="fas fa-arrow-right form-footer__btn-next--icon"></i></button>',
            'activeClass': 'form-wizard-active',
            'element': 'fieldset',
            'footerDesc': '.form-footer__desc',
            'formWrapper': '.form-wizard-container',
            'submit': '[type = "submit"]',
            'root': null,
            'prevArgs': [0],
            'nextArgs': [0],
            'disabledClass': 'form-wizard-disabled',
            'containerClass' : 'form-wizard-container',
            'breadCrumb': true,
            'breadCrumbElement': 'legend',
            'breadCrumbListOpen': '<ol>',
            'breadCrumbListClose': '</ol>',
			'breadCrumbListClass': 'bread-crumb',
            'breadCrumbListElementOpen': '<li>',
            'breadCrumbListElementClose': '</li>',
            'breadCrumbActiveClass': 'bread-crumb-active',
            'breadCrumbCompletedClass': 'bread-crumb-completed',
            'breadCrumbPosition': 'before',
			'clickableBreadCrumbs': false
        };

        if (options) {
            $.extend(settings, options);
        }

        callback = callback || function () { };
        
        function disablePrev(prevObj){
            if ($(prevObj).is(":button")) {
                $(prevObj).attr('disabled', 'disabled');
            } else {
                $(prevObj).addClass(settings.disabledClass);
            }
        }

        return this.each(function () {

            var container = $(this);
            var children = container.children(settings.element);            
            var activeClassSelector = '.' + settings.activeClass;
            var submitButton = container.find(settings.submit);
            var formWrapper = container.find(settings.formWrapper);
            var footerDesc = container.find(settings.footerDesc);
            var insertedNextCallback;
            var originalNextCallback;
            var root;
            var breadCrumbList;
            
            if(settings.root === null){                
                root = children.first();
            }else{
                root = $(settings.root);
            }
            
            /* Set up container class */
            if(settings.containerClass != ""){
                container.addClass(settings.containerClass);
            }
            
            /* Set up bread crumb menu */
            if (settings.breadCrumb) {
                breadCrumbList = settings.breadCrumbListOpen;

                children.find(settings.breadCrumbElement).each(function (index) {
                    breadCrumbList += settings.breadCrumbListElementOpen + $(this).text() + settings.breadCrumbListElementClose;
                });

                breadCrumbList += settings.breadCrumbListClose;
                if (settings.breadCrumbPosition === 'after') {
                    breadCrumbList = $(breadCrumbList).insertAfter(container);
                } else {
                    breadCrumbList = $(breadCrumbList).insertBefore(container);
                }
                breadCrumbList.children().first().addClass(settings.breadCrumbActiveClass);
				breadCrumbList.addClass(settings.breadCrumbListClass);

            }

            /* Check if the last argument is a callback function */
            if (typeof (settings.nextArgs[settings.nextArgs.length - 1]) == "function") {

                /* If it is store the user provided callback */
                originalNextCallback = settings.nextArgs[settings.nextArgs.length - 1];

                /* then replace it with a wrapper function that calls both the user provided function and ours */
                settings.nextArgs[settings.nextArgs.length - 1] = function () { insertedNextCallback.call(); originalNextCallback.call(); };

            } else {
                
                /* If there is no callback function append ours */
                settings.nextArgs[settings.nextArgs.length] = function () { insertedNextCallback.call(); }
            }

            /* Insert the previous and next buttons after the submit button and hide it until we're ready */
            
            var prev = $(settings.prevButton).insertBefore(container);
            var next = $(settings.nextButton).insertAfter(footerDesc);
            submitButton.hide();
            
            /* If the root element is first disable the previous button */            
            if(root.is(':first-child')){
                disablePrev(prev);
            }

            children.hide();
            root.toggleClass(settings.activeClass).show();

            $(next).click(function () {
                var active = container.find(activeClassSelector);
                var vin = $("#inputVin");
                var frame = $("#inputFrame");
                var carcass = $("#inputCarcass");
                var maxMass = $("#inputMaxMass");
                var minMass = $("#inputMinMass");
                var maxMassLabel = '<label id="inputMaxMass-errorv2" class="errorv2" for="inputMaxMass" style="display: none;">Неправильно заполнено поле</label>';
                
                if (frame.val().length < 1 && carcass.val().length < 1 && vin.val().length < 1) {
                    // $("label#inputVin-error").attr("style", "display:none!important");
                    // $("<style>label#inputVin-error{display:none!important;}</style>").appendTo(".hint-wrapper");
                    // $("<style>label#inputCarcass-error{display:none!important;}</style>").appendTo(".hint-wrapper");
                    // $("<style>label#inputFrame-error{display:none!important;}</style>").appendTo(".hint-wrapper");
                    // $("label#inputCarcass-error").css("display", "none!important");
                    $("#inputVin, #inputCarcass, #inputFrame").attr("required", "required");
                    $("#inputVin, #inputCarcass, #inputFrame").removeClass("error");
                    $("#inputVin, #inputCarcass, #inputFrame").removeAttr("disabled");
                    $("#checkinputVin:checked, #checkinputCarcass:checked, #checkinputFrame:checked").prop("checked", false);
                    // $("#inputVin-error, #inputCarcass-error, #inputFrame-error").attr("style", "display:none;");
                } else {
                    $("style").empty();
                    $("#inputVin-error, #inputCarcass-error, #inputFrame-error").attr("style", "display:none;");
                }
                // if (frame.val().length > 1 && carcass.val().length > 1 && vin.val().length > 1) {
                //     $("style").empty();
                // }
                // console.log(minMass.val() + " " + maxMass.val());
                // if(minMass.val() > maxMass.val()) {
                //     $(minMass).addClass("error");
                //     $(maxMass).removeClass("valid");
                //     $("#inputMaxMass-errorv2").text("");
                //     $(maxMassLabel).insertAfter(maxMass);
                //     $("#inputMaxMass-errorv2").show();
                //     $("#inputMinMass-error").show();
                //     $(minMass).valid() == true;
                // } else {
                //     alert("suka");
                // }
                /* Check to see if the forms are valid before moving on */

                if (active.find(":input").valid()) {
                    var nextSet = active.next(settings.element);
                    var afterNextSet = nextSet.next(settings.element);
                    if (nextSet.length) {
                        $(active).toggleClass(settings.activeClass);
                        $(nextSet).toggleClass(settings.activeClass);
                        
                        /* Get the current element's position and store it */
                        active.data('posiiton', active.css('position'));

                        /* Set our callback function */
                        insertedNextCallback = function () { active.css('position', active.data('posiiton')); };

                        /* Call show and hide with the user provided arguments */
                        active.css('position', 'absolute').hide.apply(active, settings.nextArgs);
                        nextSet.show.apply(nextSet, settings.prevArgs);
                        
                        /* If bread crumb menu is used make those changes */
                        if (settings.breadCrumb) {
                            breadCrumbList.find('.' + settings.breadCrumbActiveClass).removeClass(settings.breadCrumbActiveClass).next().addClass(settings.breadCrumbActiveClass);
                        }

                        /* If the previous button is a button enable it */
                        if ($(prev).is(":button")) {
                            $(prev).removeAttr('disabled');
                        } else {
                            /* If it's anything else, remove the disabled class */
                            $(prev).removeClass(settings.disabledClass);
                        }
                    }

                    /* If there are no more sections, hide the next button and show the submit button */
                    if (afterNextSet.length <= 0) {
                        $(next).hide();
                        submitButton.show();
                    }
                }
            });

            $(prev).click(function () {
                var active = container.find(activeClassSelector);
                var prevSet = active.prev(settings.element);
                var beforePrevSet = prevSet.prev(settings.element);
                if (prevSet.length) {
                    $(active).toggleClass(settings.activeClass);
                    $(prevSet).toggleClass(settings.activeClass);                    
                    prevSet.data('posiiton', prevSet.css('position'));
                    insertedNextCallback = function () { prevSet.css('position', prevSet.data('posiiton')); };
                    active.hide.apply(active, settings.prevArgs);
                    prevSet.css('position', 'absolute').show.apply(prevSet, settings.nextArgs);
                    if (settings.breadCrumb) {
                        breadCrumbList.find('.' + settings.breadCrumbActiveClass).removeClass(settings.breadCrumbActiveClass).prev().addClass(settings.breadCrumbActiveClass);
                    }
                    $(next).show();
                    submitButton.hide();
                }
                if (beforePrevSet.length <= 0) {
                    disablePrev(prev);
                }
            });
			
			if(settings.breadCrumb && settings.clickableBreadCrumbs){
				$('.' + settings.breadCrumbListClass).children().click(function(){
					var active = container.find(activeClassSelector);
					var current = $(settings.element).eq($(this).index());
					
					var prevSet = current.prev(settings.element);
					var nextSet = current.next(settings.element);

					$(active).toggleClass(settings.activeClass);
					current.toggleClass(settings.activeClass);
					
					
					/* Get the current element's position and store it */
					active.data('posiiton', active.css('position'));	
					
					/* Set our callback function */
					insertedNextCallback = function () { active.css('position', active.data('posiiton')); };	

					/* Call show and hide with the user provided arguments */
					active.css('position', 'absolute').hide.apply(active, settings.nextArgs);
					current.parents().show.apply(current, settings.prevArgs);	
					
					breadCrumbList.find('.' + settings.breadCrumbActiveClass).removeClass(settings.breadCrumbActiveClass);
					$(this).addClass(settings.breadCrumbActiveClass);
					
					if(prevSet.length){
					    $(next).show();
						submitButton.hide();
					}
					
					if ($(prev).is(":button")) {
						$(prev).removeAttr('disabled');
					} else {
						/* If it's anything else, remove the disabled class */
						$(prev).removeClass(settings.disabledClass);
					}					
					
					if (prevSet.length <= 0) {
						disablePrev(prev);
					}
					
                    if (nextSet.length <= 0) {
						$(next).hide();
                        submitButton.show();
                    }					
				});
			}
            callback.call(this);

        });

    };
})(jQuery);