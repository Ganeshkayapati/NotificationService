const nodemailer=require("nodemailer");
const {GMAIL_PASS,GMAIL_EMAIL}=require("./server-config");
const { Model } = require("sequelize");

const mailsender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:GMAIL_EMAIL,
        pass:GMAIL_PASS
    }
})

module.exports=mailsender