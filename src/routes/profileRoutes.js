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

// In the following routes i have used swagger documentation to document the routes easily you 
// can check the documentation at http://localhost:5000/api-docs on you browser directly without
//postman or any other tool


/**
 * @swagger
 * /api/profiles/search:
 *   get:
 *     summary: Search analyzed profiles
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results fetched successfully
 */
router.get("/search", searchProfilesController);

/**
 * @swagger
 * /api/profiles/top:
 *   get:
 *     summary: Get top profiles by followers
 *     responses:
 *       200:
 *         description: Top profiles fetched successfully
 */
router.get("/top", getTopProfilesController);

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Get all analyzed profiles
 *     responses:
 *       200:
 *         description: Profiles fetched successfully
 */
router.get("/", getProfiles);

/**
 * @swagger
 * /api/profiles/{username}:
 *   get:
 *     summary: Get a single analyzed profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile fetched successfully
 *       404:
 *         description: Profile not found
 */
router.get("/:username", getProfile);

/**
 * @swagger
 * /api/profiles/{username}/analyze:
 *   post:
 *     summary: Analyze a GitHub profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Profile analyzed successfully
 */
router.post("/:username/analyze", analyzeProfile);

/**
 * @swagger
 * /api/profiles/{username}/refresh:
 *   put:
 *     summary: Refresh a stored GitHub profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile refreshed successfully
 *       404:
 *         description: Profile not found
 */
router.put("/:username/refresh", refreshProfile);

module.exports = router;