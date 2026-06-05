const express = require("express");
const cors = require("cors");
const { getGithubProfile } = require("./services/githubService"); //temporary

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "GitHub Profile Analyzer API Running"
    });
});

app.get("/github/:username", async (req, res) => {
  try {
    const data = await getGithubProfile(req.params.username);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = app;