// api/index.js
// Note: Vercel uses files in /api as serverless functions
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/mongo");
const serverless = require("serverless-http");

if (process.env.NODE_ENV !== "production") {
  // Only load .env locally
  require("dotenv").config();
}

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
    origin: "*",
  }));
app.use(express.json());

// example route using models - replace with your models imports
app.get("/", (req, res) => {
res.json({ message: "Hello from Vercel + Express!" });
});

// Routes
app.use("/", require("../routes/home"));
app.use("/", require("../routes/db"));

// module.exports = serverless(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
