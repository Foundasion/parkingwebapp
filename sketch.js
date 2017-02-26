var map;
var zoomLvl = 17;
var centerLat = 40.744052; //njit Lat
var centerLong = -74.177751; //njit Long

var lat = [40.744052 ,40.743975];
var long= [-74.177751 ,-74.177392];
var time = ["10A.M.-6P.M.", "12P.M.-6P.M."];

function myMap() {
  var myCenter = new google.maps.LatLng(lat[0], long[0]); //njit coordinate
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: zoomLvl,};
  var map = new google.maps.Map(mapCanvas, mapOptions);

  // var marker = [2]; //built below
  // var infowindow = [2]; //built below
  //
  // for (var i=0; i < long.length; i++){
  //   var loc = new google.maps.LatLng(lat[i], long[i]);
  //   marker[i] = new google.maps.Marker({position: loc});
  //   marker[i].setMap(map);
  //   marker[i].addListener('click', function(){
  //     infowindow[i] = new google.maps.InfoWindow({
  //       content: time[i]
  //     });
  //     infowindow[i].open(map, marker[i]);
  //     setTimeout(function () { infowindow[i].close(); }, 5000);
  //   });
  // }

  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map);
  marker.addListener('click', function(){
    var infowindow = new google.maps.InfoWindow({
      content: "blah"
    });
    infowindow.open(map, marker);
    setTimeout(function () {infowindow.close(); }, 1000 )
  })

  // var centerMarker = new google.maps.Marker({position: myCenter});
  // //new google.maps.event.trigger( marker, 'click' );
  // centerMarker.setMap(map);
  // //40.743975
  // var myCenter2 = new google.maps.LatLng(40.743975,-74.177392);
  // var marker2 = new google.maps.Marker({position:myCenter2});
  // marker2.setMap(map);
  // var infowindow;
  // centerMarker.addListener('click', function() {
  //   infowindow = new google.maps.InfoWindow({
  //     content: "10A.M.-6P.M."
  //   });
  //   infowindow.open(map,centerMarker);
  //
  // });
  // marker2.addListener('click', function (){
  //   infowindow = new google.maps.InfoWindow({
  //     content: "12P.M.-6P.M."
  //   });
  //   infowindow.open(map,marker2);
  // });

  google.maps.event.addListener(map, 'click', function(){
    for (var i = 0; i < infowindow.length; i++){
      infowindow[i].close();
    }
  });
}

function funct2 (){
  console.log("FUNCT2!");
}
