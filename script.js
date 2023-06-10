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
  iconSize: [60, 40], // Set the size of the icon
  iconAnchor: [30, 20], // Set the anchor point of the icon
});

var sadsammyIcon = L.icon({
  iconUrl: 'img/sadsammy.png',
  iconSize: [60, 40], // Set the size of the icon
  iconAnchor: [30, 20], // Set the anchor point of the icon
});

var  college910= L.icon({
  iconUrl: 'img/C9JRL.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var cowell = L.icon({
  iconUrl: 'img/COWELL.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var crown = L.icon({
  iconUrl: 'img/CROWN.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var merrill = L.icon({
  iconUrl: 'img/MERRILL.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var oakes = L.icon({
  iconUrl: 'img/OAKES.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var porterKres = L.icon({
  iconUrl: 'img/PORTERKRESGE.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var rcc = L.icon({
  iconUrl: 'img/RCC.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var stevenson = L.icon({
  iconUrl: 'img/STEVENSON.png',
  iconSize: [126, 126], // Set the size of the icon
  iconAnchor: [63, 63], // Set the anchor point of the icon
});

var turkey = L.icon({
  iconUrl: 'img/turkey.PNG',
  iconSize: [60, 60], // Set the size of the icon
  iconAnchor: [30, 30], // Set the anchor point of the icon
});

