// models/index.js
const { Sequelize } = require("sequelize");

// Explicitly require pg to ensure it's loaded before Sequelize initialization
// This is important for Vercel/serverless deployments
require("pg");

let sequelize = null;

function getSequelize() {
  if (!sequelize) {
    // Use DATABASE_URL from env (provided by Vercel)
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
          // If you provide PG_CA_CERT as an env var, include it:
          ca: process.env.PG_CA_CERT ? process.env.PG_CA_CERT : undefined
        }
      },
      logging: false
    });
  }
  return sequelize;
}

module.exports = { getSequelize };
