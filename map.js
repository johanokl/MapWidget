function initMap() {
  var mapDiv, map,
    mapOptions = {}, restaurants = [];

  var request = new XMLHttpRequest();
  request.open('GET', 'data.json', false);
  request.send(null);
  if (request.status === 200) {
    restaurants = JSON.parse(request.responseText);
  }

  mapOptions = {
    zoom: 14,
    center: {lat: 58.4108 , lng: 15.6214 },
    disableDefaultUI: true,
    mapTypeControl: false,
    scaleControl: false,
    zoomControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, mapOptions);

  function createMarker(restaurant) {
    var infowindow = new google.maps.InfoWindow({
      content: "<b>" + restaurant.name + "</b><br>" +
        restaurant.address + "<br><br>" +
        restaurant.description
    });
    var marker = new google.maps.Marker({
      position: restaurant.pos,
      map: map,
      title: restaurant.name
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  for (var i = 0; i < restaurants.length; i++) {
    createMarker(restaurants[i]);
  }
}
