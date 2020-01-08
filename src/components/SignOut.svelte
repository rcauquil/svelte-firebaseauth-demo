<script>
  import { signOut } from '../auth';
</script>

<div class='flex-column'>
  <button on:click='{signOut}'>
    Sign Out
  </button>
</div>
