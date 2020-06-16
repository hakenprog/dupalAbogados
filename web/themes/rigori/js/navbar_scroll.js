
  window.onhashchange = function(){
  	if (100 < jQuery(".navbar").offset().top){
    	jQuery(".navbar").addClass("header-collapse");
       	jQuery(".logo").css({'width':'80%','transition':'300ms'})
    }
  
  }
  
  	jQuery(".navbar").length && jQuery(window).scroll(function() {
    	     if (100 < jQuery(".navbar").offset().top){ 
        	 	jQuery(".navbar").addClass("header-collapse");
            	jQuery(".logo").css({'width':'80%','transition':'300ms'})
         
         	}else{
         
         		jQuery(".logo").css({'width':'100%', 'transition':'300ms'});
         		jQuery(".navbar").removeClass("header-collapse");
         
       	}
  	})
  
  
  jQuery(document).ready(function(){
  		if(!jQuery("#textHero").length){
			jQuery("#header").css({'height': '86px'})
            jQuery(".navbar").css("background-color","#A5A5A6")
    	}    
    })
    
    
  



