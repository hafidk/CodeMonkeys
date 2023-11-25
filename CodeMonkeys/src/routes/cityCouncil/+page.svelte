<script>
	/** @type {import('./$types').PageData} */
    import mockData from "../../mock/mockDataCityCouncil.json";

    
</script>


{#each mockData.result as element (element.id)}
<div class="item">
  <div class="image-section">
    <img src={element.image} alt={element.author} />
  </div>
  <div class="info-section">
    <h2>{element.title}</h2>
    <p>Author: {element.author}</p>

  </div>

</div>
{/each}
  
  <style>
    /* Add styles for the item, image-section, and info-section */
    .item {
      display: flex;
      border: 1px solid #ddd;
      margin-bottom: 10px;
    }
  
    .image-section {
      flex: 1;
    }
  
    .image-section img {
      width: 100%;
      height: auto;
    }
  
    .info-section {
      flex: 2;
      padding: 10px;
    }
  </style>
