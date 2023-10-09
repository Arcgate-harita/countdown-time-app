module.exports = {
    // Other Jest configurations...
    setupFilesAfterEnv: ['<rootDir>/setuptests.js'],
    collectCoverage: true,
    collectCoverageFrom: [
      // Define the file(s) you want to include in the coverage report
      'src/ContactForm.js', // Replace with the actual path to your component file
    ],
  };
  