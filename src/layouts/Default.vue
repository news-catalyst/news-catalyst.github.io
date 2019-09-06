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
    <!-- <footer>
      <div class="wrapper">
        <h5>News Catalyst is funded by:</h5>
        <div class="funders">
          <a href="https://knightfoundation.org"><g-image class="knight" src="~/assets/knight.png" alt="Knight Foundation" /></a>
          <a href="https://lenfestinstitute.org"><g-image class="lenfest" src="~/assets/lenfest.png" alt="The Lenfest Institute for Journalism"/></a>
          <a href="https://facebookjournalismproject.com"><g-image class="facebook" src="~/assets/facebook.png" alt="Facebook" /></a>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script>
</script>

<style lang="scss">
  body {
    font-family: 'Work Sans', sans-serif;
    background: linear-gradient(22.5deg, rgba(2, 2, 2, 0.02) 0%, rgba(2, 2, 2, 0.02) 9%,rgba(252, 252, 252, 0.02) 9%, rgba(252, 252, 252, 0.02) 36%,rgba(237, 237, 237, 0.02) 36%, rgba(237, 237, 237, 0.02) 69%,rgba(78, 78, 78, 0.02) 69%, rgba(78, 78, 78, 0.02) 77%,rgba(85, 85, 85, 0.02) 77%, rgba(85, 85, 85, 0.02) 95%,rgba(43, 43, 43, 0.02) 95%, rgba(43, 43, 43, 0.02) 100%),linear-gradient(90deg, rgba(63, 63, 63, 0.02) 0%, rgba(63, 63, 63, 0.02) 8%,rgba(151, 151, 151, 0.02) 8%, rgba(151, 151, 151, 0.02) 53%,rgba(17, 17, 17, 0.02) 53%, rgba(17, 17, 17, 0.02) 56%,rgba(215, 215, 215, 0.02) 56%, rgba(215, 215, 215, 0.02) 65%,rgba(202, 202, 202, 0.02) 65%, rgba(202, 202, 202, 0.02) 79%,rgba(208, 208, 208, 0.02) 79%, rgba(208, 208, 208, 0.02) 100%),linear-gradient(67.5deg, rgba(129, 129, 129, 0.02) 0%, rgba(129, 129, 129, 0.02) 13%,rgba(71, 71, 71, 0.02) 13%, rgba(71, 71, 71, 0.02) 16%,rgba(51, 51, 51, 0.02) 16%, rgba(51, 51, 51, 0.02) 18%,rgba(86, 86, 86, 0.02) 18%, rgba(86, 86, 86, 0.02) 90%,rgba(227, 227, 227, 0.02) 90%, rgba(227, 227, 227, 0.02) 91%,rgba(30, 30, 30, 0.02) 91%, rgba(30, 30, 30, 0.02) 100%),linear-gradient(90deg, #FFF,#FFF);
  }

  header {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: auto;
      vertical-align: middle;
      height: 40px;

      &.logo {
        margin-right: 8px;
      }

      @media screen and (min-width: 768px) {
        height: 80px;

        &.logo {
          margin-right: 16px;
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

          &.knight {
            margin-left: 0;
          }
          &.facebook {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
