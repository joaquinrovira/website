<script>
  import IconButton from "@smui/icon-button";
  let display = true;
</script>

{#if display}
  <div flex justify-center align-center class="bannerlinkblock">
    <a flex-grow href="mailto:joaquin.rovira97@gmail.com">
      <p>
        I’m on the lookout for my next full-time role, either remote or based in
        Valencia 🚀
      </p>
    </a>
    <IconButton on:click={() => (display = false)} class="material-icons">
      close
    </IconButton>
  </div>
{/if}