var deer = L.icon({
  iconUrl: 'img/deer.PNG',
  iconSize: [60, 60], // Set the size of the icon
  iconAnchor: [30, 30], // Set the anchor point of the icon
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
var witchMarker = L.marker([36.98855495395157, -122.07311687973107], { icon: witchIcon }).addTo(map);
var pondMarker = L.marker([36.990743433125544, -122.0666787887893], { icon: pondIcon }).addTo(map);
var caveMarker = L.marker([36.983074309504644, -122.07182957376152], { icon: caveIcon }).addTo(map);

var treehouseMarker = L.marker([36.99397788876648, -122.07343175433796], { icon: treehouseIcon }).addTo(map);
var buddhaMarker = L.marker([37.00659030067108, -122.06566885362406], { icon: buddhaIcon }).addTo(map);
var wishingtreeMarker = L.marker([37.00261134915886, -122.06334268270705], { icon: wishingtreeIcon }).addTo(map);

var gardenMarker = L.marker([37.00671952132072, -122.04488653196965], { icon: gardenIcon }).addTo(map);
var pogonipMarker = L.marker([36.99944856545893, -122.05623140568512], { icon: pogonipIcon }).addTo(map);
var meadowMarker = L.marker([36.99557930353447, -122.04727732871699], { icon: meadowIcon }).addTo(map);

/* Animals & Critters */

var sammyMarker = L.marker([36.999818549341185, -122.04407420834434], { icon: sammyIcon }).addTo(map);
var sammyMarker2 = L.marker([36.998438472191324, -122.06865347131846], { icon: sammy2Icon }).addTo(map);
var sammyMarker3 = L.marker([36.98371211404681, -122.04699933794046], { icon: sammy3Icon }).addTo(map);
var sammyMarker4 = L.marker([37.005748593454676, -122.05563011691878], { icon: sadsammyIcon }).addTo(map);

var turkeyMarker = L.marker([36.987507386539, -122.04375013170626], { icon: turkey }).addTo(map);
var deerMarker = L.marker([37.00401441207878, -122.05030051576693], { icon: deer }).addTo(map);

/* College icons */

var college910Marker = L.marker([36.99509324117484, -122.06021341355925], { icon: college910 }).addTo(map);
var cowellMarker = L.marker([36.98772104817247, -122.05363583255152], { icon: cowell }).addTo(map);
var crownMarker = L.marker([36.99369141047491, -122.05395327783538], { icon: crown }).addTo(map);
var merrillMarker = L.marker([36.99251157172391, -122.05302414125191], { icon: merrill }).addTo(map);

var oakesMarker = L.marker([36.984946944315574, -122.05940863066844], { icon: oakes }).addTo(map);
var porterKresMarker = L.marker([36.9914, -122.0609], { icon: porterKres }).addTo(map);
var rccMarker = L.marker([36.98646383687299, -122.05991291379839], { icon: rcc }).addTo(map);
var stevensonMarker = L.marker([36.98921233827497, -122.0528739730032], { icon: stevenson }).addTo(map);

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

turkeyMarker.bindTooltip("Cluck!");

deerMarker.bindTooltip("*grunt*");


// COLLEGES

// college910Marker.bindTooltip("College 9 and John R. Lewis College");
// cowellMarker.bindTooltip("Cowell College");
// crownMarker.bindTooltip("Crown College");
// merrillMarker.bindTooltip("Merill College");

// oakesMarker.bindTooltip("Oakes College");
// porterKresMarker.bindTooltip("Porter and Kresge College");
// rccMarker.bindTooltip("Rachel Carson College");
// stevensonMarker.bindTooltip("Stevenson College");


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
  descriptionContainer.innerHTML = "<img src='img/witch.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates are NOT KNOWN, but it is near Porter Meadows: 36.99479794193654, -122.06780840759106 </p><h2>Location</h2><p>The witch spot is in the woods just past the Porter meadows. There are symbols drawn and carved into trees.  As of right now, there is also a net swing among the trees.</p><h2>Lore</h2><p>For years, students and others have come to this spot to practice witchcraft or to simply visit and spend time in nature. Groups and clubs such as the Spiritual Pagan Student Alliance often use the space to practice witchcraft, and artists such as @ucsc.swings (on instagram) have installed pieces there. </p><img src='places/witchspot01.jpeg' width='80%'><img src='places/witchspot02.jpeg' width='80%'><img src='places/witchspot04.jpeg' width='80%'>";
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
  descriptionContainer.innerHTML = "<img src='img/cave.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 36.99598016958417, -122.0687447736907</p><h2>Location</h2><p>The Porter Cave, also known as the Empire Cave, is in the Cave Gulch area past the Porter meadows.  The cave can be dangerous to visit in the wet weather, as mud and pools of water form when the rain collects.  Across the road is another cave that is more difficult to explore called “Hell Hole.”</p><h2>Lore</h2><p>The Porter Cave is home to many interesting plants and animals, including the Dolloff Spider and the Empire Cave pseudoscorpion that have practically been found solely in this cave and nowhere else.  It is encouraged that visitors should pick up trash on their way out since it threatens the endemic species in the caves.  Also, people that visit the caves have reported seeing mud sculptures left by past visitors</p> <img src='places/cave.jpeg' width='80%'> <img src='places/cave01.JPG' width='80%'> <img src='places/cave02.jpeg' width='80%'> <img src='places/cave03.JPG' width='80%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});
// needs a picture of treehouse
treehouseMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/treehouse.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates are NOT KNOWN, but it is near porter caves: 36.99598016958417, -122.0687447736907</p><h2>Location</h2><p>There was once a treehouse past Empire Grade in the woods outside of Porter college.</p><h2>Lore</h2><p>  It is not known who built the treehouse past the Porter Caves, but the city or the school itself had it taken down in 2016 due to dangerous encounters with the treehouse involving partying students.</p><img src='places/treehouse01.jpeg' width='80%'>";
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
  descriptionContainer.innerHTML = "<img src='img/wishingtree.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates are NOT KNOWN, but it is near Tree 9: 37.004797242001075, -122.06003132333856</p><h2>Location</h2><p>The wishing tree is located near Tree 9 which is around the forest of College 9 and John R. Lewis. It is a tree that students have come to for over a decade to reveal their fears and put their wishes into the universe in hopes of them coming true.</p><h2>Lore</h2><p>Anyone can write their wish on a piece of paper, stick it on a branch of the tree, and wait patiently for the wish to come true. If you put energy into the world, it may just come back to you in a positive way. If you’re lucky, your wish may come true! This has been a tradition at UCSC for over ten years and students still go to the tree to wish upon a star, or more accurately, a branch.</p> <img src='places/wishingTree01.png' width='70%'> <img src='places/wishingTree02.png' width='70%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

gardenMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/garden.png' width='20%' style='display: block; margin: 0 auto;'><p style='text-align: center; font-weight: bold;'>Coordinates: 37.02473782998077, -122.05780903827328</p><h2>Location</h2><p>The Garden of Eden is a beautiful swimming hole and nature spot for not only UCSC students but everyone to enjoy. It consists of a river among the forest, and is the perfect place to swim, relax, and enjoy nature. It is known for being one of the most beautiful spots to visit just off of campus. It is located along the San Lorenzo River and is closest to the Crown and Merrill Colleges.</p><h2>Lore</h2><p>The Garden of Eden is known as an essential hangout spot for students at UCSC. There isn’t any crazy groundbreaking story, but the location is very important to student life. Students, tourists, and locals all gather there to enjoy the river and have some fun in the sun!</p> <img src='places/gardenOfEden01.jpeg' width='80%'><img src='places/gardenOfEden02.png' width='80%'>";
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

deerMarker.on('click', function() {
  descriptionContainer.innerHTML = "<img src='img/deer.PNG' width='20%' style='display: block; margin: 0 auto;'><h2>About Deer At UCSC</h2><p>Deer are a common sight across the UCSC campus, gracefully roaming amidst the abundant greenery. They can be spotted throughout the campus, particularly in areas adorned with lush grass, which encompasses a significant portion of the grounds. It is worth noting that, at times, they may unexpectedly dart across roads, leading to cautionary encounters with passing vehicles.</p><h2>Lore</h2><p>The deer at UCSC are active and cherished community members, frequently spotted across the campus. They have favorite spots, including the expansive fields of East Field and West Field. These graceful creatures have become iconic symbols of the campus, embodying the harmonious coexistence of nature and academia. Interactions with students, faculty, and visitors have created a lore of enchanting encounters. The deer's presence serves as a reminder of UCSC's commitment to environmental stewardship and appreciation of nature's beauty.</p><img src='places/deerUCSC.jpeg' width='60%'>";
  descriptionContainer.style.display = 'block'; // Show the description container
  mapContainer.style.display = 'none'; // Hide the map
  homepageButton.style.display = 'block'; // Show the "Homepage" button
  guideText.style.display = 'none'; // hide map guiding description
});

// Initially hide the "Homepage" button
homepageButton.style.display = 'none';