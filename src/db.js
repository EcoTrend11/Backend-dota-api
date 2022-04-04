require('dotenv').config()
const {
    DATABASE_URL
  } = process.env;
const { Sequelize } = require('sequelize');
const createHeroesModel = require('../models/heroes')

const sequelize = new Sequelize(`postgres://mcrkxgqryqqsbr:f5f64a93f32cd5fce673a6f24f074062d428a656d8764356e3bba4bd31e918cb@ec2-3-209-61-239.compute-1.amazonaws.com:5432/d1hc90oig3c4kd`, {
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