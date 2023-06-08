// Create a custom icons
var witchIcon = L.icon({
  iconUrl: 'img/witch.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var pondIcon = L.icon({
  iconUrl: 'img/pond.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var caveIcon = L.icon({
  iconUrl: 'img/cave.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var treehouseIcon = L.icon({
  iconUrl: 'img/treehouse.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var buddhaIcon = L.icon({
  iconUrl: 'img/buddha.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var wishingtreeIcon = L.icon({
  iconUrl: 'img/wishingtree.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var gardenIcon = L.icon({
  iconUrl: 'img/garden.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var pogonipIcon = L.icon({
  iconUrl: 'img/pond2.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var meadowIcon = L.icon({
  iconUrl: 'img/meadow.png',
  iconSize: [100, 100], // Set the size of the icon
  iconAnchor: [50, 50], // Set the anchor point of the icon
});

var sammyIcon = L.icon({
  iconUrl: 'img/sammy.png',
  iconSize: [70, 50], // Set the size of the icon
  iconAnchor: [35, 25], // Set the anchor point of the icon
});

var sammy2Icon = L.icon({
  iconUrl: 'img/sammy2.png',
  iconSize: [70, 50], // Set the size of the icon
  iconAnchor: [35, 25], // Set the anchor point of the icon
});

var sammy3Icon = L.icon({
  iconUrl: 'img/sammy3.png',
  iconSize: [70, 50], // Set the size of the icon
  iconAnchor: [35, 25], // Set the anchor point of the icon
});

var sadsammyIcon = L.icon({
  iconUrl: 'img/sadsammy.png',
  iconSize: [70, 50], // Set the size of the icon
  iconAnchor: [35, 25], // Set the anchor point of the icon
});

/* end of icons */

// Initialize the map and set maxBounds
var map = L.map('map', {
  maxBoundsViscosity: 1.0,
  center: [37.01047202408105, -122.09024620050009],
  zoom: 14,
  scrollWheelZoom: false
});


// Add the custom image overlay to the map
var imageUrl = "img/walkingmap.png";
var imageBounds = [
  [36.978216288676336, -122.07609943616285], // Southwest coordinates
  [37.008983591650455, -122.0333580120721]  // Northeast coordinates
];
var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);


// Add a marker with the custom icon
var witchMarker = L.marker([36.9866585104142, -122.065148949904], { icon: witchIcon }).addTo(map);
var pondMarker = L.marker([36.98631571233535, -122.07276642348121], { icon: pondIcon }).addTo(map);
var caveMarker = L.marker([36.98071912125029, -122.06750568014475], { icon: caveIcon }).addTo(map);

var treehouseMarker = L.marker([36.99095743162578, -122.07078977081409], { icon: treehouseIcon }).addTo(map);
var buddhaMarker = L.marker([37.00659030067108, -122.06566885362406], { icon: buddhaIcon }).addTo(map);
var wishingtreeMarker = L.marker([37.00683884024253, -122.06001471349225], { icon: wishingtreeIcon }).addTo(map);

var gardenMarker = L.marker([37.006702081177785, -122.04035703404674], { icon: gardenIcon }).addTo(map);
var pogonipMarker = L.marker([37.00610565605814, -122.05147816360324], { icon: pogonipIcon }).addTo(map);
var meadowMarker = L.marker([37.000370297216016, -122.0432001451485], { icon: meadowIcon }).addTo(map);

var sammyMarker = L.marker([36.999290100786006, -122.05981716276749], { icon: sammyIcon }).addTo(map);
var sammyMarker2 = L.marker([36.99843848812555, -122.06706563856135], { icon: sammy2Icon }).addTo(map);
var sammyMarker3 = L.marker([36.9914, -122.0609], { icon: sammy3Icon }).addTo(map);
var sammyMarker4 = L.marker([36.992622999976874, -122.04802450176089], { icon: sadsammyIcon }).addTo(map);
// Uncomment the following lines to show popups on marker hover
witchMarker.bindTooltip("Witch Spot");

pondMarker.bindTooltip("Porter Koi Pond");

caveMarker.bindTooltip("Porter Caves")

treehouseMarker.bindTooltip("Tree House");

buddhaMarker.bindTooltip("Buddha Shrine");

wishingtreeMarker.bindTooltip("Wishing Tree");

gardenMarker.bindTooltip("Garden of Eden");

pogonipMarker.bindTooltip("Pogonip Koi Pond")

meadowMarker.bindTooltip("Haunted Meadows");

sammyMarker.bindTooltip("Hi, I'm Sammy!");

sammyMarker2.bindTooltip("Sammy was here!");

