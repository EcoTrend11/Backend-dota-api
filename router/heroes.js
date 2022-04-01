const express = require('express')
const router = express.Router()

const {attack_type} = require('./moduleRouter/attack_type')
const {primary_atr} = require ('./moduleRouter/primary_atr.js')
const {id} = require('./moduleRouter/id')
const {getHeroeByName} = require ('./moduleRouter/getHeroeByName.js')
const {all} = require('./moduleRouter/all')


router.get('/all', all)
router.get('/getHeroeByName' , getHeroeByName)
router.get('/id/:id', id )
router.get('/primary_atr/:atr', primary_atr)
router.get('/attack_type/:type', attack_type )




module.exports = router