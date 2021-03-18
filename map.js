const lat = 49.892665;
const lon = -97.143768;

const start = [-97.143914, 49.892207]
const dest = [-97.14385,  49.893019]

const center = [lon, lat]
mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNrbGFzc2VuIiwiYSI6ImNrbWYzOW0xdTMwZHAycHcwMXVvNDR0bjgifQ.AdOE2Tt6HU-_Wqn-NLvRzw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center,
    zoom: 17
});

map.on('load', function () {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    start,
                    // [-97.143914, 49.892207],
                    [-97.144306, 49.892878],
                    [-97.144091, 49.892974],
                    dest,
                ]
            }
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
            'line-width': 8
        }
    });

    // start marker
    new mapboxgl.Marker({
        color: "#469bd3",
    }).setLngLat(start)
    .addTo(map);

    // destination marker
    new mapboxgl.Marker({
        color: "#469bd3",
    }).setLngLat(dest)
    .addTo(map);
});