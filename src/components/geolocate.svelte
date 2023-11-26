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
    map.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,

          watchPosition: true,
        },
        accessibleLabelProperty: "name",
      }),
      "bottom-right"
    );
  });
</script>


