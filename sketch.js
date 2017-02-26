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
<<<<<<< HEAD
    //40.743975
  pSpaceOne = new google.maps.LatLng(40.743975,-74.177392);
  pSpaceOneM = new google.maps.Marker({position: pSpaceOne});
  pSpaceOneM.setMap(map);
  for(int i = 0; i<pSpaces.length(); i++){
    if(pSpaces[i].addListener)
  }
=======
  //40.743975
  var myCenter2 = new google.maps.LatLng(40.743975,-74.177392);
  var marker2 = new google.maps.Marker({position:myCenter2});
  marker2.setMap(map);
  var infowindow;
>>>>>>> 85b7fa266fa5b2311544f63906162f4f60c8cfaa
  centerMarker.addListener('click', function() {
    var infowindow = new google.maps.InfoWindow({
      content: "10A.M.-6P.M."
    });
    infowindow.open(map,centerMarker);

  });
  marker2.addListener('click', function (){
    var infowindow = new google.maps.InfoWindow({
      content: "12P.M.-6P.M."
    });
    infowindow.open(map,marker2);
  });

  google.maps.event.addListener(map, 'click', function(){
    infowindow.close();
  });
}
