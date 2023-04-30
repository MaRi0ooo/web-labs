const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

let markers = [];

const btnAdd = document.getElementById("button-add-marker");
function addMarker() {
    const marker = L.marker(map.getCenter()).addTo(map);
    markers.push(marker);   
}

const btnRemove = document.getElementById("button-remove-markers");
function removeMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}


