const { query } = require("../database/db");

const getCountries = async () => {
    try {
        let sql = `SELECT * FROM ref_country`;
        const countries = await query(sql);
        return countries;
    } catch (error) {
        throw new Error(error);
    }
}

const getCountryById = async (id) => {
    try {
        let sql = `SELECT * FROM ref_country WHERE country_id = ?`;
        const country = await query(sql, [id]);
        return country[0]
    } catch (error) {
        throw new Error(error);
    }
}

const getCountryByName = async (name) => {
    try {
        let sql = `SELECT * FROM ref_country WHERE country_name = "${name}"`;
        console.log(sql);
        const country = await query(sql);
        return country[0];
    } catch (error) {
        throw new Error(error);
    }
}

const searchCountires = async (keyword) =>{
    try{
        let sql = `SELECT * FROM ref_country WHERE 
        country_name LIKE "%${keyword}%"
        OR
        country_abbr LIKE "%${keyword}%"
        OR
        country_code LIKE "%${keyword}%";
        `;
    const result = await query(sql);
    return result;
    }catch(error){
        throw new Error(error);
    }
}

module.exports = {
    getCountries,
    getCountryById,
    getCountryByName,
    searchCountires
}