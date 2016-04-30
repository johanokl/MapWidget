# RestaurantMap

Simple web app that reads locations defined in a JSON file (data.json) and displays them on a Google Maps widget.  
Written in Javascript, without any dependencies on external libraries.

The map is centered on Linköping, define a new center by changing the latitude/longitude values sent to the map constructor.   
You need a Google Maps API key to run this, get one from https://developers.google.com/maps/documentation/javascript/get-api-key and update the hard coded source URL.

The JSON file can be loaded using XHR or JSONP.
It should be formatted according to the following format:
```
[{
  "name": "Pizzeria One",
  "address": "Main Street 123",
  "description": "Cheap and tasty.",
  "pos": {"lat": 58.40927737547476, "lng": 15.623062849044798}
}, {
  "name": "Café Two",
  "address": "Back Street 3",
  "description": "Delicious caffe latte.",
  "pos": {"lat": 58.410228, "lng": 15.621343}
}]
```
For JSONP, wrap the array in `displayMap(...)`.

---

&copy; Johan Lindqvist   
johan.lindqvist@gmail.com
