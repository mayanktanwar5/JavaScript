/**
 * Created by Mak on 4/15/17.
 */
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -33.865427, lng: 151.196123},
        mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');

    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    // script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    script.src = 'data1.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    console.log(map.data.setStyle());
    map.data.setStyle(function(feature) {
        console.log(feature.getProperty('$revenue'));

        var magnitude = feature.getProperty('$revenue');
        return {
            icon: getCircle(magnitude)
        };
    });
}

function getCircle(magnitude) {
    console.log("returning magnitude" + magnitude);
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .4,
        scale: Math.log2( magnitude)/2,
        strokeColor: 'white',
        strokeWeight: .5
    };
}

function eqfeed_callback(results) {
    map.setCenter(new google.maps.LatLng(results.features[0].properties.latitude,results.features[0].properties.longitude));
    //console.log(results.features[0].properties.latitude);
    map.data.addGeoJson(results);
    console.log(map.data);
}