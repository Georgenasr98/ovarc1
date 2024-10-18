const Store = require("../models").store

const createstore=async (req,res)=>{
    const { name ,address} = req.body
    try {
        const result =await Store.create({ name ,address});
        res.send(result)
    }
    catch(e){
        res.send(e)
    }
}

module.exports={createstore}