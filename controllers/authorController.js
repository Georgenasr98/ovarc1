
const Author = require('../models').Author
const createauthor = async (req, res) => {
    const { name } = req.body
    try {
        const result = await Author.create({ name: name });
        res.send(result)
    }
    catch(e){
        res.send(e)
    }
}
module.exports={createauthor}