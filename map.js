/*global google */
/*exported initMap, displayMap */

// Set the URL to the data file here.
var sourceurl = "data.json";
// Set to true for XHR same-domain loading, set to false for JSONP.
// JSONP files have to be wrapped in 'displayMap(..)'
var useXhr = true;
// This sets where the map should start.
// Default is Linköping, Sweden.
var mapStartPosition = {
  lat: 58.4108,
  lng: 15.6214
};

function initMap() {
  if (useXhr) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE &&
          request.status === 200) {
        displayMap(JSON.parse(request.responseText));
      }
    };
    request.open('GET', sourceurl, true);
    request.send();
  } else {
    var script = document.createElement('script');
    script.src = sourceurl;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}

function displayMap(locations) {
  var mapOptions = {
    zoom: 14,
    center: mapStartPosition,
    disableDefaultUI: true,
    mapTypeControl: false,
    scaleControl: false,
    zoomControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }]
  };
  var mapWidgetInstance = new google.maps.Map(
    document.getElementById('map'),
    mapOptions
  );
  function createMarker(location) {
    var infowindow = new google.maps.InfoWindow({
      content: "<b>" + location.name + "</b><br>" +
        location.address + "<br><br>" +
        location.description
    });
    var marker = new google.maps.Marker({
      position: location.pos,
      map: mapWidgetInstance,
      title: location.name
    });
    marker.addListener('click', function() {
      infowindow.open(mapWidgetInstance, marker);
    });
  }
  for (var i = 0; i < locations.length; i++) {
    createMarker(locations[i]);
  }
}
