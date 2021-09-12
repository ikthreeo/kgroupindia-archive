

jQuery(document).ready(function($) {


	$('li.social-icons > ul > li[data-color]').hover(function(e){
		$(this).css('background-color', $(this).data('color') );
	},
	function(e){
		$(this).css('background-color', '#fff' );
	});
	
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {

        e.preventDefault();

        $(this).siblings('a.active').removeClass("active");

        $(this).addClass("active");

        var index = $(this).index();

        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");

        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");

    });



    $('#contactform').submit(function(){



        var action = $(this).attr('action');



        $("#response_message").slideUp(750,function() {

            $('#response_message').hide();

    

            $('input#submit').attr('disabled','disabled');

            $('img.loader').css('visibility', 'visible');

    

            $.post(action, {

                contact_name: $('#contact_name').val(),

                contact_email: $('#contact_email').val(),

                contact_website: $('#contact_website').val(),

                contact_subject: $('#contact_subject').val(),

                contact_message: $('#contact_message').val(),

                test: $('#test_test').val()

            },

                function(data){

                    document.getElementById('response_message').innerHTML = data;

                    $('#response_message').slideDown('slow');

                    $('#contactform img.loader').css('visibility', 'hidden' );

                    

                    $('#submit').removeAttr('disabled');

                    if(data.match('success') != null) $('#contactform').slideUp('slow');

    

                }

            );



        });



        return false;



    });







// Accordion Toggle Items

    var iconOpen = 'fa fa-arrow-right',

        iconClose = 'fa fa-arrow-down';

        jQuery(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {

            var $target = jQuery(e.target)

            $target.siblings('.accordion-heading')

            .find('em').toggleClass(iconOpen + ' ' + iconClose);

                if(e.type == 'show')

                    $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');

                if(e.type == 'hide')

                jQuery(this).find('.accordion-toggle').not($target).removeClass('active');

            }); 

// DM Top

    jQuery(window).scroll(function(){

        if (jQuery(this).scrollTop() > 1) {

            jQuery('.dmtop').css({bottom:"25px"});

        } else {

            jQuery('.dmtop').css({bottom:"-100px"});

        }

    });

    jQuery('.dmtop').click(function(){

        jQuery('html, body').animate({scrollTop: '0px'}, 800);

        return false;

    });





(function ($, window, delay) {

  // http://jsfiddle.net/AndreasPizsa/NzvKC/

  var theTimer = 0;

  var theElement = null;

    var theLastPosition = {x:0,y:0};

  $('[data-toggle]')

    .closest('li')

    .on('mouseenter', function (inEvent) {
        console.log('test');

    if (theElement) theElement.removeClass('open');

    window.clearTimeout(theTimer);

    theElement = $(this);



    theTimer = window.setTimeout(function () {

      theElement.addClass('open');

    }, delay);

  })

    .on('mousemove', function (inEvent) {

        if(Math.abs(theLastPosition.x - inEvent.ScreenX) > 4 || 

           Math.abs(theLastPosition.y - inEvent.ScreenY) > 4)

        {

            theLastPosition.x = inEvent.ScreenX;

            theLastPosition.y = inEvent.ScreenY;

            return;

        }

        

    if (theElement.hasClass('open')) return;

    window.clearTimeout(theTimer);

    theTimer = window.setTimeout(function () {

      theElement.addClass('open');

    }, delay);

  })

    .on('mouseleave', function (inEvent) {

    window.clearTimeout(theTimer);

    theElement = $(this);

    theTimer = window.setTimeout(function () {

      theElement.removeClass('open');

    }, delay);

  });

})(jQuery, window, 200); // 200 is the delay in milliseconds





   


        /* ==============================================

    LIGHTBOX

    =============================================== */



    jQuery('a[data-gal]').each(function() {

        jQuery(this).attr('rel', jQuery(this).data('gal')); });     

    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});





jQuery(function($){

// Quantity buttons

    $( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" class="plus" />' ).prepend( '<input type="button" value="-" class="minus" />' );



        $( document ).on( 'click', '.plus, .minus', function() {



        // Get values

        var $qty        = $( this ).closest( '.quantity' ).find( '.qty' ),

            currentVal  = parseFloat( $qty.val() ),

            max         = parseFloat( $qty.attr( 'max' ) ),

            min         = parseFloat( $qty.attr( 'min' ) ),

            step        = $qty.attr( 'step' );



        // Format values

        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;

        if ( max === '' || max === 'NaN' ) max = '';

        if ( min === '' || min === 'NaN' ) min = 0;

        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;



        // Change the value

        if ( $( this ).is( '.plus' ) ) {



            if ( max && ( max == currentVal || currentVal > max ) ) {

                $qty.val( max );

            } else {

                $qty.val( currentVal + parseFloat( step ) );

            }



        } else {



            if ( min && ( min == currentVal || currentVal < min ) ) {

                $qty.val( min );

            } else if ( currentVal > 0 ) {

                $qty.val( currentVal - parseFloat( step ) );

            }



        }



        // Trigger change event

        $qty.trigger( 'change' );

    });



});


});










    

