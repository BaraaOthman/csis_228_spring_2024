const { validationResult } = require('express-validator');
const { getUsers, insertUser, authenticate } = require('../services/users.services');

const authenticateController = async(req, res) => {
  const {username, password} = req.body;
  if(!username){
    res.status(401).json({message: "missing data"});
  }

  const result = await authenticate(username, password);
  
  res.status(200).json({message: "authenticated", user: result});
}

const getUsersController = async (req, res) => {
  try {
    res.status(200).json({ users: await getUsers() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertUserController = async (req, res) => {
  
  console.log(req.body);
  const {
    userName,
    userUserName,
    userEmail,
    userPassword,
    userDob,
    userMobileNumber,
    userDescription,
    userAddress,
  } = req.body;

  try {
    const result = await insertUser(
      userName,
      userUserName,
      userEmail,
      userPassword,
      userDob,
      userMobileNumber,
      userDescription,
      userAddress
    );
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getUsersController,
  insertUserController,
  authenticateController,
};
