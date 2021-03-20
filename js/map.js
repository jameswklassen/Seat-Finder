// -----------------------------------------------------------------
// map.js
//
// purpose: specificallly for map navigation
// -----------------------------------------------------------------

const lat = 49.892665;
const lon = -97.143768;
const center = [lon, lat]

const ROTATION_AMOUNT = 45;
const initialMapParams = { center, zoom: 17, bearing: 0 }

// Reverse coordinates from standards 'lat, lon' to 'lon, lat'
reverseCoordinate = (latLon) => (
  [latLon[1], latLon[0]]
);

const coordinates = [
  [49.892053, -97.143904],
  [49.892226, -97.144108],
  [49.892782, -97.144420],
  [49.893048, -97.144194],
  [49.893097, -97.143880],
  [49.893010, -97.143858],
  [49.892945, -97.143828],
  [49.892938, -97.143856],
].map(reverseCoordinate);

const overlayCoordinates = [
  [49.893218, -97.144726],
  [49.893549, -97.143512],
  [49.892160, -97.142708],
  [49.891849, -97.143991],
].map(reverseCoordinate);

const start = coordinates[0];
const dest = coordinates[coordinates.length - 1];

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNrbGFzc2VuIiwiYSI6ImNrbWYzOW0xdTMwZHAycHcwMXVvNDR0bjgifQ.AdOE2Tt6HU-_Wqn-NLvRzw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  ...initialMapParams,
});

map.on('load', function () {
  map.addSource('route', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        coordinates,
      }
    }
  });
  map.addSource("venueOverlay", {
    "type": "image",
    "url": "img/overlay.png",
    "coordinates": overlayCoordinates,
  });

  map.addLayer({
    "id": "overlay",
    "source": "venueOverlay",
    "type": "raster",
    "paint": {
      "raster-opacity": 1,
      }
  });
  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#469bd3',
      'line-opacity': 0.8,
      'line-width': 8
    }
  });


  // create start marker
  const markerStart = document.createElement('div');
  markerStart.className = 'marker';
  markerStart.innerHTML = '<span class="material-icons">gps_fixed</span>';

  new mapboxgl.Marker(markerStart)
    .setLngLat(start)
    .addTo(map);

  var markerDest = document.createElement('div');
  markerDest.className = 'marker';
  markerDest.innerHTML = '<span class="material-icons">event_seat</span>';

  new mapboxgl.Marker(markerDest)
    .setLngLat(dest)
    .addTo(map);

  // Button controls
  document.getElementById('rotate-left').onclick = () => {
    map.flyTo({
      bearing: map.getBearing() + ROTATION_AMOUNT,
    });
  };

  document.getElementById('rotate-right').onclick = () => {
    map.flyTo({
      bearing: map.getBearing() - ROTATION_AMOUNT,
    });
  };

  document.getElementById('zoom-in').onclick = () => {
    map.flyTo({
      zoom: map.getZoom() + 1,
    });
  };

  document.getElementById('zoom-out').onclick = () => {
    map.flyTo({
      zoom: map.getZoom() - 1,
    });
  };

  document.getElementById('reset').onclick = () => {
    map.flyTo({
      ...initialMapParams,
    });
  };
});
