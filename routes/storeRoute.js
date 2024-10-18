const {createstore}=require("../controllers/storeController")

const express=require("express")

const router=express.Router()

router.post("/createStore",createstore)


module.exports=router