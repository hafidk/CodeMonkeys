<script>
  // @ts-nocheck

  //  -nocheck

  import { fly } from "svelte/transition";
  import { onDestroy } from "svelte";
  import { getFeatureInfoStore } from "../Utils/stores";

  export let panelVisualState;

  let infoLayer = "";

  function closeInfoPanelRight() {
    /*  getFeatureInfoStore.set(false); */
    panelVisualState.infoShow = false;
  }

  const unsubscribegetFeatureInfoStore = getFeatureInfoStore.subscribe(
    (featureInfo) => {
      if (featureInfo) {
       
        
        infoLayer = featureInfo[0].properties.nom;
     /*    console.log("infoLayer", infoLayer); */
      }
    }
  );
  onDestroy(unsubscribegetFeatureInfoStore);
</script>

{#if panelVisualState.infoShow}
  <div class="panelRight" transition:fly={{ y: 600, duration: 1000 }}>
    <div class="divHeader">
      <div class="divLeft">
      <!--   <i class="material-icons-outlined" title="Informacio">info</i> -->
      </div>
      <!-- <div class="divMiddle">Informació</div> -->
      <div class="divRight">
        <i
          class="material-icons-outlined"
          on:click={closeInfoPanelRight}
          style="font-size:20px"
          title="Informacio">close</i
        >
      </div>
    </div>

    <div class="divBody" transition:fly={{ y: 1200, duration: 1250 }}>
      <div class="divBodyTxt">
        <h3>Ubicació: {infoLayer}</h3>

        <p>Prompt:</p>
        <p><img class ="image"   src="http://www.vinseum.cat/ImagenesDeActivitats/1058_Amics%20en%20ruta.jpg" alt=""></p>
        <p><img class ="image"   src="http://www.vinseum.cat/ImagenesDeActivitats/1058_Amics%20en%20ruta.jpg" alt=""></p>
      </div>
    </div>
  </div>
{/if}

<style>
  .image{
    width: 300px;
  }
  .panelRight{
    background-color: white;
  }
  .divBody {
    font-size: 1em;
    position: inherit;
    top: 52px;
    bottom: 10px;

  }
  .divBodyTxt {
    padding: 5px 20px;
  }

  .divLeft {
    float: left;
    padding-left: 12px;
    padding-top: 12px;
    width: 15%;
  }
  .divMiddle {
    width: 70%;
    padding-left: 15%;
    padding-top: 12px;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
  }
  .divRight {
    float: right;
    padding: 10px;
    margin-right: 5px;
    width: 20px;
    cursor: pointer;
    height: 20px;
    margin-top: 6px;
  }
  .divRight:hover {
    background-color: #fff;
    border-radius: 20px;
    /*  padding: 10px; */
  }
  .divHeader {
    background-color: #fff;
    /*   border-bottom: 1px solid white;
    border-top: 1px solid white; */
    height: 50px;
    position: relative;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #333;
  }

  @media (min-width: 960px) {
    .panelRight {
      display: flex;
      flex: auto;
      position: absolute;
      right: 15px;
      top: 20px;
      bottom: 35px;
      width: 315px;

      max-width: 630px;
      z-index: 10;
      max-height: 100%;

      border-radius: 10px;
      /*  box-shadow: -10px 10px 10px 0 rgb(0 0 0 / 10%),
          10px 10px 10px 0 rgb(0 0 0 / 10%); */
      /* border: 1px solid #c1bbbb; */
      --svrollbar-thumb-width: 6px;
      --svrollbar-thumb-background: #c1bbbb;
      --svrollbar-thumb-opacity: 0.6;
      --svrollbar-thumb-z-index: 9999;
    }
  }
</style>
