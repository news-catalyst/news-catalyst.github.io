<template>
  <div id="app">
    <header class="header">
      <div class="left">
        <g-link to="/">
          <g-image class="logo" src="~/assets/logo.svg" />
          <g-image class="wordmark" src="~/assets/wordmark.svg" />
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
      width: auto;
      vertical-align: middle;

      &.logo {
        height: 40px;
      }
      &.wordmark {
        height: 35px;
      }

      @media screen and (min-width: 768px) {
        &.logo {
          height: 110px;
        }
        &.wordmark {
          height: 80px;
        }
      }
    }
  }
</style>
