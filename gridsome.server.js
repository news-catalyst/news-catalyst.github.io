// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()
var Gootenberg = require('gootenberg');
var md = require('markdown-it')({
  html: true,
  typographer: true,
});
var fm = require('front-matter');
var slugify = require('@sindresorhus/slugify');

var docs = [
  '1TWxOYR3IIQb0F_aSFMIj8zwdyr1Nht80La0PIvmjsBI',
  '1Xy43DOVyPtgag9jnBQE_7xmUKG8R7zukWJghwltYm1c',
  '1RkGOw0EqljNrm37MX2vhrdEK7sViV8Ik_QGQIVPdJOk',
  '1fKNgv9tSyMB-79-8bf0ZxD1PDcbyv_t9WZ2-DuKSn90'
]

console.log(process.env.GAPI_CLIENT_EMAIL)

module.exports = function (api) {
  api.loadSource(async store => {
    const goot = new Gootenberg();
    await goot.auth.jwt();

    const contentType = store.addContentType({
      typeName: 'Job',
      route: '/jobs/:slug'
    });

    for (var i = 0; i < docs.length; i++) {
      const data = await goot.drive.export(docs[i]);

      const parsedFrontMatter = fm(data);

      contentType.addNode({
        pageTitle: parsedFrontMatter.attributes.pageTitle,
        jobTitle: parsedFrontMatter.attributes.jobTitle,
        content: md.render(parsedFrontMatter.body),
        slug: slugify(parsedFrontMatter.attributes.pageTitle),
      });
    }
  })
}
