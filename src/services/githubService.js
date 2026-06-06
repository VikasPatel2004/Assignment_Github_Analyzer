const axios = require("axios");

const getGithubProfile = async (username) => {
  const response = await axios.get(
  `https://api.github.com/users/${username}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "Github-Profile-Analyzer",
      Accept: "application/vnd.github+json"
    }
  }
);

  return response.data;
};

module.exports = {
  getGithubProfile,
};