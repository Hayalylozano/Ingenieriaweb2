const express = require ("express");

const config = require ("./config.js");

const app = express ();

const router = require ("../src/API/routers/router.routes.js");

const cors = require ("cors");

app.use(cors())

app.use (express.json());

app.use ("/", router);

//console.log(config.app.port);

app.set('port',config.app.port);

module.exports=app;
