jQuery(document).ready(function() {  
    jQuery('.cd-dropdown-content li.menu-item-has-children').addClass('has-children');  
    jQuery('.cd-dropdown-content ul.sub-menu').addClass('is-hidden cd-dropdown-content');  
    jQuery('.cd-dropdown-content ul.sub-menu').prepend('<span class="go-back"><a href="#0">Back</a></span>');  
      jQuery(".cd-dropdown-content .menu-item-has-children > a").click(function(event){  
          event.preventDefault();  
           var a = jQuery(this);  
          a.next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")  
      });   
jQuery( ".go-back" ).click(function() { 
  var n = jQuery(this); 
  n.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out") 
});
}); 

jQuery(document).ready(function() {
	/*
  jQuery('.find_auto_part,.search_sec').click(function(e){
    e.preventDefault();
    jQuery('.iismodal2,.iismodal').toggle();
    //jQuery(this).css;
  });
*/
  jQuery('#customer_details .col-1').removeClass('col-1').addClass('col-12').css({"display": "inline-block", "vertical-align": "top"});
jQuery('#customer_details .col-2').removeClass('col-2').addClass('col-12').css('display','inline-block');
jQuery('.woocommerce-MyAccount-content .col-1').removeClass('col-1').addClass('col-12');
jQuery('.woocommerce-MyAccount-content .col-2').removeClass('col-2').addClass('col-12');
});

jQuery(document).ready(function() {  

if (jQuery('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                jQuery('#back-to-top').addClass('show');
            } else {
                jQuery('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    jQuery(window).on('scroll', function () {
        backToTop();
    });
    jQuery('#back-to-top').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


});


//Latest Arrivals Slider
jQuery(document).ready(function() {
    var home_owl = jQuery('.latest_arrival_slider');
    home_owl.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
      items: 3,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          480:{
              items:2,
              margin: 10
          },
          768:{
              items:3,
          }
      }
    })
  
  jQuery('.owl-carousel .owl-item').on('mouseenter',function(e){
      jQuery(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
  jQuery('.owl-carousel .owl-item').on('mouseleave',function(e){
      jQuery(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
  })

  })


//Get To Know Us Slider
jQuery(document).ready(function() {
    var home_owl = jQuery('.get_to_know_slider');
    home_owl.owlCarousel({
    loop: true,
    nav:true,
    dots: false,
    margin: 0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
      items: 1,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          576:{
              items:1,
          },
          768:{
              items:1,
          }
      }
    })
  
  jQuery('.owl-carousel .owl-item').on('mouseenter',function(e){
      jQuery(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
  jQuery('.owl-carousel .owl-item').on('mouseleave',function(e){
      jQuery(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
  })

  })