const {createBook,authorBooks}=require("../controllers/bookcontroller")

const express=require("express")

const router=express.Router()

router.post("/createBook",createBook)
router.get("/getAuthorBooks/:authorID",authorBooks)


module.exports=router