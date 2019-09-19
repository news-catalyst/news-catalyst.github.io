// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'normalize.css/normalize.css';
import 'typeface-work-sans';
import DefaultLayout from '~/layouts/Default.vue'

const desc ="News Catalyst helps news organizations transform themselves into sustainable digital businesses."

export default function (Vue, { router, head, isClient }) {
  console.log(router);
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: "og:image",
    content: "https://newscatalyst.org/share-white.png",
  });

  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
  });

  head.meta.push({
    name: "twitter:site",
    content: "@newscatalyst",
  });

  head.meta.push({
    name: "twitter:image",
    content: "https://newscatalyst.org/share-white.png",
  });
}
