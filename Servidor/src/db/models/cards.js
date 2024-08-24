const {DataTypes} = require("sequelize");

const {sequelize} = require ("../dbSequealize.js");

 const Card =  sequelize.define (
    "Card", {
        id: { 
            type:DataTypes.INTEGER, 
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            validate: {max:50}
        },
        status: {
            type:DataTypes.STRING,
            validate: {max:50}
        },
        image:{
            type:DataTypes.STRING,
        },
        
    },
    {
        timestamps:false
    }

);

/* sequelize.sync ();  */

module.exports = Card