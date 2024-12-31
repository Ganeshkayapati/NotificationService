const CrudRepository = require("./crud-repository");
const {Ticket}=require("../models");
const { where } = require("sequelize");

class ticketRepository extends CrudRepository{
    constructor(){
        super(Ticket)
    }

   async  getPendingTickets(){
        const response=await Ticket.findall({
            where:{
                status:'PENDING'
            }
        })

        return response;
    }
  
}
module.exports=ticketRepository