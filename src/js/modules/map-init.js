
mapboxgl.accessToken = 'pk.eyJ1IjoibGlsaWEta3VrIiwiYSI6ImNrb3UwZXpmdjBieHoyb21xMGs0azB1YWgifQ.hHoJVbDYP7HRGcklMRdQow';
var monument = [30.47, 50.48];
var map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/light-v10',
   center: [30.47719349, 50.48012848], // starting position [lng, lat]
   zoom: 15
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
   'Afgan Kazan...'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
   .setLngLat(monument)
   .addTo(map);
