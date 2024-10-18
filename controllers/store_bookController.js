
const Book = require("../models").book
const Store = require("../models").store
const Author = require("../models").Author
const Store_Book = require("../models").store_book
const sequelize = require("../models").Sequelize

const assign_book_to_store = async (req, res) => {
    const { store_id, book_id, price } = req.body
    try {
        const results = await Store_Book.create({ store_id, book_id, price })

        res.send(results)

    }
    catch (e) {
        res.send(e)
    }
}
//Sell a book in a store for a certain price
const sellBook = async (req, res) => {
    const bookID = req.params.bookID

    try {
        const results = await Store_Book.findAll({
            where: { book_id: bookID },
            include: [
                {
                    model: Book,
                    as: 'book',
                    attributes: ['name'] // Specify attributes to return for books
                },
                {
                    model: Store,
                    as: 'store',
                    attributes: ['name']
                }
            ],
            attributes: ['price']
        })

        res.send(results)
    }
    catch (e) { console.log(e) }
}
const getBooksInStore = async (req, res) => {
    const storeID = req.params.storeID

    try {
        const results = await Store_Book.findAll({
            where: { store_id: storeID },
            include: [
                {
                    model: Book,
                    as: 'book',
                    attributes: ['name']
                },

            ],
            attributes: ['price']
        })

        res.send(results)
    }
    catch (e) { console.log(e) }
}

// get cheapest book 

const getCheapestBookForEachAuthor = async (req, res) => {
    try {
        // Step 1: Get the cheapest price for each book
        const cheapestBooks = await Store_Book.findAll({
            attributes: [
                'book_id',
                [sequelize.fn('MIN', sequelize.col('price')), 'cheapest_price'],
            ],
            group: ['book_id'],
        });

        // Step 2: Get details for each book and author
        const results = await Promise.all(
            cheapestBooks.map(async (book) => {
                const bookDetails = await Book.findOne({
                    where: { id: book.book_id },
                    include: [
                        {
                            model: Author,
                            as: 'Author', // Ensure this matches your model association
                            attributes: ['name'], // Get author's name
                        },
                    ],
                    attributes: ['id', 'authorId'], // Include necessary attributes
                });

                return {
                    book_id: book.book_id,
                    cheapest_price: book.cheapest_price,
                    author: bookDetails ? bookDetails.Author.name : null, // Handle case where no book found
                };
            })
        );

        res.status(200).json(results);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
};


module.exports = { assign_book_to_store, sellBook, getBooksInStore, getCheapestBookForEachAuthor }