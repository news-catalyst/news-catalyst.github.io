<template>
  <Layout>
    <article>
      <div class="intro">
        <div class="block">
          <p class="lede">News Catalyst provides tools, fosters collaboration, and promotes experimentation in service of building digitally sustainable news organizations.</p>

          <p>We will announce more about the project in the coming weeks. Right now, we're hiring for two more full-time members of our team. See the job openings below.</p>

          <h2>Job openings</h2>
          <div id="jobs" v-for="edge in $page.jobs.edges" :key="edge.node.id">
            <ul>
              <li><a :href="`/jobs/${edge.node.slug}`">{{ edge.node.jobTitle }}</a></li>
            </ul>
          </div>
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
export default {
  metaInfo: {
    title: 'News Catalyst'
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
