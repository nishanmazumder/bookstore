// Author's Js..

//Post Slider Js
$('#bk-first-slider').owlCarousel({
    loop:true,
	autoplay: true,
    margin:10,
	dots: false,
	nav:true,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
			nav:false
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('#bk-first-slider2').owlCarousel({
	autoplay: true,
    margin:10,
	dots: false,
	nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('#bk-first-slider3').owlCarousel({
	autoplay: true,
    margin:10,
	dots: true,
	nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
			dots: false
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('#bk-first-slider4').owlCarousel({
	autoplay: true,
    margin:10,
	dots: false,
	nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('#bk-first-slider5').owlCarousel({
	autoplay: true,
    margin:10,
	dots: true,
	nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
			dots: false
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})


//Bootstrap Nav

$('.navbar-nav > li.dropdown').hover(
    function() {
      $('div.dropdown-menu', this).stop(true, true).fadeIn('slow');
      $(this).addClass('open');
    }, function() {   
      $('div.dropdown-menu', this).stop(true, true).fadeOut('slow');
      $(this).removeClass('open');
    }
);