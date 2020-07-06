$(function(){
    new WOW().init();
});

/** magnific popup */
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

/* owel carousel  team*/

$(function(){
	$('#our_team').owlCarousel({
	  loop:true,
	  margin:20,
	  responsiveClass:true,nav:true,dots:true,autoplay:true,
	  responsive:{
		0:{
			items:1,dots:true,
		   
		},
		480:{
			items:2,dots:true,
		   
		},
		768:{
			items:3,dots:true,
			
			
		},
		992:{
			items:3,dots:true,
			
			
		}
	}
})
});
  
  /* owel carousel  Testimonial*/

  $(function(){
	$('#our_customers').owlCarousel({
	  loop:true,
	  margin:20,
	  responsiveClass:true,nav:true,dots:true,autoplay:true,
	  responsive:{
		  0:{
			  items:1,dots:true,
			 
		  },
		  600:{
			  items:1,dots:true,
			 
		  },
		  1000:{
			  items:1,dots:true,
			  
			  
		  }
	  }
  })
  });

/** counter-up  */
$(function(){
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	
})

 /* owel carousel  clients*/

 $(function(){
	$('#our_clients').owlCarousel({
	  loop:true,
	  margin:20,
	  responsiveClass:true,nav:true,dots:true,autoplay:true,
	  responsive:{
		  0:{
			  items:1,dots:true,
			 
		  },
		  480:{
			  items:3,dots:true,
			 
		  },
		  768:{
			  items:5,dots:true,
			  
			  
		  },
		  992:{
			  items:6,dots:true,
			  
			  
		  }
	  }
  })
  });

  /*** scrollspy */

  $(function(){
	$(".header_navbar").scrollspy();
	$(".header_navbar").scrollspy({ offset: -100 });
});

/** header jquery effect */

$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()<50){
			$("header").removeClass("top_header_navbar");
			$("#back_to_top").fadeOut();
			//hide nave
		}else{
			//show nav
			$("header").addClass("top_header_navbar");
			$("#back_to_top").fadeIn();
		}
	});
});

// smoot scroll effet 
/*$(function () {

    $("a.smooth_scroll").click(function () {
        event.preventDefault();

        // Prendre Id section par exemple: #home
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top 
        }, 1250, "easeInOutExpo");
    });

});

*/
/*
    function myFunction() {
		
      var x = document.getElementById("header_navbar"); 
      if (x.className === "header_navbar") {
        x.className += " responsive";
      } else {
        x.className = "header_navbar";
      }
    }
    */

/**function myFunction() {
	  
      var x = $('#header_navbar'); 
      if (x.className === "header_navbar") {
		x.className += " responsive";
      } else {
        x.className = "header_navbar";
      }
	}*/

/** function myjQueryFunction() {
	var x = $('#header_navbar');

	if (!x.hasClass('responsive')) { // yla ma3andouch class responsive

		x.addClass('responsive'); // zidlo class responsive

	} else { // yla 3ando class responsive

		x.removeClass('responsive'); // 7aydlo class responsive
	}
} */

/*function myjQueryFunction() {
	var x = $('#header_navbar');

	x.toggleClass('responsive'); // toggleClass kat3ni : yla kant 3ando class responsive 7aydha, wyla makantch zideha.

}*/

// collapse mobile menu on click 
$(document).ready(function () {
    $('.collapse').on("click touch", function () {
		var x = $('#header_navbar');
		x.toggleClass('responsive'); // toggleClass kat3ni : yla kant 3ando class responsive 7aydha, wyla makantch zideha.
    })
}); 

// collapse mobile menu on click a menu
$(document).ready(function () {
    $(".header_navbar ul li a").on("click touch", function () {
        $(".collapse").click();
    })
});


/*
$(document).ready(function () {
    $(".header_navbar .test ").on("click touch", function () {
		$(".test").css("background-color", "#000");
		$(".cliquable a").click();
    })
});*/