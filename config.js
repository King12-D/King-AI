const { Sequelize } = require("sequelize");
const fs = require("fs");
require("dotenv").config();
const toBool = (x) => x === "true";
const DATABASE_URL = process.env.DATABASE_URL || "./assets/database.db";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID: process.env.SESSION_ID ||null,
  LANG: process.env.LANG || "EN",
  AUTH_TOKEN: "",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "[#]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "main",
  WARN_COUNT: 3,
  PACKNAME: process.env.PACKNAME || "King-AI",
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "KING-DAV",
  SUDO:
    process.env.SUDO || "918113921898,919598157259,918590508376,919383400679",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "King-Dav",
  HEROKU: toBool(process.env.HEROKU) || false,
  BOT_NAME: process.env.BOT_NAME || "King-AI",
  AUTO_READ: toBool(process.env.AUTO_READ) || false,
  AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || false,
  PROCESSNAME: process.env.PROCESSNAME || "King-Dav",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  SESSION_URL: process.env.SESSION_URL || "",
  DELETED_LOG: toBool(process.env.DELETED_LOG) || false,
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  REMOVEBG: process.env.REMOVEBG || false,
  DATABASE_URL: DATABASE_URL,
  STATUS_SAVER: toBool(process.env.STATUS_SAVER) || true,
  DATABASE:
    DATABASE_URL === "./assets/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
To deploy your script on platforms like bot-hosting.net or Katabump, you'll need to make some modifications to ensure compatibility. Here's an updated version of your script:

```
const { Sequelize } = require("sequelize");
const fs = require("fs");

// Load environment variables from a .env file (if available)
require("dotenv").config();

// Define a function to convert environment variables to boolean values
const toBool = (x) => x === "true";

// Define the configuration object
const config = {
  // Bot settings
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK_ACTION || "kick",
  SESSION_ID: process.env.SESSION_ID || null,
  LANG: process.env.LANG || "EN",
  AUTH_TOKEN: process.env.AUTH_TOKEN || "",
  HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null" ? "^" : "[#]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "main",
  WARN_COUNT: 3,
  PACKNAME: process.env.PACKNAME || "King-AI",
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "KING-DAV",
  SUDO: process.env.SUDO || "918113921898,919598157259,918590508376,919383400679",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "King-Dav",
  HEROKU: toBool(process.env.HEROKU) || false,
  BOT_NAME: process.env.BOT_NAME || "King-AI",
  AUTO_READ: toBool(process.env.AUTO_READ) || false,
  AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || false,
  PROCESSNAME: process.env.PROCESSNAME || "King-Dav",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  SESSION_URL: process.env.SESSION_URL || "",
  DELETED_LOG: toBool(process.env.DELETED_LOG) || false,
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  REMOVEBG: process.env.REMOVEBG || false,
  STATUS_SAVER: toBool(process.env.STATUS_SAVER) || true,

  // Database settings
  DATABASE_URL: process.env.DATABASE_URL || "./assets/database.db",
  DATABASE: process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        ssl: true,
        protocol: "postgres",
        dialectOptions: {
          native: true,
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
      })
    : new Sequelize({
        dialect: "sqlite",
        storage: "./assets/database.db",
        logging: false,
      }),
};

module.exports = config;