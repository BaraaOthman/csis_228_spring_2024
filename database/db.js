const mysql = require("mysql2");
const config = require("./config");


var connection;

const connect = async() =>{
    try{
        connection = await mysql.createConnection(config.db);
        console.log("================================");
        console.log(">> Connection success");
        console.log("================================");
    }catch(error){
        console.error(`>>> error connecting to the ${process.env.DB_NAME} ${error}`);
        process.exit();
    }
}