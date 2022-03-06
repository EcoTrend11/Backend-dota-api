const {Heroes} = require ('../../src/db.js')
const { Op } = require("sequelize");
async function primary_atr ( req , res){
    

    const atr = req.params.atr.toLowerCase()

    if(atr === "str" || atr === "agi" || atr === "int"){
        const findByAtr  = await Heroes.findAll({
            where : {
                primary_atr : {
                    [Op.iLike] : atr
                }
            }
        }) 
        try{
            res.status(200).send(findByAtr)
        }
        catch(error){
            res.status(400).send(error)
        }
    }
    else{
        res.status(404).send({error : `primary atr invalid`})
    }
}

module.exports = {primary_atr}