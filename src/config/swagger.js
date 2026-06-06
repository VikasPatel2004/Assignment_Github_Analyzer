const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GitHub Profile Analyzer API",
      version: "1.0.0",
      description:
        "API for analyzing GitHub profiles and storing insights",
    },
    servers: [
  {
    url: process.env.NODE_ENV === "production"
      ? "https://assignment-github-analyzer.onrender.com"
      : "http://localhost:5000"
  }
],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;