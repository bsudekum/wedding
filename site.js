---
---
;{% include js/jquery.min.js %}
;{% include js/tweet.js %}
;{% include js/circle.js %}

$(function() {
    $('#arc').circleType({
        radius: 360
    });

    var map = L.mapbox.map('map');
    var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    }).addTo(map);
    map.setView([41.8945,-87.6249], 14);

    var markerLayer = L.mapbox.markerLayer()
        .loadURL('https://a.tiles.mapbox.com/v3/laurensud.h1ndfeic/markers.geojson')
        .addTo(map);

});