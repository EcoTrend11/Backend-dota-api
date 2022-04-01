require('dotenv').config()
const {
    DATABASE_URL
  } = process.env;
const { Sequelize } = require('sequelize');
const createHeroesModel = require('../models/heroes')

const sequelize = new Sequelize(`${DATABASE_URL}`, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});


const Heroes = createHeroesModel(sequelize)
module.exports = {sequelize,Heroes}