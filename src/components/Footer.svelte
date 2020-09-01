<script>
  import IconButton from "@smui/icon-button";
  import { fade } from "svelte/transition";

  export let dark_mode;
  let visible = true;
  let clickable = true;
  const anim_duration = 400;
</script>

<style>
  .footer {
    padding: 0 1em 0 1em;
  }
  .p2 {
    font-size: 0.7em;
  }

  .p2.link.cookie {
    text-decoration: none;
  }

  .socials {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--socials-background);
    color: var(--socials-color);
    border-radius: 1em;
    padding: 5px 1em;
    margin: 5px 1em;
  }

  .socials > a > img {
    width: 1em;
    height: 1em;
  }

  hr {
    border: none;
    height: 1px;
    color: #333; /* old IE */
    background-color: #333; /* Modern Browsers */
  }
</style>

<div class="footer">
  <hr />
  <div flex align-center>
    <p class="p2">
      © 2020 Ximo Rovira. No cookies here <a href="https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies" target="_blank" class="p2
          link cookie"> 🍪 </a>
    </p>
    <div flex-grow />
    <div class="socials">
      <a flex target="_blank" href="https://github.com/joaquinrovira/">
        <img src="socials/gh.svg" alt="GitHub" />
      </a>
      <a flex target="_blank" href="https://linkedin.com/in/joaquinrovira/">
        <img src="socials/in.svg" alt="LinkedIn" />
      </a>
      <a flex target="_blank" href="https://facebook.com/joaquin.rovirasacie/">
        <img src="socials/fb.svg" alt="FaceBook" />
      </a>
      <a flex target="_blank" href="https://instagram.com/ximo_rovira97/">
        <img src="socials/gm.svg" alt="instagram" />
      </a>
    </div>
  </div>
  <div flex align-center>
    <p class="p2">
      Powered by <a href="https://svelte.dev" target="_blank">Svelte</a> , <a
        href="https://sapper.svelte.dev"
        target="_blank">Sapper</a> &amp; <a
        href="https://sveltematerialui.com/"
        target="_blank">
        Svelte Material UI
      </a> . Hosted by <a
        href="https://github.com/joaquinrovira/"
        target="_blank">Me</a> .
    </p>
    <div flex-grow />
    <div
      class="socials"
      style="cursor:pointer;font-size:2em;user-select: none;"
      on:click={() => {
        if (!clickable) return;
        visible = false;
        clickable = false;
        setTimeout(() => {
          dark_mode = !dark_mode;
          visible = true;
          setTimeout(() => (clickable = true), anim_duration);
        }, anim_duration);
      }}>
      <span>
        {#if visible}
          <div
            transition:fade={{ duration: anim_duration }}
            class="material-icons">
            {dark_mode ? 'brightness_2' : 'brightness_5'}
          </div>
        {/if}
      </span>
    </div>
  </div>
</div>
