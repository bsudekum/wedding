---
---
;{% include js/jquery.min.js %}
;{% include js/tweet.js %}
;{% include js/circle.js %}

$(function(){

if(window.location.pathname == '/update/'){
	twitterFetcher.fetch('379266648101765120', 'twitter', 100, true, false, false, close);
	function close(){
	}
}else{
	twitterFetcher.fetch('379266648101765120', 'twitter', 1, true, false, false, addUpdate);
	function addUpdate(){
	}
}

if(window.location.pathname == '/places/'){
	var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
		.setView([41.88456316303698,-87.65976190567017], 17);

	var weddingMarker = L.marker([41.88456316303698,-87.65976190567017], {
	        icon: L.mapbox.marker.icon({
	            'marker-symbol': 'star-stroked',
	            'marker-color': '77B66F'
	        })
	    })
		.bindPopup('<a href="#" class="center">Wedding</a>')
		.addTo(map)
		.openPopup();

	var sudekumMarker = L.marker([42.11401459274903,-87.73608952760695])
		.bindPopup('<a href="#" class="center">The Sudekum\'s House</a>')
		.addTo(map)

	$('.place').click(function(){
	    var pos = $(this).attr('data-position');
	    
	    if (pos) {
	        var loc = pos.split(',');
	        map.setView(loc, 16);
	    }
	});
}else{
	
}

$('.content-block img').click(function(){
	var path = $(this).attr('src');
	$('.zoom-img img').attr('src', path);
	$('.zoom-img img').fadeIn(function(){
		$('.black').fadeIn();	
	});
	
	$('.black').click(function(){
		$('.zoom-img').fadeOut();
		$('.zoom-img img').attr('src','')
		$('.black').fadeOut();
	})
});

var height = $('.bio').height();
$('.team').css('height', height)

$('#arc').circleType({radius: 320});

})
