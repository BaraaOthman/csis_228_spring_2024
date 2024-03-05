const { getCountries, getCountryById, getCountryByName, searchCountires } = require("../services/countries.services");

const getCountriesController = async(req, res) =>{
    try{
        const countries = await getCountries();
        res.status(200).json({countries});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}
const getCountyByIdController = async(req, res) =>{
    try{
        const {id} = req.params;
        console.log(id);
        if(!id){
            return res.status(401).json({message: "missing data"});
        }
        const country = await getCountryById(id);
        if(!country){
            return res.status(200).json({message: "No country found"});
        }
        res.status(200).json({country});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

const getCountryByNameController = async(req, res)=>{
    const {name} = req.params;
    try{
        if(!name){
            return res.status(401).json({message: "missing data"});
        }
        const country = await getCountryByName(name);
        if(!country){
            res.status(200).json({message: "Country not found"});
        }
        res.status(200).json({country});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

const searchCountriesController = async(req, res)=>{
    const {keyword} = req.params;
    try{
        if(!keyword){
            return res.status(401).json({message: "missing data"});
        }
        const country = await searchCountires(keyword);
        if(!country){
            res.status(200).json({message: "Country not found"});
        }
        res.status(200).json({country});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {
    getCountriesController,
    getCountyByIdController,
    getCountryByNameController,
    searchCountriesController
}