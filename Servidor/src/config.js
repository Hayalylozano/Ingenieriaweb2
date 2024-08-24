const app = require("./app");

module.exports = {
    app:{
        port:"4000"
    },
    mysql: {
        host:"localhost",
        user:"root",
        password: "",
        database: "actividad6",
        dialect: "mysql",
    },
    security:{
        origin:["http://localhost:3000"]
    }
};

