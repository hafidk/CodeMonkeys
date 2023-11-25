<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import maplibregl from "maplibre-gl";

  export let map;
  export let lat;
  export let lon;
  export let zoom;
  export let maxZoom;

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
  });
</script>

<div id="map"></div>

<style>
  #map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