sammyMarker3.bindTooltip("I hope it rains.");

sammyMarker4.bindTooltip("Never kiss a slug!");

/* Descriptions and taking you to a "new" page */

var descriptionContainer = document.getElementById('description-container');
var mapContainer = document.getElementById('map');
var showMapButton = document.getElementById('show-map-button');
var homepageButton = document.getElementById('homepage-button');
var guideText = document.getElementById('guide');


showMapButton.addEventListener('click', function() {
  mapContainer.style.display = 'block'; // Show the map
  showMapButton.style.display = 'none'; // Hide the "Show Map" button
  guideText.style.display = 'block'; // show map guiding description
});

homepageButton.addEventListener('click', function() {
  mapContainer.style.display = 'block'; // Show the map
  showMapButton.style.display = 'none'; // Hide the "Show Map" button
  homepageButton.style.display = 'none'; // Hide the "Homepage" button
  descriptionContainer.style.display = 'none'; // Hide the description container
  guideText.style.display = 'block'; // show map guiding description
});

witchMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/witch.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: NOT KNOWN</p><h2>Location</h2><p>The witch spot is in the woods just past the Porter meadows. There are symbols drawn and carved into trees. As of right now, there is also a net swing among the trees.</p><h2>Lore</h2><p>For years, students and others have come to this spot to practice witchcraft or to simply visit and spend time in nature.</p><img src='places/witchspot01.jpeg' width='80%'><img src='places/witchspot02.jpeg' width='80%'><img src='places/witchspot04.jpeg' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description

});

pondMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/pond.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 36.994240301085924, -122.06537087867795</p><h2>Location</h2><p>The Koi Pond is located in the center of the Sesnon area at Porter college.  It is a relatively simple yet beautiful pond in the shape of a triangle with a water feature, koi fish, and various plants inside of it.  The fountain makes a peaceful sloshing sound and has an elegant yet deconstructed look to it.</p><h2>Lore</h2><p>The Porter college Instagram account has been going live weekly since May 2020 to invite viewers to witness the koi fish being fed.  An unfortunate incident occurred involving the koi pond in 2003.  A fraternity at UCSC stole one of the koi fish named Midas, or Goldie, from the pond as a part of an MTV show “The Fraternity Life.”  The koi fish tragically died as a result of the fraternity’s actions which prompted many reactions, among them being UCSC’s denial to provide resources to the fraternity from then on, including affiliation.</p> <img src='places/koipond01.jpeg' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

caveMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/cave.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 36.99598016958417, -122.0687447736907</p><h2>Location</h2><p>The Porter Cave, also known as the Empire Cave, is in the Cave Gulch area past the Porter meadows.</p><h2>Lore</h2><p> The Porter Cave is home to many interesting plants and animals, including the Dolloff Spider and the Empire Cave pseudoscorpion that have almost only been found in this cave and nowhere else.  Also, people that visit the caves have reported seeing mud sculptures left by past visitors.</p>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});
// needs a picture of treehouse
treehouseMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/treehouse.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: NOT KNOWN, near porter caves</p><h2>Location</h2><p>There was once a treehouse past Empire Grade in the woods outside of Porter college.</p><h2>Lore</h2><p>  It is not known who built the treehouse past the Porter Caves, but the city or the school itself had it taken down in 2016 due to dangerous encounters with the treehouse involving partying students.</p><img src='places/treehouse01.jpeg' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});
// need a picture of buddha statues
buddhaMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/buddha.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 37.00677029894322, -122.06052433338843</p><h2>Location</h2><p>The Buddha Shrine is located near College 9/10, but the specific way to get there is difficult to explain.  It is in a clearing past an offshoot of the Fuel Break Road.  It is made up of manzanita trees, Buddha statues, and other items that make up a sort of fort.</p><h2>Lore</h2><p>Over time, people have left offerings, which is the intent of visiting the area, thus the shrine has taken shape as a result of this interaction with the space.  It has also been claimed that no one has stolen anything from the Buddha Shrine since it provides peace to its visitors.</p><img src='places/buddha01.png' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

wishingtreeMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/wishingtree.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates are NOT KNOWN, but the coordinates near are from Tree 9: 37.004797242001075, -122.06003132333856</p><h2>Location</h2><p>The wishing tree is located near Tree 9 which is around the forest of College 9 and John R. Lewis. It is a tree that students have come to for over a decade to reveal their fears and put their wishes into the universe in hopes of them coming true.</p><h2>Lore</h2><p>Anyone can write their wish on a piece of paper, stick it on a branch of the tree, and wait patiently for the wish to come true. If you put energy into the world, it may just come back to you in a positive way. If you’re lucky, your wish may come true! This has been a tradition at UCSC for over ten years and students still go to the tree to wish upon a star, or more accurately, a branch.</p> <img src='places/wishingTree01.png' width='70%'> <img src='places/wishingTree02.png' width='70%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

gardenMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/garden.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 37.02473782998077, -122.05780903827328</p><h2>Location</h2><p>The Garden of Eden is a beautiful swimming hole and nature spot for not only UCSC students but everyone to enjoy. It consists of a river among the forest, and is the perfect place to swim, relax, and enjoy nature. It is known for being one of the most beautiful spots to visit just off of campus. It is located along the San Lorenzo River and is closest to the Crown and Merrill Colleges.</p><h2>Lore</h2><p>The Garden of Eden is known as an essential hangout spot for students at UCSC. There isn’t any crazy groundbreaking story, but the location is very important to student life.</p> <img src='places/gardenOfEden01.jpeg' width='80%'><img src='places/gardenOfEden02.png' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

pogonipMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/pond2.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 37.00035090324666, -122.04824504614716</p><h2>Location</h2><p>The Pogonip Koi Pond is a koi pond in the middle of the forest just outside of the UCSC campus. If you hike out past the Crown and Merrill colleges, you will find a beautiful pond filled with koi fish that is perfect for a relaxing end to a fun adventure in nature.</p><h2>Lore</h2><p>The pond is known as a “bucket list item” here in Santa Cruz and is not very well known, but revered by students of UCSC.</p><img src='places/Pogonip02.png' width='80%'><img src='places/Pogonip.png' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

meadowMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/meadow.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 37.004272933611816, -122.04650452847066 (APPROXIMATE) </p><h2>Location</h2><p>The Cowell Haunted Meadow is below the Cowell college near the fire road.  There have been many claims that a sort of ghost wanders this area on occasion.</p><h2>Lore</h2><p>  The ghost that has been reportedly haunting the grounds is that of Sarah Agnes Cowell.  According to the tale of her death, she passed by being hurled from her buggy due to the horse taking off unexpectedly.</p><img src='places/meadow.png' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

sammyMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/sammy.png' width='20%' style='display: block; margin: 0 auto;'><h2>Best Banana Slug Spots</h2><p>There are a few areas around campus that ensure a higher probability of spotting banana slugs.</p><h2>Lore</h2><p>There is a strong connection between the students and their mascot the banana slug.  The history of making it the face of UCSC is an interesting one.  The administration was pushing for the sea lion to be UCSC’s mascot, but the students overwhelmingly advocated for Sammy the Slug; the students won.</p><img src='places/slug01.jpg' width='60%'><img src='places/slug02.jpg' width='60%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

sammyMarker2.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/sammy2.png' width='20%' style='display: block; margin: 0 auto;'><h2>Best Banana Slug Spots</h2><p>There are a few areas around campus that ensure a higher probability of spotting banana slugs.</p><h2>Lore</h2><p>There is a strong connection between the students and their mascot the banana slug.  The history of making it the face of UCSC is an interesting one.  The administration was pushing for the sea lion to be UCSC’s mascot, but the students overwhelmingly advocated for Sammy the Slug; the students won.</p><img src='places/slug01.jpg' width='60%'><img src='places/slug02.jpg' width='60%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

sammyMarker3.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/sammy3.png' width='20%' style='display: block; margin: 0 auto;'><h2>Best Banana Slug Spots</h2><p>There are a few areas around campus that ensure a higher probability of spotting banana slugs.</p><h2>Lore</h2><p>There is a strong connection between the students and their mascot the banana slug.  The history of making it the face of UCSC is an interesting one.  The administration was pushing for the sea lion to be UCSC’s mascot, but the students overwhelmingly advocated for Sammy the Slug; the students won.</p><img src='places/slug01.jpg' width='60%'><img src='places/slug02.jpg' width='60%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

sammyMarker4.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/sadsammy.png' width='20%' style='display: block; margin: 0 auto;'><h2>Best Banana Slug Spots</h2><p>There are a few areas around campus that ensure a higher probability of spotting banana slugs.</p><h2>Lore</h2><p>There is a strong connection between the students and their mascot the banana slug.  The history of making it the face of UCSC is an interesting one.  The administration was pushing for the sea lion to be UCSC’s mascot, but the students overwhelmingly advocated for Sammy the Slug; the students won.</p><img src='places/slug01.jpg' width='60%'><img src='places/slug02.jpg' width='60%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});


// Initially hide the "Homepage" button
homepageButton.style.display = 'none';