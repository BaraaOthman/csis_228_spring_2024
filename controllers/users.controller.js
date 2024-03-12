const { validationResult } = require('express-validator');
const { getUsers, insertUser, authenticate, getUserById } = require('../services/users.services');

const authenticateController = async(req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    return res.status(401).json({message: "missing data"});
  }

  try{
    const result = await authenticate(email, password);
    if(!result){
      return res.status(401).json({message: "Wrong username/password"});
    }
    res.status(200).json({ message: "authenticated", user: result });
  }catch(error){
    res.status(500).json({error, message: "Error authenticated"});
  }
}

const getUsersController = async (req, res) => {
  try {
    res.status(200).json({ users: await getUsers() });
  } catch (error) {
    // ? conditional return
    res.status(500).json({ message: error?.message });
  }
};

const insertUserController = async (req, res) => {
  

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({errors});
  }

  console.log(req.body);
  const {
    userName,
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

const getUserByIdController = async(req, res)=>
{
  const {id} = req.params;
  if(!id){
    return res.status(401).json({message: "missing id"});
  }

  const user = await getUserById(id);
  if(user && user.length){
    return res.status(200).json(user[0]);
  }

  res.status(200).json({message: "user not found "+id})
}

module.exports = {
  getUsersController,
  insertUserController,
  authenticateController,
  getUserByIdController,
};
