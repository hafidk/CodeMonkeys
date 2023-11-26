<!-- Layout.svelte -->

<script>
  /**
   * @type {string}
   */
  import '../theme.css';
  import HomeCircle from "svelte-material-icons/HomeCircle.svelte";
  import TrendingUp from "svelte-material-icons/TrendingUp.svelte";
  import AccountStar from "svelte-material-icons/AccountStar.svelte";
  import MapMarkerPlusOutline from "svelte-material-icons/MapMarkerPlusOutline.svelte";
  import TownHall from "svelte-material-icons/TownHall.svelte";
  import { fly } from 'svelte/transition';
</script>

<style>
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
      <li><a href="/suggest" style="display: flex;"><div class="icon"><MapMarkerPlusOutline /></div>Suggest</a></li>
      <li><a href="/top" style="display: flex;"><div class="icon"><TrendingUp /></div>Top</a></li>
      <li><a href="/personal" style="display: flex;"><div class="icon"><AccountStar /></div>Personal</a></li>
      <li><a href="/cityCouncil" style="display: flex;"><div class="icon"><TownHall /></div>Ajuntament</a></li>
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
