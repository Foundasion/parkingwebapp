var map;
var zoomLvl = 17;
var centerLat = 40.744052; //njit Lat
var centerLong = -74.177751; //njit Long
var availableSpots = 0;
var lat = [40.744052 ,40.743975];
var long = [-74.177751 ,-74.177392];
var timeStart = [10, 12];
var timeEnd = [18, 16];


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = "Current Time: " +
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



document.write("Spots available: " + availableSpots);

var time = ['10A.M.-6P.M.', '12P.M.-6P.M.'];

function myMap() {
  var myCenter = new google.maps.LatLng(lat[0], long[0]); //njit coordinate
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: zoomLvl,};
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = []; //built below
  var infowindow = []; //built below

  for (var i=0; i < long.length; i++){
    var loc = new google.maps.LatLng(lat[i], long[i]);
    marker[i] = new google.maps.Marker({
      position: loc,
      map: map
    });
    //marker[i].setMap(map);
    marker[i].info = new google.maps.InfoWindow({
      content: "time[i]"
    });
    marker[i].addListener(marker[i], 'click', function(){

      marker[i].info.open(map, marker[i]);
      //setTimeout(function () { infowindow[i].close(); }, 5000);
    });
  }

  // var marker = new google.maps.Marker({position: myCenter});
  // marker.setMap(map);
  // marker.addListener('click', function(){
  //   var infowindow = new google.maps.InfoWindow({
  //     content: "122"
  //   });
  //   infowindow.open(map, marker);
  //   setTimeout(function () {infowindow.close(); }, 1000 )
  // })

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

  // google.maps.event.addListener(map, 'click', function(){
  //   for (var i = 0; i < infowindow.length; i++){
  //     infowindow[i].close();
  //   }
  // });
}

function funct2 (){
  console.log("FUNCT2!");
}










// function myMap() {
//   var myCenter = new google.maps.LatLng(lat[0], long[0]); //njit coordinate
//   var mapCanvas = document.getElementById("map");
//   var mapOptions = {center: myCenter, zoom: zoomLvl,};
//   var map = new google.maps.Map(mapCanvas, mapOptions);
//
//   var marker = []; //built below
//   var infowindow = []; //built below
//
//   for (var i=0; i < long.length; i++){
//     var temp = new google.maps.InfoWindow({
//       //current time using getUTCHours() and getUTCMinutes()
//       var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//       var hour = d.getUTCHours();
//       var minute = d.getUTCMinutes();
//       hour += minute/60;
//       if (hour < timeEnd[i] && hour > timeStart[i]){
//         content: ("Available till: " + timeEnd)
//       }
//       else {
//         content: ("Not available right now!")
//       }
//     });
//     var loc = new google.maps.LatLng(lat[i], long[i]);
//     marker[i] = new google.maps.Marker({position: loc});
//     marker[i].setMap(map);
//     marker[i].addListener('click', function(){
//       temp.open(map, marker[i]);
//       infowindow[i] = temp;
//       setTimeout(function () { infowindow[i].close(); }, 5000);
//     });
//   }
//
//   google.maps.event.addListener(map, 'click', function(){
//     for (var i = 0; i < infowindow.length; i++){
//       infowindow[i].close();
//     }
//   });
