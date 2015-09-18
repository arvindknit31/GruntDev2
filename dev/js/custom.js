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
	  var item = [];
	  var itemIindicator = [];

	  $.each( data, function( key, val ) {
	    itemIindicator.push( '<li data-target="#carousel" data-slide-to="'+ key +'"></li>' );
	    item.push( '<li data-target="#carousel" data-slide-to="'+ key +'"></li>' );
	  });
	 
	  $( "<ul/>", {
	    "class": "my-new-list",
	    html: items.join( "" )
	  }).appendTo( "#test" );
	});
});
