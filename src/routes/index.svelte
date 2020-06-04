<script>
  import Button from "@smui/button";
  import List, {
    Group,
    Item,
    Graphic,
    Meta,
    Label,
    Separator,
    Subheader,
    Text,
    PrimaryText,
    SecondaryText
  } from "@smui/list";
  import MenuSurface from "@smui/menu-surface";
  import { fly } from "svelte/transition";
  let wave = true;
  function rewave() {
    wave = false;
    window.requestAnimationFrame(() => {
      wave = true;
    });
  }
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
  span.wave {
    animation-name: wave-animation;
    animation-duration: 0.7s;
    animation-iteration-count: 2;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-10deg);
    }
    30% {
      transform: rotate(12deg);
    }
    45% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(9deg);
    }
    75% {
      transform: rotate(0deg);
    }
  }
</style>

<svelte:head>
  <title>Ximo Rovira</title>
</svelte:head>

<h1 class="lighten" in:fly on:mouseover={rewave}>
  Hi! I'm Ximo
  <span class:wave>👋</span>
</h1>
<p>
  <span class="lighten">
    <b>I'm a Computer Science bachelor,</b>
  </span>
  currently pursuing a
  <a
    href="http://www.upv.es/titulaciones/MUIARFID/index-en.html"
    target="_blank">
    Master's Degree in Artificial Intelligence
  </a>
  at the
  <a href="http://www.upv.es/" target="_blank">
    Polythecnic University of Valencia.
  </a>
</p>
<p>
  I enjoy working on a variety of interesting projects as a hobby in order to
  improve my developer skillset on a daily basis. Here's a few things I'm
  experienced with:
</p>

<div flex align-center justify-center style="padding: 1em 0;">
  <div flex-grow />
  <List nonInteractive flex-grow class="mdc-elevation--z14">
    <Item ripple={false}>
      <Graphic class="material-icons" aria-hidden="true">check</Graphic>
      <Text>Node.js</Text>
    </Item>
    <Item ripple={false}>
      <Graphic class="material-icons" aria-hidden="true">check</Graphic>
      <Text>Java</Text>
    </Item>
    <Item ripple={false}>
      <Graphic class="material-icons" aria-hidden="true">check</Graphic>
      <Text>GNU/Linux</Text>
    </Item>
    <Item ripple={false}>
      <Graphic class="material-icons" aria-hidden="true">check</Graphic>
      <Text>And more!</Text>
    </Item>
  </List>
  <div flex-grow>
    <img
      src="/yo.jpeg"
      alt="Ximo Rovira"
      style="border-radius: 999em;border-style: groove;border-color:
      var(--mdc-theme-primary); border-width:5px;" />
  </div>
  <div flex-grow />
</div>
<div flex-grow />
<div flex align-center justify-center style="padding: 5em 0 0 0;">
  <Button variant="unelevated" href="mailto:joaquin.rovira97@gmail.com">
    <code>Get in touch</code>
  </Button>
</div>
