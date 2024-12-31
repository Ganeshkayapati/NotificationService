const {ticketRepository}=require("../repositories")
const {mailer}=require("../config");


const ticketrepository=new ticketRepository();
async function sendEMail(data){
        try {
            console.log("in");
            const response=await mailer.sendMail({
                        from:data.from,
                        to:data.to,
                        subject:data.subject,
                        text:data.text
                    });
                    return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
}


module.exports={
    sendEMail,
    
}