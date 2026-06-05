const { getGithubProfile } = require("../services/githubService");

const {
  calculateAccountAge,
  calculateFollowerRepoRatio,
  calculateProfileScore,
  calculateActivityScore,
  calculatePopularityTier,
} = require("../services/analysisService");

const { saveProfile } = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const githubData = await getGithubProfile(username);

    const profileData = {
      username: githubData.login,
      name: githubData.name,
      bio: githubData.bio,

      followers: githubData.followers,
      following: githubData.following,
      public_repos: githubData.public_repos,

      account_age_years: calculateAccountAge(
        githubData.created_at
      ),

      follower_repo_ratio:
        calculateFollowerRepoRatio(
          githubData.followers,
          githubData.public_repos
        ),

      profile_score:
        calculateProfileScore(githubData),

      activity_score:
        calculateActivityScore(
          githubData.followers,
          githubData.following,
          githubData.public_repos
        ),

      popularity_tier:
        calculatePopularityTier(
          githubData.followers
        ),

      avatar_url: githubData.avatar_url,
      github_url: githubData.html_url,
    };

    await saveProfile(profileData);

    return res.status(201).json({
      success: true,
      message: "Profile analyzed successfully",
      data: profileData,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  analyzeProfile,
};