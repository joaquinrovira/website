<script>
  import Footer from "../components/Footer";
  import Header from "../components/Header";
  import theme_utils from "@lib/theme-utils";

  export let segment;
  let dark_mode = true;
  $: theme = dark_mode ? "dark" : "light";
</script>

<style>
  main {
    position: relative;
    padding: 2em;
    box-sizing: border-box;
  }
</style>

<div flex-column class={`${theme}-theme sapper-container`}>
  <Header {segment} />
  <main flex-column flex-grow>
    <slot />
  </main>

  <!--Footer-->
  <Footer bind:dark_mode />
</div>
