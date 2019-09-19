<template>
  <Layout>
    <article>
      <div class="intro">
        <div class="block">
          <p class="lede">News Catalyst helps news organizations transform themselves into sustainable digital businesses.</p>
          <p>We will accomplish this by providing tools, fostering collaboration, and promoting experimentation within the news industry.</p>
          <p>Our focus will be areas in which news organizations have traditionally underinvested, like product development, data, analytics, digital storytelling, mobile and engagement. Where there are gaps in capability, News Catalyst will fill them by providing tools, technology, training, hands-on support and expertise.</p>
          <p>Read more about our team <a href="/about">here</a>.</p>
        </div>
      </div>
      <div class="reverse">
        <div class="block">
          <h2 class="lede">What we do</h2>
          <div class="sections">
            <div class="section">
              <h3>Tools and technology</h3>
              <div class="icon">
                <g-image src="~/assets/undraw_developer_activity_bv83.svg" alt="Developer" />
              </div>
              <p>We put the right tools and technology in the hands of the news organizations that need them. By assessing the current market of digital tools, we identify the best tools available, support those tools, and provide easy, streamlined access to them for news organizations.</p>
            </div>
            <div class="section">
              <h3>Hands-on collaboration</h3>
              <div class="icon">
                <g-image src="~/assets/undraw_scrum_board_cesn.svg" alt="Scrum board" />
              </div>
              <p>We conduct product-oriented collaborations with news organizations that aim to drive new revenue. Our collaborations connect and empower product teams across the industry, injecting new product thinking into organizations trying to change their digital approach and achieve sustainability.</p>
            </div>
            <div class="section">
              <h3>Learning and expertise</h3>
              <div class="icon">
                <g-image src="~/assets/undraw_pair_programming_njlp.svg" alt="Pair programming" />
              </div>
              <p>We develop training resources targeted at helping news leaders develop the knowledge and skills they need to be effective agents of digital transformation. We focus especially on developing product management skills that are rapidly becoming critical for innovation.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="action">
        <div class="block">
          <h2 class="lede">We need your help</h2>
          <h3>Apply for our open positions</h3>
          <p>We&rsquo;re hiring! Take a look at our open positions:</p>
          <div id="jobs" v-for="edge in $page.jobs.edges" :key="edge.node.id">
            <ul>
              <li><a :href="`/jobs/${edge.node.slug}`">{{ edge.node.jobTitle }}</a></li>
            </ul>
          </div>

          <h3><a href="https://newscatalyst.org/news-tools-census">Take our Tools Census</a></h3>
          <p>We want to know what tools news organizations are using every day and whether or not they are effective. If you work at a news organization, please <a href="https://newscatalyst.org/news-tools-census">take our tools census</a> and help us learn about the state of the industry.</p>

          <h3>Get in touch</h3>
          <p>We're on Twitter! Follow us at <a href="https://twitter.com/newscatalyst">@newscatalyst</a>.</p>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Jobs {
  jobs: allJob {
    edges {
      node {
        pageTitle
        jobTitle
        slug
      }
    }
  }
}
</page-query>

<script>
const desc ="News Catalyst helps news organizations transform themselves into sustainable digital businesses.";

export default {
  metaInfo: {
    title: 'News Catalyst',
    titleTemplate: '%s',
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
        content: "https://newscatalyst.org",
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
  p, ul, ol, h1, h2, h3, h4, h5, h6 {
    color: #111;
  }

  .lede {
    font-size: 1.33rem;
    @media screen and (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h2.lede {
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p, ul, ol {
    font-size: 1.1rem;
    line-height: 1.65;

    a {
      color: #002C54;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  h3 {
    font-size: 1.25rem;

    a {
      color: #002C54;
      text-decoration: none;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .block {
    max-width: 45rem;
    padding: 3rem 2rem;
    margin: auto;
  }

  .intro .block {
    padding-top: 1rem;
  }

  .sections {
    width: 100vw;
    max-width: 1440px;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 1.5rem 0;

    @media screen and (min-width: 1200px) {
      display: flex;
    }

    .section {
      max-width: 45rem;
      margin: 60px auto;
      width: 100%;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      p {
        padding: 0 20px;
      }

      @media screen and (min-width: 1200px){
        width: 33%;
        padding: 0 20px;
        margin: 0 auto;

        p {
          padding: 0;
        }
      }

      .icon {
        text-align: center;
        img {
          width: 90%;
          min-height: 350px;
          padding: 10px;
        }
      }
    }

    h3 {
      margin: 0;
      text-align: center;
    }
  }

  .reverse {
    background-color: #f5f5f5;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);

    h2 {
      text-align: center;
    }
  }
</style>
