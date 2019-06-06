<template>
  <Layout>
    <article>
      <h2>Our mission</h2>
      <p>News Catalyst provides tools, fosters collaboration, and promotes experimentation in service of building digitally sustainable news organizations.</p>

      <h2>Our staff</h2>
      <div class="staffer">
        <h5>Aron Pilhofer, Director</h5>
        <g-image class="headshot" src="~/assets/aron.jpeg" />
        <p>Aron Pilhofer is the James B. Steele Chair in Journalism Innovation at Temple University. In addition to teaching, his work is focused on new business models, digital transformation and innovation in news. Before joining Temple, Pilhofer was executive editor, digital, and interim chief digital officer at the Guardian in London. There, he led the Guardian's product and technology teams as well as heading visual journalism - including pictures, graphics, interactive and data journalism. Before coming to the Guardian, Aron was associate managing editor for digital strategy and editor of interactive news at The New York Times. Outside the newsroom, Aron co-founded two news-related startups: DocumentCloud and Hacks/Hackers.</p>
      </div>
      <div class="staffer">
        <h5>Tyler Fisher, Deputy Director</h5>
        <g-image class="headshot" src="~/assets/tyler.jpg" />
        <p>Tyler is a journalist and developer based in Washington, D.C. As Deputy Director, Tyler is responsible for the tools and technology News Catalyst provides to its audience. Before joining News Catalyst, Tyler was a Senior News Apps Developer on POLITICO's Interactive News Team. There, he led development of POLITICO's 2018 election results coverage and built vital team infrastructure for rapidly publishing data-driven, bespoke web presentations. Before POLITICO, Tyler worked as a News Apps Developer on the NPR Visuals Team.</p>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>
article {
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: auto;
  font-size: 1.1rem;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.65;
  }
}

.headshot {
  width: 150px;
  height: auto;
  float: left;
  border: 1px solid grey;
  margin: 0 15px 10px 0;
  border-radius: 75px;
}
</style>

