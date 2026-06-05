const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/profiles", profileRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "GitHub Profile Analyzer API Running"
    });
});

module.exports = app;