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

// This model is being created for the purpose of checking if the profile is already present in the database or not.
const findProfileByUsername = async (username) => {

    const [rows] = await db.query(
        "SELECT * FROM github_profiles WHERE username = ?",
        [username]
    );

    return rows[0];
};

// This model is being created to fetch all the profiles
const getAllProfiles = async () => {

    const [rows] = await db.query(
        "SELECT * FROM github_profiles"
    );

    return rows;
};

// This model is being created to fetch a single profile by username
const getProfileByUsername =
async(username)=>{

    const [rows] = await db.query(
        "SELECT * FROM github_profiles WHERE username = ?",
        [username]
    );

    return rows[0];
};

module.exports = {
    saveProfile,
    findProfileByUsername,
    getAllProfiles,
    getProfileByUsername
};