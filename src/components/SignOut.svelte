<script>
  import { signOut } from 'src/services/auth.js';
</script>

<div class='flex-column'>
  <button on:click='{signOut}'>
    Sign Out
  </button>
</div>
