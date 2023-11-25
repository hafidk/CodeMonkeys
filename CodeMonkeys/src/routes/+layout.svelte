
<!-- Layout.svelte -->

<script>
    /**
    * @type {string}
    */
    export let title; // Title for the header
    import '../theme.css';
  </script>
  
  <style>
    /* Add your styles for the layout, sidebar, header, and content here */
    .layout {
      display: flex;
      height: 95vh;
    }
  
    .sidebar {
      width: 200px;
      padding: 20px;
    }
  
  
    .content {
      flex: 3;
      padding: 20px;
    }
  </style>
  
  <div class="layout">
    <div class="sidebar">
      <!-- Sidebar content and navigation links go here -->
      <ul>
        <li><a href="/">Landing</a></li>
        <li><a href="/top">Top</a></li>
        <li><a href="/personal">Personal</a></li>
        <li><a href="/cityCouncil">City Council</a></li>
      </ul>
    </div>
  
  
    <div class="content">
      <!-- Main content goes here -->
      <slot></slot>
    </div>
  </div>
