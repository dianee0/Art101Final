// Initialize the map
// Initialize the map and set maxBounds
var map = L.map('map', {
  maxBounds: ucscBounds,
  maxBoundsViscosity: 1.0, // Adjust the friction when dragging the map near the edges
}).setView([36.9914, -122.0609], 16);


// Add a base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Add a marker for UCSC campus
// var ucscMarker = L.marker([36.9914, -122.0609]).addTo(map);
// ucscMarker.bindPopup("<b>UC Santa Cruz</b><br>Beautiful campus!").openPopup();


// Define the bounding box for UCSC
var ucscBounds = [
  [36.9770, -122.0914], // Southwest coordinates
  [37.0029, -122.0516]  // Northeast coordinates
];

// Define the URL and bounds of the custom image
var imageUrl = "img/walkingmap.png";
var imageBounds = ucscBounds;

// Add the custom image overlay to the map
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Create a custom icon
var customIcon = L.icon({
  iconUrl: 'img/caveplaceholder.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

// Add a marker with the custom icon
var locationMarker = L.marker([36.9914, -122.0609], { icon: customIcon }).addTo(map);
