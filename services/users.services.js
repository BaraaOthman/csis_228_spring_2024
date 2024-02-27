const { query } = require("../database/db");
const moment = require("moment");


const authenticate = async (username, password) => {
    try {
        let sql = `SELECT * FROM users WHERE user_name = ?
    AND user_password = ?`
        const user = await query(sql, [username, password]);
        return user[0];
    } catch (error) {
        throw new Error(error);
    }
}

const getUsers = async() => {
    try {
        let sql = `SELECT * FROM users`;
        const users = await query(sql);
        return users;
    } catch (error) {
        throw new Error(error);
    }
}

// const getUserById = async(id) =>{
//     let sql = `SELECT * FROM users WHERE user_id = ?`;
//     const user = await query(sql, [id]);
//     return user;
// } 

const getUserById = async(id) =>{

    try{
        //let userByIdSQL = `SELECT * FROM users WHERE user_id = "${id}"";`;
        // prepared statement
        let userByIdSQL = "SELECT * FROM users WHERE user_id = ?";
        const user = await query(userByIdSQL, [id]);
        return user;
    }catch(error){
        throw new Error(error);
    }

}

/**
 * 
 * @param {String} userName 
 * @param {String} userUserName 
 * @param {String} userEmail 
 * @param {String} userPassword 
 * @param {Date} userDob 
 * @param {String} userMobileNumber 
 * @param {String} userDescription 
 * @param {String} userAddress 
 * @returns user
 */
const insertUser = async(userName,
    userEmail,
    userPassword,
    userDob,
    userMobileNumber,
    userDescription,
    userAddress) =>{

        try{
            const emailExist = await checkEmailExist(userEmail);
            if(emailExist){
                return `${userEmail} already exists`;
            }
            let sql = `INSERT INTO users 
            (user_name, user_email, user_password, user_dob)
            VALUES
            (?, ?, ?, ?);
            `;
            const result = await query(sql, 
                [
                    userName, 
                    userEmail, 
                    userPassword, 
                    moment(userDob).format("YYYY-MM-DD")
                ]);
            const user = await query("select * from users where user_id = ?", 
            [result.insertId]);
        
            return user[0];
        }catch(error){
            throw new Error(error);
        }
}

const checkEmailExist = async(email) =>{
    try{
        let sql = "SELECT * FROM users WHERE user_email = ?";
        const result = await query(sql, [email]);
        if(result && result.length){
            return true;
        }else{
            return false;
        }
    }catch(error){
        throw new Error(error);
    }
}

const updateUser = async(user) => {
    const {user_id, user_name, user_username, user_email, user_password, user_dob} = user;

    let sql = `UPDATE user SET 
    user_username = ?, 
    user_name = ?, 
    user_email = ?,
    user_password = ?,
    user_dob = ?
    WHERE user_id = ?;
    `;

    const result = await query(sql, [user_username, user_name, user_email, user_password, moment(user_dob).format("YYYY-MM-DD"), user_id]);
}

const deleteUser = async(id) =>{
    return await query("DELETE FROM user WHERE user_id = ?", [id]);
}

module.exports = {
    getUsers,
    getUserById,
    insertUser,
    updateUser,
    deleteUser,
    authenticate,
}