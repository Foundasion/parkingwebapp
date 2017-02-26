var map;

function myMap() {
  var myCenter = new google.maps.LatLng(40.744052,-74.177751);//central avenue
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 17}
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  //new google.maps.event.trigger( marker, 'click' );
  marker.setMap(map);
    //40.743975
  var myCenter2 = new google.maps.LatLng(40.743975,-74.177392);
  var marker2 = new google.maps.Marker({position:myCenter2});
  marker2.setMap(map);
  marker.addListener('click', function() {
      console.log("HEEEEEEEEEEEEEEEEEEEEEEEE");
      });
}
