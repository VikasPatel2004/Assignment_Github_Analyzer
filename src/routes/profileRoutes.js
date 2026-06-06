const express = require("express");

const {
  analyzeProfile,
  getProfiles,
  getProfile,
  refreshProfile,
  getTopProfilesController,
  searchProfilesController
} = require("../controllers/profileController");

const router = express.Router();

// get all profiles route
router.get(
    "/",
    getProfiles
);

// get top profiles route
router.get(
  "/top",
  getTopProfilesController
);

router.get(
  "/search",
  searchProfilesController
);

// get a single profile route
router.get(
    "/:username",
    getProfile
);

// analyze profile route
router.post(
  "/:username/analyze",
  analyzeProfile
);

// refresh profile route
router.put(
  "/:username/refresh",
  refreshProfile
);



module.exports = router;