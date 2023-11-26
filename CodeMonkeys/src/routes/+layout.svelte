<!-- Layout.svelte -->

<script>
  /**
   * @type {string}
   */
  import '../theme.css';
  import HomeCircle from "svelte-material-icons/HomeCircle.svelte";
  import TrendingUp from "svelte-material-icons/TrendingUp.svelte";
  import AccountStar from "svelte-material-icons/AccountStar.svelte";
  import TownHall from "svelte-material-icons/TownHall.svelte";
  import Inbox from "svelte-material-icons/Inbox.svelte";


  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  /**
   * @type {any[]}
   */

   let commentQueue = [];

onMount(() => {
  // Load initial comments
  loadNextComments();
});

let comment
function loadNextComments() {
  // Simulate loading three comments at a time
  const loadedComments = [
  {"comentari": "El sistema de transport públic és eficient i fàcil d'utilitzar. 🚌✅", "emoji": "✅🚍"},
  {"comentari": "Manresa destaca per la seva gestió eficient de les escombraries. ♻️🗑️", "emoji": "♻️🗑️"},
  {"comentari": "El mobiliari urbà és modern i funcional. 🪑🏙️", "emoji": "🪑🏙️"},
  {"comentari": "La circulació de trànsit a Manresa pot millorar en algunes zones. 🚗🚦", "emoji": "🚗🚦"},
  {"comentari": "Els parcs de Manresa ofereixen un lloc relaxant per gaudir de la natura. 🌳🏞️", "emoji": "🌳🏞️"},
  {"comentari": "La varietat de restaurants és impressionant i deliciosa. 🍽️👌", "emoji": "🍽️👌"},
  {"comentari": "Té una gran oferta d'activitats culturals. 🎭🎨", "emoji": "🎭🎨"},
  {"comentari": "La ciutat de Manresa valora la sostenibilitat en les seves iniciatives. 🌱💚", "emoji": "🌱💚"},
  {"comentari": "Les zones verdes són un lloc encantador per passejar. 🌿🚶‍♂️", "emoji": "🌿🚶‍♂️"},
  {"comentari": "Té una gran comunitat amb un ambient acollidor. 👫❤️", "emoji": "👫❤️"},
  {"comentari": "Manresa destaca per la seva arquitectura impressionant. 🏰🏛️", "emoji": "🏰🏛️"},
  {"comentari": "La ciutat podria beneficiar-se de més espais recreatius per als nens. 🤸‍♂️👶", "emoji": "🤸‍♂️👶"},
  {"comentari": "El sistema de ciclovies a Manresa fomenta la mobilitat sostenible. 🚴‍♂️🌍", "emoji": "🚴‍♂️🌍"},
  {"comentari": "Necessita millorar la senyalització de les zones d'aparcament. 🅿️🚗", "emoji": "🅿️🚗"},
]
  comment = loadedComments[Date.now() % 14].comentari
  // Load the next set of comments after a delay
  setTimeout(() => {
    loadNextComments();
  }, 4000);
}

</script>

<style >
  .news-item {
  color: black;
  font-size: 12px;
  margin-bottom: 10px;
  padding: 8px;
  }


  .news-item:enter {
    transition: opacity 1s;
  }

  /* Add your styles for the layout, sidebar, header, and content here */
  .layout {
    display: flex;
    flex-direction: column;
    height: 95vh;
  }

  .header {
    color: white;
    padding: 20px;
    text-align: center;
    height: 20px;
    display: flex;
    place-content: space-between;
    color: black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .sidebar {
    width: 200px;
    height: fit-content;
    padding: 20px;
    margin-top: 20px;
    top: 20px;
    position: sticky;
  }

  .content {
    flex: 3;
    padding: 20px;
  }

  img{
    width: 30px;
    height: 30px;
  }

  .icon {
    margin-top: 5px;
  }
  .container {
    transition: opacity 0.5s;
  }
</style>



<div class="layout">
  <div class="header">
    <div style="display:flex;align-items: center;">
      <div class="logo" style="margin-top: 5px; margin-right: 10px;"><img src="./upc.png" alt="upc" /></div>
      <h1>Manresa-Suggereix</h1>
    </div>
    <div style="display:flex;"> 
      <div class="logo"><a href="https://svelte.dev/docs/introduction" target="_blank"><img src="./svelte.png" alt="svelte" /></a></div>&nbsp;&nbsp;
      <div class="logo"><a href="https://discord.com/channels/1174668162319519774/1174668165146476546" target="_blank"><img src="./discord.png" alt="github" /></a></div>&nbsp;&nbsp;
      <div class="logo"><a href="https://github.com/hafidk/CodeMonkeys/tree/main" target="_blank"><img src="./github.png" alt="upc" /></a></div>&nbsp;&nbsp;
    </div>

  </div>
  
  
  <div style="display: flex;">
  <div class="sidebar">
    <!-- Sidebar content and navigation links go here -->
    <ul>
      <li><a href="/" style="display: flex;"><div class="icon"><HomeCircle /></div>Landing</a></li>
      <li><a href="/top" style="display: flex;"><div class="icon"><TrendingUp /></div>Top</a></li>
      <li><a href="/personal" style="display: flex;"><div class="icon"><AccountStar /></div>Personal</a></li>
      <li><a href="/cityCouncil" style="display: flex;"><div class="icon"><TownHall /></div>Ajuntament</a></li>
      <li style="display:grid;justify-items:center;">
        <a href="" style="display: flex;"><div class="icon"><Inbox /></div>Bustia</a>

        <div class="news-item" transition:fly={{ y: 600, duration: 1000 }}>
           {comment}
        </div>
      </li>
    </ul>
  </div>

  <div class="content">
    <!-- Main content goes here -->
    <div transition:fly="{{ x: -100, duration: 500 }}" class="container">
      <slot></slot>
    </div>
    
  </div>
</div>
</div>
