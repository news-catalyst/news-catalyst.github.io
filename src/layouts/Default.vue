<template>
  <div id="app">
    <header class="header">
      <div class="left">
        <g-link to="/">
          <g-image src="~/assets/logo.svg" />
          <g-image src="~/assets/wordmark.svg" />
        </g-link>
      </div>
      <div class="right" v-if="showLinks">
        <g-link to="/about">Who we are</g-link>&nbsp;
        <g-link to="/projects">What we do</g-link>&nbsp;
        <g-link to="/jobs">Jobs</g-link>
      </div>
    </header>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['showLinks']
  }
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
  body {
    font-family: 'Work Sans', sans-serif;
    background-color: #fff;
  }

  header {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 45px;
      width: auto;

      @media screen and (min-width: 768px) {
        height: 110px;
      }
    }
  }
</style>
