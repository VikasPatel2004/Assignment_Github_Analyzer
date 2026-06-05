const { getGithubProfile } = require("../services/githubService");
const { getAllProfiles } = require("../models/profileModel");
const { getProfileByUsername } = require("../models/profileModel");

const {
  calculateAccountAge,
  calculateFollowerRepoRatio,
  calculateProfileScore,
  calculateActivityScore,
  calculatePopularityTier,
} = require("../services/analysisService");

const { saveProfile,findProfileByUsername } = require("../models/profileModel");

const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;
   
    // Check if profile already exists
    const existingProfile =
await findProfileByUsername(username);

if(existingProfile){

    return res.status(200).json({
        success:true,
        message:"Profile already analyzed",
        data:existingProfile
    });

}

// Fetch from GitHub API
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

// get profiles controller to get all the profiles
const getProfiles = async (req,res)=>{

    try{

        const profiles =
        await getAllProfiles();

        return res.status(200).json({
            success:true,
            count:profiles.length,
            data:profiles
        });

    }
    catch(error){

        return res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// get profile controller to get a single profile
const getProfile = async (req,res)=>{

    try{

        const { username } = req.params;

        const profile =
        await getProfileByUsername(
            username
        );

        if(!profile){

            return res.status(404).json({
                success:false,
                message:"Profile not found"
            });

        }

        return res.status(200).json({
            success:true,
            data:profile
        });

    }
    catch(error){

        return res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
  analyzeProfile,
  getProfiles,
  getProfile
};