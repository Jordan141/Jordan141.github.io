$(window).scroll(function() {
    
    // menu stick to top //
    var scrolltop = $(window).scrollTop();
    var bannerscrolltop = $(window).scrollTop() + 102;
    var bannerheight = $('.banner').height();
    
        
    if (bannerscrolltop > bannerheight) {
        $('header').addClass('no-banner').removeClass('transparent');
    } else {
        $('header').removeClass('no-banner').addClass('transparent');
    }
    
    if (bannerscrolltop == 102) {
       $('header').removeClass('transparent'); 
    }
    
    
    
    // Back to top button //
    var winheight = $(window).height();
    var docheight = $(document).height();
    var bottompos = docheight - winheight - 40;
    var scrolltop = $('body').scrollTop();
    var backtotop = $('#back-to-top');

    if (scrolltop > 300) {
        backtotop.addClass('fade-in');
    } else {
       backtotop.removeClass('fade-in');
    }
    
    if (scrolltop > bottompos) {
        backtotop.addClass('bottom-margin');
    } else {
        backtotop.removeClass('bottom-margin');  
    }
    
    
    // Fade in page elements //
    
    // Fade up //
    $('.fade-up').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4; // divided by 4 for top 25% of object //
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','top':'0'},500);
        }

    });

    // Fade from left //
    $('.fade-left').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4; // divided by 4 for top 25% of object //
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','left':'0','top':'0'},500);
        }

    }); 

    // Fade from right //
    $('.fade-right').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4; // divided by 4 for top 25% of object //
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','right':'0','top':'0'},500);
        }

    });
    
    

});








$(document).ready(function () {
    "use strict";
    
    
    // SCROLL TO TOP //
    $('#back-to-top').click(function () {
        $('body,html').animate({
			scrollTop: 0 ,
		 	}, 700
		);
    });
    
    
    // SCROLL TO DIV //
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 70 //extra height to get past fixed header
                }, 700);
                return false;
            }
        }
    });
    
    
    // ANCHOR TAG SCROLL //
    if (document.location.hash) {
        var hash = window.location.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top - 65 }, 1000);
    }
    
 
});





