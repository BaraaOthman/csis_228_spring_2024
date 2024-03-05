const { getBMI } = require("../services/bmi.services")

const getBMIController = async(req, res)=>{
    console.log("reached")
    const result = await getBMI();
    res.send(result);
}

module.exports = {
    getBMIController,
}