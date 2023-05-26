// Create a custom icons
var witchIcon = L.icon({
  iconUrl: 'img/witch.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var pondIcon = L.icon({
  iconUrl: 'img/pond.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var caveIcon = L.icon({
  iconUrl: 'img/cave.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var treehouseIcon = L.icon({
  iconUrl: 'img/treehouse.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var buddhaIcon = L.icon({
  iconUrl: 'img/buddha.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var wishingtreeIcon = L.icon({
  iconUrl: 'img/wishingtree.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var gardenIcon = L.icon({
  iconUrl: 'img/garden.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon 
});

var pogonipIcon = L.icon({
  iconUrl: 'img/pond.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var meadowIcon = L.icon({
  iconUrl: 'img/meadow.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

var sammyIcon = L.icon({
  iconUrl: 'img/sammy.png',
  iconSize: [32, 32], // Set the size of the icon
  iconAnchor: [16, 32], // Set the anchor point of the icon
});

/* end of icons */

// Initialize the map and set maxBounds
var map = L.map('map', {
  maxBoundsViscosity: 1.0, // Adjust the friction when dragging the map near the edges
});

// Add a base tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Add the custom image overlay to the map
var imageUrl = "img/walkingmap.png";
var imageBounds = [
  [36.978216288676336, -122.07609943616285], // Southwest coordinates
  [37.008983591650455, -122.0333580120721]  // Northeast coordinates
];
var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);


// Set the map view to center and zoom on the desired area
map.setView([36.999, -122.056], 16);

// Add a marker with the custom icon
var witchMarker = L.marker([36.9914, -122.0609], { icon: witchIcon }).addTo(map);
var pondMarker = L.marker([37.002250, -122.053710], { icon: pondIcon }).addTo(map);
var caveMarker = L.marker([36.99628, -122.06876], { icon: caveIcon }).addTo(map);

var treehouseMarker = L.marker([36.993931, -122.068644], { icon: treehouseIcon }).addTo(map);
var buddhaMarker = L.marker([37.00683884024253, -122.06001471349225], { icon: buddhaIcon }).addTo(map);
var wishingtreeMarker = L.marker([37.004641, -122.060067], { icon: wishingtreeIcon }).addTo(map);

var gardenMarker = L.marker([37.024590, -122.057733], { icon: gardenIcon }).addTo(map);
var pogonipMarker = L.marker([37.000145, -122.048138], { icon: pogonipIcon }).addTo(map);
var meadowMarker = L.marker([36.993465199872084, -122.05966244554944], { icon: meadowIcon }).addTo(map);

var sammyMarker = L.marker([36.999290100786006, -122.05981716276749], { icon: sammyIcon }).addTo(map);
var sammyMarker2 = L.marker([36.99843848812555, -122.06706563856135], { icon: sammyIcon }).addTo(map);
// Uncomment the following lines to show popups on marker hover
witchMarker.bindTooltip("witch marker");

pondMarker.bindTooltip("porter koi pond marker");

caveMarker.bindTooltip("cave marker")

treehouseMarker.bindTooltip("tree house");

buddhaMarker.bindTooltip("buddha statues");

wishingtreeMarker.bindTooltip("wishing tree marker");

gardenMarker.bindTooltip("garden of eden marker");

pogonipMarker.bindTooltip("pogonip koi pond marker")

meadowMarker.bindTooltip("haunted meadows");

sammyMarker.bindTooltip("sammy !");

sammyMarker2.bindTooltip("sammy was here!");

/* Descriptions and taking you to a "new" page */

var descriptionContainer = document.getElementById('description-container');
var mapContainer = document.getElementById('map');
var showMapButton = document.getElementById('show-map-button');
var homepageButton = document.getElementById('homepage-button');

showMapButton.addEventListener('click', function() {
  mapContainer.style.display = 'block'; // Show the map
  showMapButton.style.display = 'none'; // Hide the "Show Map" button
  homepageButton.style.display = 'block'; // Show the "Homepage" button
});

homepageButton.addEventListener('click', function() {
  mapContainer.style.display = 'block'; // Show the map
  showMapButton.style.display = 'none'; // Hide the "Show Map" button
  homepageButton.style.display = 'none'; // Hide the "Homepage" button
  descriptionContainer.style.display = 'none'; // Hide the description container
});

witchMarker.on('click', function() {
  descriptionContainer.innerHTML = "<h2>Witch Location</h2><p>The witch spot is in the woods just past the Porter meadows. There are symbols drawn and carved into trees. As of right now, there is also a net swing among the trees.</p><h2>Lore</h2><p>For years, students and others have come to this spot to practice witchcraft or to simply visit and spend time in nature.</p>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
});

pondMarker.on('click', function() {
  descriptionContainer.innerHTML = "<h2>Pond Location</h2><p>This is the description of the pond location.</p>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
});

caveMarker.on('click', function() {
  descriptionContainer.innerHTML = "<h2>Cave Location</h2><p>This is the description of the cave location.</p>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
});

// Add click events to other markers similarly

/* Put more of the functions here */

// Initially hide the "Homepage" button
homepageButton.style.display = 'none';
