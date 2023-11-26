<script>
    // @ts-nocheck
  
    import { onMount, getContext, onDestroy } from "svelte";
    import { getCoordinatesStore } from "../Utils/stores";
    import maplibregl from "maplibre-gl";
    const getMapLibre = getContext("getMapLibre");
    const getFeatureInfo = getContext("getFeatureInfo");
    const getCoordinates = getContext("getCoordinates");
    export let map;
    export let lat;
    export let lon;
    export let zoom;
    export let maxZoom;
  
  /* let id = 0;
  
    // Create an array to store markers with associated information
    var markers = [];
  
    // Function to add a marker with a unique identifier and information
    function addMarker(id, coordinates, info) {
      var marker = new maplibregl.Marker({ color: "#6A0572"}).setLngLat(coordinates).addTo(map);
  
      // Store the marker information along with its unique identifier
      markers.push({
        id: id,
        marker: marker,
        info: info,
      });
    } */
    onMount(() => {
      map = new maplibregl.Map({
        container: "map",
        style: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard.json",
        center: [lon, lat],
        zoom,
        maxZoom,
        attributionControl: false,
        preserveDrawingBuffer: true,
      });
  
      getMapLibre(map);
  
      map.on("load", function () {
        //addSources();
      });
      map.on("styledata", function () {
        //addLayer();
      });
      map.on("click", function (e) {
        // Add a marker
        new maplibregl.Marker()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(map);

          const newLngLat = [e.lngLat.lng, e.lngLat.lat]; // Replace with your new coordinates
          const mapBounds = map.getBounds();
          const leftSideLng = mapBounds.getEast(); // Left side longitude
          const LeftSideLat = mapBounds.getSouth(); // Left side latitude
          const mapWidth = mapBounds.getEast() - mapBounds.getWest(); // Width of the map
          const mapHeight = mapBounds.getNorth() - mapBounds.getSouth(); // Height of the map
          const targetLngLat =  [e.lngLat.lng + mapWidth/2 - mapWidth/10, e.lngLat.lat] // Replace with your desired latitude

          map.easeTo({
            center: targetLngLat,
            duration: 500, // Transition duration in milliseconds
            easing: (t) => t, // Easing function, you can customize this
          });
          getFeatureInfo({});
        
        });
    });

  
    function addLayer() {
      if (!map.getLayer("routing-in")) {
        map.addLayer({
          id: "routing-in",
          type: "circle",
          source: "routing-in",
          maxzoom: 19,
          layout: {
            visibility: "visible",
          },
          paint: {
            "circle-color": "#fabc20",
            "circle-stroke-color": "#fff",
            "circle-stroke-width": 3,
            "circle-radius": 10,
          },
          cursor: "pointer",
        });
      }
    }
  
  </script>
  
  <div id="map"></div>
  
  <style>
    #map {
      position: absolute;
      width:  calc(100% - 277px);
      height:  calc(100% - 95px);
      border-radius: 20px;
  
    }
  </style>
  