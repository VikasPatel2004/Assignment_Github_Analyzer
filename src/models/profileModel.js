const db = require("../config/db");

const saveProfile = async (profileData) => {
  const query = `
  INSERT INTO github_profiles
  (
    username,
    name,
    bio,
    followers,
    following,
    public_repos,
    account_age_years,
    follower_repo_ratio,
    profile_score,
    activity_score,
    popularity_tier,
    avatar_url,
    github_url
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    profileData.username,
    profileData.name,
    profileData.bio,
    profileData.followers,
    profileData.following,
    profileData.public_repos,
    profileData.account_age_years,
    profileData.follower_repo_ratio,
    profileData.profile_score,
    profileData.activity_score,
    profileData.popularity_tier,
    profileData.avatar_url,
    profileData.github_url,
  ];

  const [result] = await db.query(query, values);

  return result;
};

module.exports = {
  saveProfile,
};