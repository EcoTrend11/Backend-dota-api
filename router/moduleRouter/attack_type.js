const {Heroes} = require('../../src/db');

async function  attack_type (req, res) {

    const attackType = req.params.type.toUpperCase()
    
    if(attackType === "MELEE" || attackType === "RANGED"){
        const findByAttackType = await Heroes.findAll({
            where : {
                attack_type : attackType
            }
        })

        try{
            res.status(200).send(findByAttackType)
        }
        catch(error){
            res.status(404).send(error)
        }
    }
    else{
            res.status(404).send({error : ` attack type invalid`})
    }
}   

module.exports = {attack_type}