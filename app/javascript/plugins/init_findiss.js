function findISS() {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(response => response.json())
    .then(data => {
        lat = data.latitude.toFixed(2);
        long = data.longitude.toFixed(2);
        console.log(lat)
        // call updateISS() function to update things
        updateISS(lat, long);
    })
    .catch(e => console.log(e));
  }

function updateISS(lat, long) {
    marker.setLatLng([lat, long]);
    map.setView([lat, long]);
}

export { findISS };