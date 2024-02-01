const { Sequelize } = require("sequelize");

const config = require("./../config/config.json");
const UserModel = require("./user");

// // Create Sequelize instance
// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     host: config.host,
//     dialect: 'mysql',
//   }
// );

// Create Sequelize instance
const sequelize = new Sequelize(
    'karandb',
    'root',
    'karan123456',
    {
      host: 'localhost',
      dialect: 'mysql',
    }
  );

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");

  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports=sequelize;
