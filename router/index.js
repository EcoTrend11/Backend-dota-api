const express =require('express')
const routerHeroes = require('./heroes')
const router = express.Router()

router.use('/heroes', routerHeroes)


module.exports = router