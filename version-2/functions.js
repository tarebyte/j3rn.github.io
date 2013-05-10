function resizeElements() {
	var pageHeight = $(window).height();
	var pageWidth = $(window).width();

	pages = $(".page");
	
	for(var i = 0; i < pages.length; i++){
		page = pages[i];
		
		$(page).width(pageWidth);
		$(page).height(pageHeight);
	}
}
			
function scrollToElement(element) {
	pages = $(".page");

	$(window).scrollTop($(pages[element]).offset().top);
}

