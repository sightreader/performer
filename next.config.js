module.exports = {
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return "sightreader-performer";
  },
  generateEtags: false,
  distDir: "dist"
};
