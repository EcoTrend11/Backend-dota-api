const {Heroes} = require ('../../src/db.js')
const { Op } = require("sequelize");

async function getHeroeByName ( req, res) {

    const name = req.query.name
    if(name){
        const findByName = await Heroes.findAll({
            where : {
                name : {
                    [Op.iLike] : '%'+name+'%'
                }
            }
        })

        try{
            res.status(200).send(findByName)
        }
        catch(error){
            res.status(404).send(error)
        }
    }
    else{
        res.status(404).send({error: "name invalid or not send name"})
    }
}

module.exports = {getHeroeByName}