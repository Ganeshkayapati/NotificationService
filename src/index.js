
const express=require("express");
const {serverConfig,logger} =require("./config/index");

const apiRoutes=require("./routes/index"); 

const mailsender = require("./config/email-config");


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",apiRoutes);

app.listen(serverConfig.PORT,async ()=>{
    console.log(`Listening to port ${serverConfig.PORT }`);

}) 