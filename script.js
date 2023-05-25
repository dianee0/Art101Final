// Define the bounding box for UCSC
var ucscBounds = [
  [36.9770, -122.0914], // Southwest coordinates
  [37.0029, -122.0516]  // Northeast coordinates
];

// Create a custom icon
var caveIcon = L.icon({
  iconUrl: 'img/cave.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var libraryIcon = L.icon({
  iconUrl: 'img/caveplaceholder.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

// Initialize the map and set maxBounds
var map = L.map('map', {
  maxBounds: ucscBounds,
  maxBoundsViscosity: 1.0, // Adjust the friction when dragging the map near the edges
});

// Add a base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Add the custom image overlay to the map
var imageUrl = "img/walkingmap.png";
var imageBounds = ucscBounds;
var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Set the map view to fit the image bounds
map.fitBounds(imageBounds);

// Add a marker with the custom icon
var locationMarker = L.marker([36.9914, -122.0609], { icon: caveIcon }).addTo(map);
var libMarker = L.marker([37.002250, -122.053710], { icon: libraryIcon }).addTo(map);

// Uncomment the following lines to show popups on marker hover
locationMarker.on('mouseover', function(ev) {
  locationMarker.openPopup();
});

libMarker.on('mouseover', function(ev) {
  libMarker.openPopup();
});
