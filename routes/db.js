const express = require("express");
const router = express.Router();

const { getSequelize } = require("../models");
// simple test route to verify Aiven connection
router.get("/test-db", async (req, res) => {
    try {
        console.log("Testing Aiven Postgres connection...");
        const sequelize = getSequelize();
        await sequelize.authenticate();
        console.log("Aiven Postgres connected!");
        return res.json({ ok: true, message: "Aiven Postgres connected!" });
    } catch (err) {
        console.log("Aiven Postgres connection failed!");
        return res.status(500).json({ ok: false, error: err.message });
    }
  });

module.exports = router;