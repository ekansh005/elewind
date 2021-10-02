module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
