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
    <footer>
      <div class="wrapper">
        <h5>News Catalyst is funded by:</h5>
        <div class="funders">
          <a href="https://knightfoundation.org"><g-image class="funder" src="~/assets/knight.png" alt="Knight Foundation" /></a>
          <a href="https://lenfestinstitute.org"><g-image class="funder" src="~/assets/lenfest.png" alt="The Lenfest Institute for Journalism"/></a>
          <a href="https://facebookjournalismproject.com"><g-image class="funder" src="~/assets/facebook.png" alt="Facebook" /></a>
        </div>
      </div>
    </footer>
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

  footer {
    border-top: 1px solid #999;
    background-color: #eee;
    padding: 1rem 2rem 2.5rem;

    .wrapper {
      max-width: 45rem;
      margin: 0 auto;
    }

    h5 {
      font-size: 18px;
      text-align: center;

      @media screen and (min-width: 768px) {
        text-align: left;
      }
    }

    .funders {
      img {
        display: block;
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 50px auto;

        @media screen and (min-width: 768px) {
          display: inline-block;
          width: 30%;
          max-width: 100%;
          height: auto;
          margin: 0 1.5%;
          vertical-align: middle;

          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
