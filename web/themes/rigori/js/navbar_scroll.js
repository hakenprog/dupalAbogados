(jQuery(document).ready(function(){      
    if(jQuery("#textHero").length){
    var scroll_start = 0;
    var startchange = jQuery('#textHero');
    var offset = startchange.offset();
           jQuery(document).scroll(function() { 
              scroll_start = jQuery(document).scrollTop();
              if(scroll_start > offset.top) {
                  jQuery(".navbar").css({'background-color': 'darkorange', 'transition': '400ms'});
		  jQuery(".logo").css({'width':'80%'})
              } else {
                  jQuery('.navbar').css('background-color', 'transparent');
		  jQuery(".logo").css({'width':'100%', 'transition': '400ms'} )
              }
          });
      
   } else {
       jQuery(".header").css('height','96px');
       jQuery(".navbar").css({'background-color': 'darkorange'});
     }
 }))