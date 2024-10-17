// Initialize the map
let myMap = L.map("map", {
    center: [38, -117.00],
    zoom: 6.5
  });
  
// Add the background map tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Assign Json URL variable
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Assign marker sizer to magnitude value
function markerSize(magnitude) {
  return magnitude * 4; 
}

// Assign color scale to depth value. Deeper depther = darker color
function markerColor(depth) {
  return depth > 90 ? "#d73027" :
         depth > 70 ? "#fc8d59" :
         depth > 50 ? "#fee08b" :
         depth > 30 ? "#d9ef8b" :
         depth > 10 ? "#91cf60" :
                      "#1a9850";
}

// Fetch the Json data
d3.json(url).then(function(data) {
  // Loop through each earthquake feature
  data.features.forEach(function(feature) {
    let location = feature.geometry;

    // Check if the location exists and is a Point (latitude, longitude, and depth)
    if (location && location.coordinates) {
      let lat = location.coordinates[1];  
      let lon = location.coordinates[0];  
      let depth = location.coordinates[2]; 
      let magnitude = feature.properties.mag;  

      // Create a circle marker with size based on magnitude and color based on depth
      L.circleMarker([lat, lon], {
        radius: markerSize(magnitude),
        fillColor: markerColor(depth),
        color: "#000",
        weight: 1,
        fillOpacity: 0.85 
      }).bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr>
                    <p>Magnitude: ${magnitude}</p>
                    <p>Depth: ${depth} km</p>`).addTo(myMap);  
    }
  });

  // Add a legend for depth
  let legend = L.control({ position: "bottomright" });

  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let depths = [-10, 10, 30, 50, 70, 90];
    let colors = ["#1a9850", "#91cf60", "#d9ef8b", "#fee08b", "#fc8d59", "#d73027"];
    let labels = [];

    div.innerHTML = '<h4 style = "font-size: 24px;">Depth (km)</h4>';

    // Loop through each depth range and create a colored square for the legend
    for (let i = 0; i < depths.length; i++) {
      div.innerHTML +=
          '<i style="width: 45px; height: 45px; background:' +
          colors[i] +
          '; display: inline-block; margin-right: 5px;"></i> ' +
          '<span style="font-size: 22px;">' + 
          depths[i] +
          (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+') +
          '</span>';
    }

    return div;
  };

  // Add the legend to the map
  legend.addTo(myMap);
});


  
  