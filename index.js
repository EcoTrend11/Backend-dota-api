const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const apiRouter= require('./router/index')
const {sequelize,Heroes} = require('./src/db');
let port = process.env.PORT || 3001

app.use('/api', apiRouter)
app.use('/',apiRouter )


sequelize.sync()
.then(() => {
    app.listen(port, () => {

        // -----------------ONLY FOR PRECHARGE--------------------

        // let apiAxios = await axios.get('https://api.opendota.com/api/heroStats');
        // let dataApiAxios = apiAxios.data
        
        // dataApiAxios.forEach(async (e) =>{
                       
        //     try{
        //         const createHeroes = await Heroes.create({
        //             id: e.id,
        //             name : e.localized_name,
        //             primary_atr : e.primary_attr,
        //             attack_type : e.attack_type.toUpperCase(),
        //             role : e.roles,
        //             img : "https://api.opendota.com"+e.img,
        //             base_str : e.base_str,
        //             base_agi : e.base_agi,
        //             base_int : e.base_int,
        //             str_gain : e.str_gain,
        //             agi_gain : e.agi_gain,
        //             int_gain : e.int_gain,
        //             attack_range : e.attack_range,
        //             move_speed : e.move_speed,
        //             attack_rate : e.attack_rate
        //         })
    
        //     }
        //     catch(error){
        //         console.log(error)
        //     }
        // })
        console.log('app escuchando en el puerto 3001')
    })
})