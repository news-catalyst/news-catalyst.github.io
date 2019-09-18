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
    <footer v-bind:class="{ push: pushFooter }">
      <div class="wrapper">
        <h5>News Catalyst is funded by:</h5>
        <div class="funders">
          <a href="https://knightfoundation.org"><g-image class="knight" src="~/assets/knight.png" alt="Knight Foundation" /></a>
          <a href="https://lenfestinstitute.org"><g-image class="lenfest" src="~/assets/lenfest.png" alt="Lenfest Institute for Journalism"/></a>
          <a href="https://facebookjournalismproject.com"><g-image class="facebook" src="~/assets/fb.svg" alt="Facebook Journalism Project" /></a>
        </div>
      </div>
      <div class="project-home">
        <div class="wrapper">
          <div class="lockup">
            <div class="left">
              <a href="https://klein.temple.edu"><g-image class="temple" src="~/assets/klein.png" alt="Klein College of Media and Communication at Temple University" /></a>
            </div>
            <div class="spacer">

            </div>
            <div class="right">
              <address>
                1515 Market Street<br/>
                Suite 215<br/>
                Philadelphia, PA 19102<br/>
              </address>
            </div>
          </div>
        </div>
        <p>©2019 News Catalyst. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['pushFooter']
}
</script>

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
    padding: 1rem 0 0;

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
      margin-bottom: 2.5rem;
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


          &.lenfest {
            width: 22%;
          }
          &.knight {
            width: 22%;
            margin-left: 0;
          }
          &.facebook {
            width: 50%;
            margin-right: 0;
          }
        }
      }
    }

    .project-home {
      background-color: #0E1014;
      border-top: 1px solid #999;
      padding: 3rem 0 2.5rem;

      .lockup {
        @media screen and (min-width: 768px) {
          display: flex;
          > div {
            width: 45%;
            display: flex;
            justify-content: flex-start;
          }
          > div.spacer {
            width: 10%;
            background: linear-gradient(to right,
	                              transparent 0%,
	                              transparent calc(50% - 0.81px),
	                              white calc(50% - 0.8px),
	                              white calc(50% + 0.8px),
	                              transparent calc(50% + 0.81px),
	                              transparent 100%);
          }
          .left {
            justify-content: flex-end;
          }
        }
      }

      h5 {
        color: white;
        margin-top: 0;
      }
      .temple {
        max-width: 172px;
        height: auto;
        display: block;
        margin: 0 auto;
        @media screen and (min-width: 768px) {
          max-width: 100%;
          width: 15rem;
          margin: 0;
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        address {
          margin: 1rem 0;
          color: white;
          font-style: normal;
          font-size: 16px;
          @media screen and (min-width: 768px) {
            font-size: 20px;
          }
        }
      }
    }

    p {
      font-size: 14px;
      color: #ccc;
      text-align: center;
      margin: 1rem 0 0;
      @media screen and (min-width: 768px) {
        margin: 3rem 0 0;
      }
    }

    &.push {
      @media screen and (min-height: 899px) and (min-width: 768px) {
        position: absolute;
        width: 100%;
        bottom: 0;
      }
    }
  }
</style>
