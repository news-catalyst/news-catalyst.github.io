<template>
  <Layout>
    <article>
      <h2>Our mission</h2>
      <p>News Catalyst helps news organizations transform themselves into sustainable digital businesses.</p>

      <h2>Our team</h2>
      <p>News Catalyst is based at Temple University’s <a href="https://klein.temple.edu">Klein College of Media and Communication</a>.</p>
      <div class="staffer">
        <h5>Aron Pilhofer, Director</h5>
        <g-image class="headshot" src="~/assets/aron.jpeg" />
        <p>Aron Pilhofer is the James B. Steele Chair in Journalism Innovation at Temple University. In addition to teaching, his work is focused on new business models, digital transformation and innovation in news. Before joining Temple, Pilhofer was executive editor, digital, and interim chief digital officer at the Guardian in London. There, he led the Guardian's product and technology teams as well as heading visual journalism - including pictures, graphics, interactive and data journalism. Before coming to the Guardian, Aron was associate managing editor for digital strategy and editor of interactive news at The New York Times. Outside the newsroom, Aron co-founded two news-related startups: DocumentCloud and Hacks/Hackers.</p>
      </div>
      <div class="staffer">
        <h5>Heather Bryant, Deputy Director, Product</h5>
        <g-image class="headshot" src="~/assets/heather.jpg" />
        <p>Heather Bryant is the founder and director of Project Facet, an open source infrastructure project that supports newsroom collaboration with tools to manage the logistics of creating, editing and distributing content, managing projects, facilitating relationships and sharing the best practices of collaborative journalism. As a 2016-2017 John S. Knight Journalism Fellow at Stanford, she researched how to make collaboration easier and more effective for newsrooms. She published the Collaborative Journalism Workbook and works with the Center for Cooperative Media to build resources for collaboration. Bryant researches and writes about the intersection of class, poverty, technology and journalism ethics.</p>
      </div>
      <div class="staffer">
        <h5>Tyler Fisher, Deputy Director, Technology</h5>
        <g-image class="headshot" src="~/assets/tyler.jpg" />
        <p>Tyler is a journalist and developer based in Washington, D.C. As Deputy Director, Tyler is responsible for the tools and technology News Catalyst provides to its audience. Before joining News Catalyst, Tyler was a Senior News Apps Developer on POLITICO's Interactive News Team. There, he led development of POLITICO's 2018 election results coverage and built vital team infrastructure for rapidly publishing data-driven, bespoke web presentations. Before POLITICO, Tyler worked as a News Apps Developer on the NPR Visuals Team.</p>
      </div>
      <div class="staffer">
        <h5>Jacqui Lough, Developer</h5>
        <g-image class="headshot" src="~/assets/jacqui.jpeg" />
        <p>Jacqui Lough has over twenty years experience using technology to further causes across multiple industries. Working in the Silicon Valley, she developed early social media platforms including Friendster. She also contributed to public health working on solutions for anti-retroviral treatment in sub-Saharan Africa using innovative tech. Most of her work has been in media, though, including interactive news and data journalism at The New York Times and the BBC. Most recently she was the head of interactive news for Condé Nast focused on a dozen international Vogue markets. Jacqui lives in Australia with her husband and dog and is thrilled to be developing News Catalyst.</p>
      </div>
      <div class="staffer">
        <h5>Jessica Morrison, Product Lead</h5>
        <g-image class="headshot" src="~/assets/jessica.jpg" />
        <p>Jessica Morrison is a senior product manager at Chemical & Engineering News and product lead for News Catalyst. She started a product team at C&EN in 2018 with support from newsroom leadership and has since led the team through several new product launches and many, many two-week sprints. Before moving into product, Jessica was a policy reporter at C&EN, an editorial fellow at Nature, a health reporting fellow at the Charlotte Observer, and a science reporting fellow at the Chicago Tribune. Jessica earned a Ph.D. from the University of Notre Dame, where she studied uranium geochemistry.</p>
      </div>
      <div class="staffer">
        <h5>Madison Karas, Editorial Fellow</h5>
        <g-image class="headshot" src="~/assets/madison.jpg" />
        <p>Madison is a journalism and economics student at Temple University’s Klein College of Media and Communication and College of Liberal Arts. She is the Editor-in-Chief at The Temple News, Temple’s student newspaper, and Fourteenth Street, Temple’s student-produced magazine. Madison is a freelance journalist in Philadelphia and a 2020 RTDNA/RIAS German-American Student Journalist Exchange fellow. She is enthusiastic to help strengthen newsrooms as an Editorial Fellow at News Catalyst.</p>
      </div>
      <div class="staffer">
        <h5>Moumita Paladhi, Marketing Fellow</h5>
        <g-image class="headshot" src="~/assets/moumita.jpg" />
        <p>Moumita is a masters student at Temple Univerity's Fox School of Business studying Marketing Research & Insights. She joins us as a Marketing Fellow and comes with more than eight years of digital marketing experience. Her expertise is in digital strategy, communications, marketing automation, analytics, & campaign management and execution.</p>
      </div>
      <div class="staffer">
        <h5>Amelia Winger, Editorial Fellow</h5>
        <g-image class="headshot" src="~/assets/amelia.jpg" />
        <p>Amelia is a journalism and political science student at Temple University’s Klein College of Media and Communication and College of Liberal Arts. She is the news director for WHIP Radio, Temple’s student radio station, and the assistant news editor for The Temple News, Temple’s student newspaper. Amelia was formerly the editor in chief of the Global Philadelphia Association’s Emerging International Journalism Program. She is looking forward to supporting newsrooms’ collaborative and editorial processes as an editorial fellow at News Catalyst.</p>
      </div>

    </article>
  </Layout>
</template>

<script>
const desc = "News Catalyst helps news organizations transform themselves into sustainable digital businesses.";

export default {
  metaInfo: {
    title: 'About',
    meta: [
      {
        name: "description",
        content: desc,
      },
      {
        name: "og:title",
        content: "News Catalyst",
      },
      {
        name: "og:description",
        content: desc,
      },
      {
        name: "og:url",
        content: "https://newscatalyst.org/about",
      },
      {
        name: "twitter:title",
        content: "News Catalyst",
      },
      {
        name: "twitter:description",
        content: desc,
      },
    ],
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
  border: 1px solid black;
  margin: 0 15px 10px 0;
  border-radius: 10px;
}
</style>

