const {createauthor}=require("../controllers/authorController")

const express=require("express")

const router=express.Router()

router.post("/createAuthor",createauthor)


module.exports=router