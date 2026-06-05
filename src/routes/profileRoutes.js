const express = require("express");

const {
  analyzeProfile,
  getProfiles,
  getProfile
} = require("../controllers/profileController");

const router = express.Router();

// get profiles route
router.get(
    "/",
    getProfiles
);

// get profile route
router.get(
    "/:username",
    getProfile
);

// analyze profile route
router.post(
  "/:username/analyze",
  analyzeProfile
);


module.exports = router;