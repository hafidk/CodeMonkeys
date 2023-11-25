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
      addSources();
    });
    map.on("styledata", function () {
      addSources().then(function () {
        addLayer();
      });
    });
    map.on("click", function (e) {
      let bbox = [
        [e.point.x - 6.0, e.point.y - 6.0],
        [e.point.x + 6.0, e.point.y + 6.0],
      ];

      let features = map.queryRenderedFeatures(bbox, {
        layers: ["routing-in"],
      });

      if (features && features.length > 0) {

        getFeatureInfo(features);
      }

    
    /*   getCoordinates(e);

     console.log("markers", markers.length)
             */
          
     /*  markers.forEach(function (m) {
          var marker = m.marker;
          var id = m.id;
          var info = m.info;

          // Get the marker's coordinates
          var coordinates = marker.getLngLat();

          // Check if the click event coordinates are close to the marker's coordinates
          var isMarkerClicked =
            Math.abs(e.lngLat.lng - coordinates.lng) < 0.0001 &&
            Math.abs(e.lngLat.lat - coordinates.lat) < 0.0001;

          // If the click is on a marker, display its information
          if (isMarkerClicked) {
            console.log("Marker clicked! ID:", id, "Info:", info);
            // You can do additional actions here, such as displaying a popup with more information
          }
        }); */
     
    });
  });

  async function addSources() {
    if (!map.getSource("routing-in")) {
      map.addSource("routing-in", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                id: "0",
                nom: "Passeig del Riu",
              },
              geometry: {
                coordinates: [1.8194531, 41.7213498],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "1",
                nom: "Parc de l'Agulla",
              },
              geometry: {
                coordinates: [1.8413351, 41.749163],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "2",
                nom: "Plaça Major",
              },
              geometry: {
                coordinates: [1.8269449, 41.7231394],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "3",
                nom: "Parc dels Panyos",
              },
              geometry: {
                coordinates: [1.815922, 41.723386],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "4",
                nom: "Plana de l'Om",
              },
              geometry: {
                coordinates: [1.8250221, 41.7237554],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "5",
                nom: "Carrer Balmes",
              },
              geometry: {
                coordinates: [1.8308373, 41.7346206],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "6",
                nom: "Carrer de la Sagrada Família",
              },
              geometry: {
                coordinates: [1.8381667, 41.7277642],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "7",
                nom: "Passeig Pere III",
              },
              geometry: {
                coordinates: [1.8245457, 41.7294939],
                type: "Point",
              },
            },
            {
              type: "Feature",
              properties: {
                id: "8",
                nom: "Pont Vell",
              },
              geometry: {
                coordinates: [1.830274, 41.7208752],
                type: "Point",
              },
            },
          ],
        },
      });
    }
  }

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

  /* const unsubscribegetCoordinatesStore = getCoordinatesStore.subscribe(
    (coordInfo) => {
      if (coordInfo) {
        let infoCoords = coordInfo.lngLat;
        console.log("infoCoords", infoCoords);

        let coord = coordInfo.lngLat;

        console.log("coordInfo", coordInfo);
        addMarker(
          id + Date.now(),
          [coord.lng, coord.lat],
          "Marker 1 Information"
        );

     
      }
    }
  );
  onDestroy(unsubscribegetCoordinatesStore); */
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
