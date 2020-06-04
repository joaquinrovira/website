<script>
  import TopAppBar, { Row, Section } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Drawer from "./Drawer.svelte";

  let drawer = false;
  export let segment;
</script>

<style>

</style>

<Drawer {segment} bind:drawer />
<nav>
  <TopAppBar collapsed={true}>
    <Row>
      <Section>
        <IconButton class="material-icons" on:click={() => (drawer = !drawer)}>
          menu
        </IconButton>
      </Section>
    </Row>
  </TopAppBar>
</nav>
