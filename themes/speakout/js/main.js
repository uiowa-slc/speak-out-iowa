
	
$(".def-tip").each(function(index){
	//alert($(this).attr('data-definition-id'));
	var defId = $(this).data('definition-id');
	var defElementName = "#" + defId;
	var defElement = $(defElementName);
		//alert(defElement);
	if (typeof defElement !== 'undefined') {
	   $(this).attr('title', defElement.text());
	}


});


$(document).foundation();