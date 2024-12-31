const {EmailService}=require("../services")




async function sendEMail(req,res){
    try {
        console.log("in");
        const response=await EmailService.sendEMail({
                    from:req.body.mailFrom,
                    to:req.body.mailTo,
                    subject:req.body.subject,
                    text:req.body.text
                });
                console.log(response)
                return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Internal server error"});
        
    }
}


module.exports=
{
    sendEMail
}