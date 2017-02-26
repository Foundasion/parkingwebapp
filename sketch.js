var map;
var zoomLvl = 17;
var centerLat = 40.744052; //njit Lat
var centerLong = -74.177751; //njit Long
var map;
var myCenter;
var mapOptions;
var mapCanvas;
var centerMarker;
var pSpaceOne;
var pSpaceOneM;
var pSpaces = [centerMarker, pSpaceOneM];

function myMap() {
  myCenter = new google.maps.LatLng(centerLat, centerLong); //njit coordinate
  mapCanvas = document.getElementById("map");
  mapOptions = {center: myCenter, zoom: zoomLvl}
  map = new google.maps.Map(mapCanvas, mapOptions);
  centerMarker = new google.maps.Marker({position: myCenter});
  //new google.maps.event.trigger( marker, 'click' );
  centerMarker.setMap(map);
    //40.743975
  pSpaceOne = new google.maps.LatLng(40.743975,-74.177392);
  pSpaceOneM = new google.maps.Marker({position: pSpaceOne});
  pSpaceOneM.setMap(map);
  for(int i = 0; i<pSpaces.length(); i++){
    if(pSpaces[i].addListener)
  }
  centerMarker.addListener('click', function() {
      console.log("HEEEEEEEEEEEEEEEEEEEEEEEE");
      });
}
