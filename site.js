---
---
;{% include js/jquery.min.js %}
;{% include js/tweet.js %}
;{% include js/circle.js %}

$(function() {
    $('#arc').circleType({
        radius: 360
    });

    var map = L.mapbox.map('map','bobbysud.map-8owxxni8');

    map.setView([41.8945,-87.6249], 14);

    var markerLayer = L.mapbox.markerLayer()
        .loadURL('https://a.tiles.mapbox.com/v3/laurensud.h1ndfeic/markers.geojson')
        .addTo(map);

});