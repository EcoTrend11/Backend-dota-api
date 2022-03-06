require('dotenv').config()
const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;
const { Sequelize } = require('sequelize');
const createHeroesModel = require('../models/heroes')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dota`, {
    logging: false,
});

const Heroes = createHeroesModel(sequelize)

module.exports = {sequelize,Heroes}