<script>
	/** @type {import('./$types').PageData} */
  
    import ThumbUp from "svelte-material-icons/ThumbUp.svelte";
    import mockData from "../../mock/mockData.json";
    const sortedList = mockData.result.sort((a, b) => b.votes - a.votes);

    
</script>  

<style>
   @import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
  /* This pen */

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
    content: "";
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
      flex-wrap: inherit;
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
      content: "";
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
</style>
  
{#each sortedList as element (element.id)}
  <article class="postcard dark blue">
    <div class="pill">
      <div style="display: flex;">{element.votes} &nbsp; <ThumbUp size="18px" /></div>
    </div>
    <a class="postcard__img_link" href="#">
      <img class="postcard__img" src="{element.image}" alt="Image Title" />
    </a>
    <div class="postcard__text">
      <h1 class="postcard__title blue"><a href="#">{element.title}</a></h1>
      <div class="postcard__subtitle small">
        by {element.author}
      </div>
      <div class="postcard__bar"></div>
      <div class="postcard__preview-txt">{element.description}</div>
    </div>
  </article>
{/each}



  
  