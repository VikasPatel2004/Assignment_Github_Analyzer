const calculateAccountAge = (createdAt) => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();

  const diffTime = currentDate - createdDate;

  const years = diffTime / (1000 * 60 * 60 * 24 * 365);

  return Number(years.toFixed(2));
};

const calculateFollowerRepoRatio = (followers, repos) => {
  if (repos === 0) return followers;

  return Number((followers / repos).toFixed(2));
};

const calculateProfileScore = (profile) => {
  let score = 0;

  if (profile.bio) score += 25;
  if (profile.location) score += 25;
  if (profile.company) score += 25;
  if (profile.blog) score += 25;

  return score;
};

const calculateActivityScore = (followers, following, repos) => {
  return followers + following + repos * 2;
};

const calculatePopularityTier = (followers) => {
  if (followers < 50) return "Beginner";
  if (followers < 500) return "Growing";
  if (followers < 5000) return "Influencer";

  return "Star";
};

module.exports = {
  calculateAccountAge,
  calculateFollowerRepoRatio,
  calculateProfileScore,
  calculateActivityScore,
  calculatePopularityTier,
};

//Here we actually have calculated all the operations like account age , 
// follower repo ratio , profile score , activity score ,
//  popularity tier from the data that we have fetched from the github api.