const {Heroes} = require ('../../src/db')

async function all ( req, res ) {

    const allHeroes = await Heroes.findAll()
    try{
        res.status(200).send(allHeroes)
    }
    catch(error){
        res.status(404).send(error)  
    }

}

module.exports = {all}