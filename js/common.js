"use strict";

// page preloader
$(window).on('load', function() {

	setTimeout(function() {
		$('.page-preloader').addClass('js-page-preloader_loaded');
	}, 2000 );

	setTimeout(function() {
		$('.page-preloader').css('display', 'none');
	}, 3000 );

});
// - page preloader


$(document).ready(function(){

	if (Modernizr.touch) {
		// better hover on mobile devices
        // run the forEach on each figure element
        [].slice.call(document.querySelectorAll('a, button')).forEach(function(el, i) {
            // check if the user moves a finger
            var fingerMove = false;
            el.addEventListener('touchmove', function(e) {
                e.stopPropagation();
                fingerMove = true;
            });
            // always reset fingerMove to false on touch start
            el.addEventListener('touchstart', function(e) {
                e.stopPropagation();
                fingerMove = false;
            });
        });
        // - better hover on mobile devices

        // responsive menu
		$('.list-menu__link_has-nested-menu').on('click', function(e) {
			e.preventDefault();
			$('.list-menu__link_has-nested-menu').removeClass('js-nested-menu-opened');
			$(this).toggleClass('js-nested-menu-opened');
		});
		// - responsive menu

    };

	// parallax init
	$('.js-jarallax_type_1').jarallax({
		type: "scroll",
		speed: 0.30
	});

	$('.js-jarallax_type_2').jarallax({
		type: "scroll",
		speed: 0.90
	});
	// - parallax init

	// init main plugins only after all images are loaded
	$('body').imagesLoaded(function(e) {
		$('.js-block-model_equal-height').equalHeights();

		$('.js-block-team-member_equal-height').equalHeights();		

		$('.js-projects-grid').masonry({
			columnWidth: '.js-projects-grid-sizer',
			itemSelector: '.js-projects-grid-item',
			percentPosition: true
		});

		$('.js-models-grid').masonry({
			columnWidth: '.js-models-grid-sizer',
			itemSelector: '.js-models-grid-item',
			percentPosition: true
		});

		$('.js-blog-grid').masonry({
			columnWidth: '.js-blog-grid-sizer',
			itemSelector: '.js-blog-grid-item',
			percentPosition: true
		});		

		$('.js-carousel-testimonials').owlCarousel({
			autoplay: false,
			autoplaySpeed: 600,
			autoplayTimeout: 6000,
			autoplayHoverPause: true,
			autoHeight: true,
			loop: true,
			items: 1,
			nav: false,
			dots: true,
			dotsContainer: '.js-testimonials-controls'
		});
	});

	// particles.js
	if ($('#particles-js').length) {
		particlesJS.load('particles-js', 'js/particlesjs-config.json');
	}
	// - particles.js

	// video background
	$('#js-video-background').YTPlayer({
		fitToBackground: true,
		loop: true,
		videoId: 'ul-K_c-RfHk',
		quality: 'small',
		playerVars: {
			modestbranding: 0,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			branding: 0,
			rel: 0,
			autohide: 0,
			start: 35
		}
	});	
	// - video background

	// ignore clicking on nested menu link
	$('.menu-responsive-button').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('js-menu-responsive-button-active');
		$('.list-menu').toggleClass('js-menu-opened');
		$('.list-menu__link_has-nested-menu').removeClass('js-nested-menu-opened');
	});
	// - ignore clicking on nested menu link

	// magnific gallery
	$('.js-popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
	// - magnific gallery

	// form handling
    $('.js-ajax-form').submit(function(e) {
    	e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize()
        }).done(function() {
            setTimeout(function() {
                alert('Message Succesfully sent to Celebsbooking');
            }, 1500);
        }).fail(function() {
            setTimeout(function() {
                alert('Something went wrong :( Please contact us directly to my email.');
            }, 1500);
        });
    });	
});




