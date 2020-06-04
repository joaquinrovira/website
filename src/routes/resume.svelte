<script>
  import Button from "@smui/button";
  import data from "@lib/resume-data";
  let age = data.age;
</script>

<style>

</style>

<div id="profile">
  <h2>Profile</h2>
  <p>i'm an ambicious developer</p>

  <hr />
  <h3>About me</h3>
  <p>
    I am an allround web developer. I am a senior programmer with good knowledge
    of front-end techniques. I love structure and order and I also stand for
    quality. I love spending time on fixing little details and optimizing web
    apps. Also I like working in a team, you'll learn faster and much more. As
    the saying goes: 'two heads are better than one'.
  </p>
  <img src="/yo.jpeg" alt="yo" />
  <h3>Details</h3>
  <p>
    <strong>Name:</strong>
    <br />
    Ximo Rovira
    <br />
    <strong>Age:</strong>
    <br />
    {age} years
    <br />
    <strong>Location:</strong>
    <br />
    Valencia, Spain
  </p>
</div>
<div id="experiences">
  <h2>Experiences</h2>
  {#each Object.keys(data.experiences) as key}
    <hr />
    <h3>{key.toUpperCase()}</h3>
    {#each data.experiences[key] as e}
      <div>
        <h4>{e.name}</h4>
        <p>{e.t0} - {e.t1}</p>
        <p>
          <strong>{e.description}</strong>
        </p>
        <p>{e.location}</p>
      </div>
    {/each}
  {/each}
</div>
<div id="abilities">
  <h2>Abilities</h2>
  {#each Object.keys(data.abilities) as key}
    <hr />
    <h3>{key.toUpperCase()}</h3>
    {#each Object.keys(data.abilities[key]) as e}
      <div>{e}</div>
      <div>{data.abilities[key][e]}</div>
    {/each}
  {/each}
</div>
<div id="projects">
  <h2>Projects</h2>
  {#each data.projects as p}
    <p>{p.title}</p>
    <p>{p.description}</p>
    <p>{p.img}</p>
  {/each}
</div>
<div flex-grow />
<div flex align-center justify-center style="padding: 5em 0 0 0;">
  <Button variant="unelevated" href="mailto:joaquin.rovira97@gmail.com">
    <code>Get in touch</code>
  </Button>
</div>
