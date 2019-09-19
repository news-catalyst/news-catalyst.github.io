<template>
  <Layout>
    <div class="job">
      <h1>{{ $page.job.pageTitle }}</h1>
      <div v-html="$page.job.content" />
    </div>
  </Layout>
</template>

<page-query>
query Job ($path: String!) {
  job: job (path: $path) {
    pageTitle
    content
    slug
    jobTitle
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue';

function constructDesc(title) {
  return `News Catalyst is hiring a ${title}.`;
}

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.job.pageTitle,
      meta: [
        {
          name: "description",
          content: constructDesc(this.$page.job.jobTitle),
        },
        {
          name: "og:title",
          content: this.$page.job.pageTitle,
        },
        {
          name: "og:description",
          content: constructDesc(this.$page.job.jobTitle),
        },
        {
          name: "og:url",
          content: `https://newscatalyst.org/jobs/${this.$page.job.slug}`,
        },
        {
          name: "twitter:title",
          content: this.$page.job.pageTitle,
        },
        {
          name: "twitter.description",
          content: constructDesc(this.$page.job.jobTitle),
        },
      ],
    };
  },
}
</script>

<style lang="scss">
  .job {
    max-width: 45rem;
    padding: 1.5rem;
    margin: auto;
    color: #111;
    font-size: 1.1rem;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.65;
    }
  }
</style>
