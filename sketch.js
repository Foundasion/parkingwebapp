var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

function createButton(context, func){
    var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = func;
    context.appendChild(button);
}

window.onload = function(){
    createButton(document.body, function(){
        highlight(this.parentNode.childNodes[1]);
        // Example of different context, copied function etc
        // createButton(this.parentNode, this.onclick);
    });
}
/*var mapimg;
var long = -74.1793;
var lat = 40.7423;
var zoomLvl = 17;
var horPixel = 800;
var vertPixel = 500;

function preload() {
  // mapimg = loadImage('https://api.mapbox.com/v4/mapbox.streets/' + long + ',' + lat + ',' + zoomLvl + '/' + horPixel + 'x' + vertPixel + '.png?access_token=' + access_token);
  mapimg = loadImage('https://api.mapbox.com/v4/mapbox.streets/-74.1793,40.7423,17/800x500.png?access_token=pk.eyJ1IjoibmFzdHlkZXYiLCJhIjoiY2l6bHcxMTltMDI0ZjJ3azcxOWZuMzhmYiJ9.XZQzdWZdTb1Xvz9li7E9YA');
}

function setup() {
  createCanvas(1000,1000);
  image(mapimg,0,0);
}

function draw(){

<<<<<<< HEAD
}*/
=======
}

//haard's comment
>>>>>>> 680a59b31c31dd08f64e873f1067d63efa3df68d
