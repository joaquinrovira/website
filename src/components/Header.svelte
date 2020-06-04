<script>
  import Searching from "../components/Searching";
  import Nav from "../components/Nav.svelte";

  export let segment;
  let searching = false;
  (async () => {
    try {
      const res = await fetch(`/api/searching.json`);
      console.log(res);
      searching = await res.json();
    } catch (error) {
      searching = false;
    }
  })();
</script>

<Nav {segment} />
{#if searching}
  <Searching />
{/if}
