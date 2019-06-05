<template>
  <Layout>
    <article>
      <div class="intro">
        <div class="block">
          <p class="lede">News Catalyst provides tools, fosters collaboration, and promotes experimentation in service of building digitally sustainable news organizations.</p>

          <p>At News Catalyst, we believe the only way forward is together. To that end, we’re working to connect news organizations who face common technological struggles and work with them to solve problems collectively.</p>

          <p>First, who are we? We’re News Catalyst, a new project based out of Temple University’s Klein College of Media and Communication and part of the Knight-Lenfest Local News Transformation Fund.</p>

          <p>Right now, there’s just two of us: Aron Pilhofer, our director and the James B. Steele Chair in Journalism Innovation at Temple University; and Tyler Fisher, our deputy director and formerly of POLITICO and NPR. We both have experience in pairing technical innovation with tangible impact on the business of news. More importantly, <a href="#jobs">we’re hiring!</a></p>
        </div>
      </div>
      <div class="reverse">
        <div class="block">
          <h2 class="lede">What we do</h2>
          <div class="sections">
            <div class="section">
              <h3>Tools and technology</h3>
              <div class="icon">
                <font-awesome :icon="['fas', 'tools']"/>
              </div>
              <p>Through PressPass, a single sign-on platform connecting journalists with vetted and powerful tools, we will provide the toolkit for digital transformation. Look for more about PressPass in the winter. Help us inform the tools we include by taking our <a href="https://newscatalyst.org/news-tools-census">Tools Census</a>.</p>
            </div>
            <div class="section">
              <h3>Hands-on collaboration</h3>
              <div class="icon">
                <font-awesome :icon="['fas', 'hands-helping']"/>
              </div>
              <p>As a part of the <a href="https://www.lenfestinstitute.org/news-posts/lenfest-institute-knight-foundation-establish-20-million-fund-support-strong-future-local-journalism/">Knight-Lenfest Local News Transformation Fund</a>, we work directly with news organizations participating in the <a href="https://betternews.org/what-are-table-stakes/">Knight-Lenfest Newsroom Initiative</a>. As these news organizations begin their digital transformation, we will work with them to provide the resources they need to succeed.</p>
            </div>
            <div class="section">
              <h3>Learning and expertise</h3>
              <div class="icon">
                <font-awesome :icon="['fas', 'microscope']"/>
              </div>
              <p>We will develop training resources targeted at helping news leaders develop the knowledge and skills they need to be effective agents of digital transformation.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="action">
        <div class="block">
          <h2 class="lede">For us to get started, we need your help.</h2>
          <p><strong>Apply for our open positions</strong></p>
          <p>We&rsquo;re hiring! Take a look at our open positions:</p>
          <div id="jobs" v-for="edge in $page.jobs.edges" :key="edge.node.id">
            <ul>
              <li><a :href="`/jobs/${edge.node.slug}`">{{ edge.node.jobTitle }}</a></li>
            </ul>
          </div>

          <p><a href="https://newscatalyst.org/news-tools-census"><strong>Take our Tools Census</strong></a></p>
          <p>To start building the tool suite that we will offer through PressPass, we&rsquo;re starting with some research. You can help with that research by taking our <a href="https://newscatalyst.org/news-tools-census">Tools Census</a>. We want to know about the tools you use day-to-day in your job as a journalist.</p>

          <p><strong>Get in touch</strong></p>
          <p>Have something to pitch us? Want to tell us how we got it all wrong? Email us at hi@newscatalyst.org.</p>
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
</script>

<style lang="scss" scoped>
  @import '../styles/angled-edges.scss';

  p, ul, ol, h1, h2, h3, h4, h5, h6 {
    color: #111;
  }

.lede {
  font-size: 1.33rem;
  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
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
        color: #e3f0f4;
        font-size: 40px;

        @media screen and (min-width: 768px) {
          font-size: 80px;
        }
      }
    }

    h3 {
      margin-top: 0;
      text-align: center;
    }
  }

  .reverse {
    background-color: #002C54;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);

    p, h2, h3, ul, ol {
      color: #fff;
    }

    h2 {
      text-align: center;
    }

    a {
      color: #F1C235;
    }
  }
</style>
