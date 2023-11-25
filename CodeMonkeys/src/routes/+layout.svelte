<!-- Layout.svelte -->

<script>
  /**
   * @type {string}
   */
  import '../theme.css';
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
  }

  .sidebar {
    width: 200px;
    height: calc(95vh - 90px);
    padding: 20px;
  }

  .content {
    flex: 3;
    padding: 20px;
  }
</style>

<div class="layout">
  <div class="header">
    titol
    <!-- Add other header content as needed -->
  </div>
  <div style="display: flex;">
  <div class="sidebar">
    <!-- Sidebar content and navigation links go here -->
    <ul>
      <li><a href="/">Landing</a></li>
      <li><a href="/top">Top</a></li>
      <li><a href="/personal">Personal</a></li>
      <li><a href="/cityCouncil">Ajuntament</a></li>
    </ul>
  </div>

  <div class="content">
    <!-- Main content goes here -->
    <slot></slot>
  </div>
</div>
</div>
