// Initialize the map and set the view
var map = L.map('map').setView([-41.289144, 174.777203], 13);

// Add CARTO tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
}).addTo(map);

// Add a default marker at the start of the map with a popup and location 
var marker = L.marker([-41.289144, 174.777203]).addTo(map);
marker.bindPopup("<b>Relaxing Nature Spot</b><br>A peaceful place to unwind.").openPopup();

// create a reusable popup when the map is clicked 
var popup = L.popup();

// show the coordinates when the map is clicked 
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// waits till the map is clicked to show the popup with the coordinates of the clicked location
map.on('click', onMapClick);

// Function to go to a specific location and add a marker with a popup when the card is clicked
function goToLocation(lat, lng, name) {
    map.setView([lat, lng], 15);
    L.marker([lat, lng]).addTo(map)
        .bindPopup(name)
        .openPopup();
}
