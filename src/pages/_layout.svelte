<script>
  import { loggedIn } from 'src/auth.js';
  import SignIn from 'src/components/SignIn.svelte';

  $: if ($loggedIn) {
    console.log('[HOME] auth : logged in');
    history.pushState({}, false, '/admin');
  }
</script>

<style>
  nav {
    padding: 40px;
    margin-bottom: 40px;
    border: solid 2px green;
  }
</style>

<nav>
  <a href='/'>Home</a>
  <a href='/signUp'>Sign Up</a>
  <SignIn/>
</nav>

<main>
  <slot></slot>
</main>
