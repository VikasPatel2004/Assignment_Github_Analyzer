const express = require("express");

const {
  analyzeProfile,
} = require("../controllers/profileController");

const router = express.Router();

router.post(
  "/:username/analyze",
  analyzeProfile
);

module.exports = router;