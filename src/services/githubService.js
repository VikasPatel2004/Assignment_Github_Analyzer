const axios = require("axios");

const getGithubProfile = async (username) => {
  const response = await axios.get(
  `https://api.github.com/users/${username}`,
  {
    headers: {
      "User-Agent": "Github-Profile-Analyzer"
    }
  }
);

  return response.data;
};

module.exports = {
  getGithubProfile,
};