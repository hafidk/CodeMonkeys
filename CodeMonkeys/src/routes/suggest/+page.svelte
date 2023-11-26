<script>
  // @ts-nocheck
  import { setContext } from "svelte";
  import {
    getCoordinatesStore,
    getFeatureInfoStore,
    mapLibreStore,
  } from "../../Utils/stores";
  import DisplayControls from "../../components/displayControls.svelte";
  import Map from "../../components/map_input.svelte";
  import Right from "./Right.svelte";
  let map;

  $: panelVisualState = {
    landingShow: true,
    optionsShow: false,
    searchShow: false,
    infoShow: false,
  };

  function getFeatureInfo(info) {
    panelVisualState.infoShow = true;

/*     console.log("info features", info); */
    //getFeatureInfoStore.set(info);
  }
  function getCoordinates(info) {
    /*     panelVisualState.infoShow = true; */

/*     console.log("info coords", info); */
    //getCoordinatesStore.set(info);
  }
  

  function getMapLibre(map) {
  /*   console.log("map", map); */
    mapLibreStore.set(map);
  }

  setContext("getFeatureInfo", getFeatureInfo);
  setContext("getCoordinates", getCoordinates);
  setContext("getMapLibre", getMapLibre);
</script>

<Map {map} lat={41.7239596} lon={1.8081936} zoom={12} maxZoom={18} />
<DisplayControls />
<Right {panelVisualState} />
