const express=require("express");
const router=express.Router();
const {infoController,emailController}=require("../../controllers/index")

router.get("/info",infoController.info);
router.post("/tickets",emailController.sendEMail);

module.exports=router;