const {Heroes} = require ('../../src/db')
async function id ( req, res ) {
    const id = req.params.id

    if(id){
        try{        
            const findById = await Heroes.findByPk(id)
            findById === null? 
                res.status(400).send({error:`no se encontro heroe con el id: ${id}`}):
                res.status(200).send(findById)
        }
        catch(error){
            res.status(404).send(error)
        }
    }
    else{
        res.status(404).send({error : `id is invalid`})
    }
    
}


module.exports = {id}