const express = require("express")
const { assign_book_to_store, sellBook,getBooksInStore,getCheapestBookForEachAuthor } = require("../controllers/store_bookController")

const router = express.Router()


router.post("/assignBooktoStore", assign_book_to_store)
router.get("/sellBook/:bookID", sellBook)
router.get("/getBooksInStore/:storeID", getBooksInStore)
router.get("/getCheapestBookForEachAuthor/", getCheapestBookForEachAuthor)


module.exports = router