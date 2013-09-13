	   $(document).ready(function(){
		  $("#link_list").hide();
		   
		  $("#nav_section").mouseover(function(){
			  $("#link_list").show(); 
		  });
		  
		  $("#nav_section").mouseout(function(){
			  $("#link_list").hide();  
		  })
		  
		  size_divs = $(".size_div");
          
                  for (i = 0; i < size_divs.length; i++) {
                  children = $(size_divs[i]).children();
              
                  var max_height=0;
              
                  for(j = 0; j < children.length; j++){
                      if($(children[j]).height() > max_height){
                          max_height = $(children[j]).height();
                      }
                  }
              
                  console.log(max_height);
              
                  for(j = 0; j < children.length; j++){
                      $(children[j]).height(max_height);
                  }
                  }
	   });
