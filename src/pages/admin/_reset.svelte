<script>
  import { loggedIn } from 'src/auth.js';
  import SignOut from 'src/components/SignOut.svelte';
  
  $: user = $loggedIn;

  $: switch (user) {
    case undefined:
      console.log('[ADMIN] auth : waiting...');
      break;
    case null:
      console.log('[ADMIN] auth : logged out');
      history.pushState({}, false, '/');
      break;
    default:
      console.log('[ADMIN] auth : logged in');
  }
</script>

<style>
  nav {
    padding: 40px;
    margin-bottom: 40px;
    border: solid 2px orange;
  }
</style>

<nav>
  <a href='/admin'>Home</a>
  <a href='/admin/settings'>Settings</a>
  <SignOut/>
</nav>

{#if user}
  {user.email}
  <slot></slot>
{/if}
