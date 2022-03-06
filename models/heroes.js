const { DataTypes } =require('sequelize')

module.exports = function ( sequelize ){
    return sequelize.define( 'heroes' ,{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        primary_atr : {
            type: DataTypes.STRING,
            allowNull:false
        },
        attack_type : {
            type : DataTypes.STRING,
            allowNull:false,
        },
        role : {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        img : {
            type : DataTypes.STRING,
            allowNull:false
        },
        base_str : {
            type : DataTypes.STRING,
            allowNull:false
        },
        base_agi : {
            type : DataTypes.STRING,
            allowNull:false
        },
        base_int : {
            type : DataTypes.STRING,
            allowNull:false
        },
        str_gain : {
            type : DataTypes.STRING,
            allowNull:false
        },
        agi_gain : {
            type : DataTypes.STRING,
            allowNull:false
        },
        int_gain : {
            type : DataTypes.STRING,
            allowNull:false
        },
        attack_range : {
            type : DataTypes.STRING,
            allowNull:false
        },
        move_speed : {
            type : DataTypes.STRING,
            allowNull:false
        },
        attack_rate : {
            type : DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps : false
      }
    )
}