
setTimeout(window.onload = function(){
    if (100 < jQuery(".navbar").offset().top){ 
    	jQuery(".navbar").addClass("header-collapse");
        jQuery(".logo").css({'width':'80%','transition':'300ms'})    
    }
    
   	if(!jQuery("#textHero").length){
			var height = document.getElementById('navbar-main').offsetHeight
            jQuery("#main-wrapper").css('margin-top', height);
            jQuery(".navbar").addClass("header-collapse");
  	}      
    
    
  }, 700);

  
   if(jQuery("#textHero").length){ 
    jQuery(".navbar").length && jQuery(window).scroll(function() {
    	if (100 < jQuery(".navbar").offset().top){ 
        	 	jQuery(".navbar").addClass("header-collapse");
            	jQuery(".logo").css({'width':'80%','transition':'300ms'})
        
       	}
        
        else{
         
         		jQuery(".logo").css({'width':'100%', 'transition':'300ms'});
         		jQuery(".navbar").removeClass("header-collapse");
         
       	}
  	})
    }
    
    
 
  
  
  
    
  



