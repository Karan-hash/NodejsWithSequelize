const { Sequelize, DataTypes, Model } = require("sequelize");

const config = require("../config/config");

// Create Sequelize instance
console.log(config.development);
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: "mysql",
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./user")(sequelize, DataTypes, Model);
db.Contact = require("./contact")(sequelize, DataTypes, Model);

// Synchronizing all tables with the databases.
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("All table synced with the database.");
  })
  .catch((err) => {
    console.error("Error syncing tables:", err);
  });

module.exports = db;
