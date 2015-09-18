$(function(){
	var mbId = $('.xs-mb-menu').attr('data-mb-menu');
	var xsMbMenu  = '';
	$('.xs-mb-menu > li > a').each(function(){
		var xsMbMenuHref = $(this).attr('href');
		var xsMbMenuText = $(this).text();
		if($(this).parent().hasClass('active')){
			var selected = 'selected';
		}else{
			var selected = '';
		}
		xsMbMenu = xsMbMenu + '<option value='+ xsMbMenuHref +' '+ selected +'>'+ xsMbMenuText +'</option>';
	});
	$(mbId).html(xsMbMenu);
});

$(function(){
	$('.xs-mb-select').on('change',function(){
		var xsHref = $(this).val();
		window.location.href = xsHref;
	});
});

$(function(){
	  $.getJSON( "assets/json/carousel-data.json", function( data ) {

	  var itemIindicator = [];
	  var item = [];

	  $.each( data, function( key, val ) {
	  	if(key === 0){
	  	var active = 'active';
	  	}else{
	  		active = '';
	  	}
	    itemIindicator.push( "<li data-target='#carousel' data-slide-to='"+ key +"'></li>" );
	    item.push("<div class='item "+ active + "'><img src='"+ data[key].image +"' alt='"+ data[key].heading +"' /><div class='carousel-caption'><h3>"+ data[key].heading +"</h3><p>"+ data[key].text +"</p></div></div>");
	  });

	  $('#carousel .carousel-indicators').html(itemIindicator.join(""));
	  $('#carousel .carousel-inner').html(item.join(""));
	  $('#carousel').carousel();	  
	});

});
