var mapimg;
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

}

//this is haard's branch
