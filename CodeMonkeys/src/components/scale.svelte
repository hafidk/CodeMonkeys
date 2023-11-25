<script>
  // @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import maplibregl from "maplibre-gl";
  import { mapLibreStore } from "../Utils/stores";

  let map = {};

  const unsubscribemapLibreStore = mapLibreStore.subscribe((mapLibre) => {
    if (map && mapLibre) {
      /*     console.log("mapSt", mapSt) */
      map = mapLibre;
    }
  });

  onDestroy(unsubscribemapLibreStore);

  onMount(async () => {
    var scale = new maplibregl.ScaleControl({
      maxWidth: 100,
      unit: "metric",
    });

    map.addControl(scale, "bottom-right");
  });
</script>
