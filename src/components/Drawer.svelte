<script>
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim,
  } from "@smui/drawer";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import H6 from "@smui/common/H6.svelte";

  let drawer_this;

  export let drawer;
  export let segment;
  function setActive(value) {
    active = value;
    drawer = false;
  }
</script>

<Drawer
  color="secondary"
  variant="modal"
  bind:this={drawer_this}
  bind:open={drawer}>
  <Header>
    <Title><span class="code">Ximo Rovira</span></Title>
  </Header>
  <Content>
    <List>
      <Item
        on:click={() => (drawer = !drawer)}
        href="/"
        activated={segment === undefined}>
        <Graphic class="material-icons" aria-hidden="true">home</Graphic>
        <Text>Home</Text>
      </Item>
      <!-- <Item
        on:click={() => (drawer = !drawer)}
        href="/resume"
        activated={segment === 'resume'}>
        <Graphic class="material-icons" aria-hidden="true">description</Graphic>
        <Text>Resumé</Text>
      </Item> -->
      <!--<Item
        on:click={() => (drawer = !drawer)}
        href="blog"
        rel="prefetch"
        activated={segment === 'blog'}>
        <Graphic class="material-icons" aria-hidden="true">
          library_books
        </Graphic>
        <Text>Blog</Text>
      </Item>-->
      <Separator nav />
      <Subheader component={H6}>Projects</Subheader>
      <Item
        on:click={() => (drawer = !drawer)}
        href="https://github.com/joaquinrovira/cgol-p"
        target="__blank">
        <Graphic class="material-icons" aria-hidden="true">
          drag_indicator
        </Graphic>
        <Text>CGOL-P</Text>
      </Item>
      <Item
        on:click={() => (drawer = !drawer)}
        href="https://joaquinrovira.github.io/infiltra2/#/"
        target="__blank">
        <Graphic class="material-icons" aria-hidden="true">
          supervised_user_circle
        </Graphic>
        <Text>Infiltrado</Text>
      </Item>
    </List>
  </Content>
</Drawer>

<Scrim />
