/* ========================================================================= */
/*	Mapbox Customization
/* =========================================================================  */

mapboxgl.accessToken = "pk.eyJ1IjoiZ291em91IiwiYSI6ImNqcGI1ZXIzNDBmM2QzcXBoZ2l0N3g5MHIifQ.kdORUu1Zs7Ef--x6-VzQog"
var latitude = $('#map-canvas').attr('data-latitude');
var longitude = $('#map-canvas').attr('data-longitude');

var map = new mapboxgl.Map({
  container: 'map-canvas', // HTML container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: [longitude, latitude], // starting position as [lng, lat]
  zoom: 13
});

var popupGalerie = new mapboxgl.Popup()
.setHTML('<h3>Galerie des abonnés</h3><p class="address">40 place du Théâtre - Palais de la bourse</p><p>59800 Lille</p><a href="https://www.google.fr/maps/place/Now+Coworking+Lille/@50.6377566,3.0625137,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d588688ac4cb:0xc8f15891c2390937!8m2!3d50.6377532!4d3.0647024">Google Maps</a> &ndash; <a href="https://www.qwant.com/maps/#map=17.00/50.6380453/3.0639531">Qwant Maps</a>');

var markerGalerie = new mapboxgl.Marker()
  .setLngLat([longitude, latitude])
  .setPopup(popupGalerie)
  .addTo(map);

var popupFic = new mapboxgl.Popup()
  .setHTML('<h3>FIC</h3><p>Grand Palais</p>');

var markerFic = new mapboxgl.Marker()
  .setLngLat([3.0758883, 50.6326603])
  .setPopup(popupFic)
  .addTo(map);

map.addControl(new mapboxgl.NavigationControl());
