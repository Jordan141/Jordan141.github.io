$(document).ready(function () {
    "use strict";

    // FUNCTIONS //
    
    // Set columns equal height //
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function() {
            var currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn  = currentHeight;
            }

        });
        columns.height(tallestcolumn);
    }
    
    
    // Blog li equal height on devices bigger than 640px //
    if ($(window).width() > 640) {
        $('.equal-heights').each(function() {
            var sameli = $(this).find('li');
            setEqualHeight(sameli);
        });
    }

    
    function openmenu() {
        $('header, #menu-button, #menu, #search-button, #search-box').toggleClass('nav-open');
        var text = $('#menu-button .text').text() == 'Menu' ? 'Close' : 'Menu';
        $('#menu-button .text').text(text);   
    }
    
    
    
    // Menu toggle //
    $('#menu-button').click(function () {
        openmenu();
    });
    
     $(document).keyup(function(e) {
         if (e.keyCode == 113) { 
             openmenu();
         }
     });
         
    
    
    // Search toggle //
    $('#search-button').click(function () {
        $("#search-box").slideToggle(300,function(){
             $(this).focus();
          });
        $('#menu-wrap').toggleClass('search-open');
    });
    
    // Reveal modal //
    //$('#request-callback, #close-modal').click(function () {
    $('#close-modal').click(function () {
        $('.modal-window').toggleClass('open');
        $('body').toggleClass('static');
    });


    // info box dialogs
    $(".infoButton").click(function() {
        $(this).parent().next('.readMoreBox').slideToggle();
        $(this).parent().hide();
    });

    $(".closeBox").click(function (e) {
        $(this).parent().slideUp();
    });

    
    // ESC button close modal & Menu //
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $('.modal-window').removeClass('open'); // close modal window //
            
            $('header, #menu-button, #menu, #search-button, #search-box').removeClass('nav-open'); // close menu //
            $('#menu-button .text').text('Menu'); 
        }
    });
    
    
    // Our Offices //
    $('#our-offices li a').click(function () {
        $('#our-offices li a').removeClass('active');
        $(this).addClass('active');
    });
    
    
    // Fade In Elements //
    $('.banner-wrap').addClass('slide-in');
    $('#menu-button').animate({opacity: "1"}, 500);
    $('#banner-list li.one').delay(1000).fadeTo(500, 1);
    $('#banner-list li.two').delay(1500).fadeTo(500, 1);
    $('#banner-list li.three').delay(2000).fadeTo(500, 1);
    $('#bottom-arrow').delay(1000).fadeTo(500, 1);
    

    
    // Placeholder fix for IE //
    $('input, textarea').placeholder();


    // Clear contact forms //
    $('.clear-form').click(function () {
        $('.contact-form').find('input, select, textarea').removeClass('error');
        $('.contact-form').find('label').hide();
    });
    
    
    // Careers //
    if ($('#careers > li').length < 1){
        $('#careers').append('<li>Sorry, we aren\'t hiring at this present time.</li>');
    }
    
    
    // Filter Case Studies //
    $('.filter-cases li a').click(function () {
        $(this).toggleClass('active');
    });
  
  

    if (typeof jQuery != 'undefined') {
	    jQuery(document).ready(function($) {
		    var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i;
		    var baseHref = '';
		    if (jQuery('base').attr('href') != undefined)
			    baseHref = jQuery('base').attr('href');
		    jQuery('a').each(function() {
			    var href = jQuery(this).attr('href');
			    if (href && (href.match(/^https?\:/i)) && (!href.match(document.domain))) {
				    jQuery(this).click(function() {
					    var extLink = href.replace(/^https?\:\/\//i, '');
					    _gaq.push(['_trackEvent', 'External', 'Click', extLink]);
					    if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
						    setTimeout(function() { location.href = href; }, 200);
						    return false;
					    }
				    });
			    }
			    else if (href && href.match(/^mailto\:/i)) {
				    jQuery(this).click(function() {
					    var mailLink = href.replace(/^mailto\:/i, '');
					    _gaq.push(['_trackEvent', 'Email', 'Click', mailLink]);
				    });
			    }
			    else if (href && href.match(filetypes)) {
				    jQuery(this).click(function() {
					    var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
					    var filePath = href;
					    _gaq.push(['_trackEvent', 'Download', 'Click-' + extension, filePath]);
					    if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
						    setTimeout(function() { location.href = baseHref + href; }, 200);
						    return false;
					    }
				    });
			    }
		    });
	    });
    }

});



