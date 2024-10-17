# leaflet-challenge
Module 15 Challenge Repo

# Earthquake Data Visualization

This project visualizes earthquake data on an interactive map using the Leaflet JavaScript library. The map plots earthquake occurrences based on their longitude and latitude, and provides visual cues to represent both the magnitude and depth of each earthquake.

## Features

- **Map Plotting**: Earthquakes are plotted on a Leaflet map using their geographic coordinates (longitude and latitude).
- **Magnitude Representation**: The size of each earthquake marker corresponds to the magnitude of the earthquake—larger markers represent higher magnitudes.
- **Depth Representation**: The color of each marker corresponds to the depth of the earthquake. Deeper earthquakes are represented with darker colors.
- **Interactive Popups**: Clicking on a marker reveals additional details about the earthquake, such as its magnitude, location, and depth.
- **Legend**: A map legend provides context for interpreting the marker sizes and colors, showing the relationship between earthquake depth and color.

## How It Works

1. **Earthquake Data Import**: The dataset is loaded and processed to extract earthquake information, including coordinates (longitude, latitude), magnitude, and depth.

2. **Marker Customization**:
    - Each earthquake is represented by a circle marker on the map.
    - The marker’s **size** is proportional to the earthquake’s **magnitude**.
    - The marker’s **color** is determined by the **depth** of the earthquake.
    
3. **Popups**: When a marker is clicked, a popup displays additional information about the earthquake, including:
    - Magnitude
    - Location (longitude and latitude)
    - Depth

4. **Legend**: A dynamic legend shows a color scale for earthquake depth, helping users understand the relationship between marker color and depth.