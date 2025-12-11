const express = require("express");
const router = express.Router();

router.get("/health", async (req, res) => {
    console.log("Health Check");
    try {
        res.status(200).json({ message: "Server is running" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;