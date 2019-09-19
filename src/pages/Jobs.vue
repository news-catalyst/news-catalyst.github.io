<template>
    <Layout :pushFooter="true">
        <article>
            <h2>Current opportunities</h2>
            <p>Interested in working for News Catalyst? See our open positions below.</p>

            <div id="jobs" v-for="edge in $page.jobs.edges" :key="edge.node.id">
                <ul>
                    <li><a :href="`/jobs/${edge.node.slug}`">{{ edge.node.jobTitle }}</a></li>
                </ul>
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
const desc = "News Catalyst helps news organizations transform themselves into sustainable digital businesses. See our job openings.";

export default {
  metaInfo: {
    title: 'Jobs',
    meta: [
      {
        name: "description",
        content: desc,
      },
      {
        name: "og:title",
        content: "Jobs at News Catalyst",
      },
      {
        name: "og:description",
        content: desc,
      },
      {
        name: "og:url",
        content: "https://newscatalyst.org/jobs",
      },
      {
        name: "twitter:title",
        content: "Jobs at News Catalyst",
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
</style>
