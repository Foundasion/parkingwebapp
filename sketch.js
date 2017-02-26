var map;
var zoomLvl = 17;
var centerLat = 40.744052; //njit Lat
var centerLong = -74.177751; //njit Long

function myMap() {
  var myCenter = new google.maps.LatLng(centerLat, centerLong); //njit coordinate
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: zoomLvl, minZoom: 17, maxZoom: 17, scrollwheel: false,};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var centerMarker = new google.maps.Marker({position: myCenter});
  //new google.maps.event.trigger( marker, 'click' );
  centerMarker.setMap(map);
  //40.743975
  var myCenter2 = new google.maps.LatLng(40.743975,-74.177392);
  var marker2 = new google.maps.Marker({position:myCenter2});
  marker2.setMap(map);
  var infowindow;
  centerMarker.addListener('click', function() {
    infowindow = new google.maps.InfoWindow({
      content: "10A.M.-6P.M."
    });
    infowindow.open(map,centerMarker);

  });
  marker2.addListener('click', function (){
    infowindow = new google.maps.InfoWindow({
      content: "12P.M.-6P.M."
    });
    infowindow.open(map,marker2);
  });

  google.maps.event.addListener(map, 'click', function(){
    infowindow.close();
  });
}

function funct2 (){
  console.log("FUNCT2!");
}
