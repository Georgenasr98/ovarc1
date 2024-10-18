const Book = require("../models").book
const Author = require("../models").Author

const createBook = async (req, res) => {
    const { name, pages, authorId } = req.body
    try {
        const result = await Book.create({ name, pages, authorId });
        res.send(result)
    }
    catch (e) {
        res.send(e)
    }
}
const authorBooks = async (req, res) => {
    const authorID = req.params.authorID
    try {
        const result = await Book.findAll(
            {
                where: { authorId: authorID },
                include: [{ model: Author, as: "Author", attributes: ["name"] }],
                attributes: ["name"]


            },
        );
        res.send(result)
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = { createBook ,authorBooks}