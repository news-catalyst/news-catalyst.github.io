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
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
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
