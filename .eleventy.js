const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addCollection("heroPost", function (collectionApi) {
    // the latest post with featured tag becomes the Hero Post
    let featuredPosts = collectionApi.getFilteredByTag("Featured");
    return featuredPosts.reverse()[0];
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("onlyTags", (collections) => {
    return Object.keys(collections).filter((tag) => tag !== "all" || tag !== "post");
  });

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
