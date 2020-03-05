<script>
  import { signIn } from 'src/services/auth.js';
</script>

<div class='flex-column'>
  <button on:click='{signIn}'>
    Sign In
  </button>
</div>
