const express =require('express')
const routerHeroes = require('./heroes')
const routerHome = require('./home')
const router = express.Router()

router.use('/heroes', routerHeroes)
router.use('/', routerHome)



module.exports = router