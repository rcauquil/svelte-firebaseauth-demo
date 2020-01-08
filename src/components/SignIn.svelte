<script>
  import { signIn } from '../auth';
</script>

<div class='flex-column'>
  <button on:click='{signIn}'>
    Sign In
  </button>
</div>
