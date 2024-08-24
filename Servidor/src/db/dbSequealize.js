const {Sequelize} = require ("sequelize");

const config = require("../config");

const sequelize = new Sequelize(
    config.mysql.database, 
    config.mysql.user,
    config.mysql.password,
    {
        host:config.mysql.host,
        dialect:config.mysql.dialect,
    }
);

const conection = async() => {
    try {

        await sequelize.authenticate(); 
        console.log ("Conexion exitosa");

    } catch (error) {
        console.log ("Error en la conexion", error)
    }
};

module.exports = {
    sequelize, conection
}
