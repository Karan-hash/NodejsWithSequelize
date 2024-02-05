const db = require("../models/index");
const UserModel = db.User;
const createUser = async (req, res) => {
    const dataObj = await UserModel.create({
        id: 1, 
        firstName: "Karan",
        lastName: "Kaushal",
        username: "Kaushal",
        email: "karan.kaushal@example.com",
        password: "123456", // Ensure to store the hashed password in the actual implementation
      });
    // Jane exists in the database now!
    console.log(dataObj instanceof UserModel); // true
    console.log(dataObj.firstName); // "Jane"

    console.log(dataObj.toJSON()); // This is good!
    
    res.status(200).json(dataObj.toJSON());
}

module.exports = {
    createUser
}