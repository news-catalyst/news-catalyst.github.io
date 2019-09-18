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
export default {
  metaInfo: {
    title: 'Jobs'
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
