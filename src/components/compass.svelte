<script>
  // @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import maplibregl from "maplibre-gl";
  import { mapLibreStore } from "../Utils/stores";

  let map = {};

  const unsubscribemapLibreStore = mapLibreStore.subscribe((mapLibre) => {
    if (map && mapLibre) {
    
      map = mapLibre;
    }
  });

  onDestroy(unsubscribemapLibreStore);
  onMount(async () => {
    let nav = new maplibregl.NavigationControl();

    map.addControl(nav, "bottom-right");
  });
</script>
