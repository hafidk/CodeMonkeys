<script>
    // @ts-nocheck
  
    //  -nocheck
  
    import { fly } from "svelte/transition";
    import { onDestroy } from "svelte";
    import { getFeatureInfoStore } from "../../Utils/stores";
  
    export let panelVisualState;
  
    let infoLayer = "";
  
    function closeInfoPanelRight() {
      /*  getFeatureInfoStore.set(false); */
      panelVisualState.infoShow = false;
      selectedFile = undefined;
        fileInput= undefined;
        imageUrl= undefined;
        generatedImage = false;
    }
    let currentId;
    let element;
    const unsubscribegetFeatureInfoStore = getFeatureInfoStore.subscribe(
      (featureInfo) => {
        if (featureInfo) {
         
          
          infoLayer = featureInfo[0].properties.nom;
          currentId = featureInfo[0].properties.id;
  
          console.log(currentId)
     element = mockData.result.filter((element) => element.id === currentId)[0]
     console.log(element)
        }
      }
    );
    onDestroy(unsubscribegetFeatureInfoStore);
  
    import ThumbUp from "svelte-material-icons/ThumbUp.svelte";
    import mockData from "../../mock/mockData.json";
   
    let selectedFile;
    let fileInput;
    let imageUrl;
    let generatedImage = false;

  function handleFileChange(event) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      selectedFile = fileInput.files[0];
      // You can do something with the selected file here
      imageUrl = URL.createObjectURL(selectedFile);
      console.log("Selected File:", selectedFile);
    }
  }
  
  function generateImages(){
    console.log("OU")
      generatedImage = true;
    }

    function selectImage(elem){
        console.log(this)
        this.style.border="2px solid #0076bd";
    }

 

   

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
        <article class="postcard dark blue" style="overflow:scroll;">

          <div class="postcard__text">
            <h1 class="postcard__title blue"><a href="#">New suggestion</a></h1>
            <div class="postcard__subtitle small">
      
            </div>
            <div class="postcard__preview">
                <form>
                    <input type="file" accept="image/*" bind:this={fileInput} on:change={handleFileChange} />
                    {#if selectedFile}
                      <img src={imageUrl} alt="Selected Image" />
                    {/if}
                    <br>
                    <input type="text" placeholder="Title"/>
                    <textarea type="text" placeholder="Description"></textarea> 
                    <input type="text" placeholder="Prompt"/>
                    <button on:click={generateImages}>Generate</button>
                    <!-- Display AI image -->
                    {#if generatedImage}
                        <div style="display:flex;">
                            <div style="margin:0.2rem;"><img  on:click={selectImage} src="./addModernArt1.jpeg" alt="Selected Image" /></div>
                            <div style="margin:0.2rem;"><img  on:click={selectImage}  src="./addModernArt2.jpeg" alt="Selected Image" /></div>
                            <div style="margin:0.2rem;"><img  on:click={selectImage}  src="./addModernArt3.jpeg" alt="Selected Image" /></div>
                        </div>
                    {/if}
                    <button on:click={closeInfoPanelRight}>Save</button>
                </form>
                
            </div>
          </div>
        </article>
      </div>
  
  
  
    </div>
  {/if}
  
  <style>
  
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
 /* This pen */

 /* Add your custom styles here */
 form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:405px;
  }

  .image {
    margin: 10px 0;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 100%;
  }

  input,
  textarea {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
  }

  button {
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
  }

 .dark {
   background: #110f16;
 }

 a,
 a:hover {
   text-decoration: none;
   transition: color 0.3s ease-in-out;
 }



 /* Cards */
 .postcard {
   flex-wrap: wrap;
   display: flex;
   box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
   border-radius: 10px;
   margin: 0 0 2rem 0;
   overflow: hidden;
   position: relative;
   color: #ffffff;
   height: 500px;
 }
 .postcard.dark {
   background-color: #18151f;
 }
 .postcard a {
   color: inherit;
 }
 .postcard h1,
 .postcard .small {
   font-size: 80%;
 }
 .postcard .postcard__title {
   font-size: 1.75rem;
 }
 .postcard .postcard__img {
   max-height: 100px;
   width: 100%;
   object-fit: cover;
   position: relative;
 }
 .postcard .postcard__img_link {
   display: contents;
 }
 .postcard .postcard__bar {
   width: 50px;
   height: 10px;
   margin: 10px 0;
   border-radius: 5px;
   background-color: #424242;
   transition: width 0.2s ease;
 }
 .postcard .postcard__text {
   padding: 1.5rem;
   position: relative;
   display: flex;
   flex-direction: column;
 }
 .postcard .postcard__preview-txt {
   overflow: hidden;
   text-overflow: ellipsis;
   text-align: justify;
   height: 100%;
 }

 .postcard:before {
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-image: linear-gradient(-70deg, #424242, transparent 50%);
   opacity: 1;
   border-radius: 10px;
 }
 .postcard:hover .postcard__bar {
   width: 100px;
 }

 @media screen and (min-width: 769px) {
   .postcard {
     flex-wrap: wrap;
   }
   .postcard .postcard__title {
     font-size: 2rem;
   }

   .postcard .postcard__img {
     max-width: 300px;
     max-height: 100%;
     transition: transform 0.3s ease;
   }
   .postcard .postcard__text {
     padding: 3rem;
     width: 100%;
   }
   
   .postcard:hover .postcard__img {
     transform: scale(1.1);
   }
   .postcard:nth-child {
     flex-direction: row;
   }

   .postcard:nth-child(2n+1) .postcard__text::before {
     left: -12px !important;
     transform: rotate(4deg);
   }
   .postcard:nth-child(2n+0) .postcard__text::before {
     left: -12px !important;
     transform: rotate(4deg);
   }
 }
 @media screen and (min-width: 1024px) {
   .postcard__text {
     padding: 2rem 3.5rem;
   }

   .postcard__text:before {
     position: absolute;
     display: block;
     top: -20%;
     height: 130%;
     width: 55px;
   }

   .postcard.dark .postcard__text:before {
     background: #18151f;
   }

 
 }
 /* COLORS */
 .blue .postcard__bar {
   background-color: #0076bd;
 }

 .blue::before {
   background-image: linear-gradient(-30deg, rgba(0, 118, 189, 0.1), transparent 50%);
 }

 @media screen and (min-width: 769px) {

   .blue::before {
     background-image: linear-gradient(-80deg, rgba(0, 118, 189, 0.1), transparent 50%);
   }

   .blue:nth-child(2n)::before {
     background-image: linear-gradient(80deg, rgba(0, 118, 189, 0.1), transparent 50%);
   }
 }

 .pill {
   position: absolute;
   top: 10px;
   right: 10px;
   background-color:  #0076bd; /* Choose your desired background color */
   color: white; /* Choose your desired text color */
   padding: 5px 10px 5px 10px;
   border-radius: 20px; /* Adjust the border-radius for a rounded appearance */
   font-size: 16px;
   font-weight: bold;
 }
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
    height: 500px;

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
    background-color: #993333;
    top: 10px;
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
      width: 500px;

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
  