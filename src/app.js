const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/profiles", profileRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "GitHub Profile Analyzer API Running"
    });
});

module.exports = app;