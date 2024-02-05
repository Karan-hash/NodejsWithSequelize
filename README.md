# NodejsWithSequelize
# Creating Complete Rest API using NodeJS Express MySQL Sequelize ORM

To use SQL with Sequelize in your Node.js project, you need to install both Sequelize and the MYSQL library. Here are the commands to install them using npm:

Install Sequelize:

npm install sequelize sequelize-cli
sequelize: The Sequelize library itself.
sequelize-cli: Command-line interface for Sequelize, which provides helpful commands for managing database migrations, models, etc.

Configure Database Connection:
Update the config/config.json file created by Sequelize to include your MYSQL database configuration. Modify the development section to specify your MYSQL database name, username, password, host, and dialect. It should look something like this:

json
"development": {
  "username": "your_username",
  "password": "your_password",
  "database": "your_database",
  "host": "localhost",
  "dialect": "mysql"
}






* We are using mysql and mysql workbench for this project.
# Install mysql installer and mysql workbench both for running this project.

* I am keeping all models in my connection file i.e ./models/index.js file.