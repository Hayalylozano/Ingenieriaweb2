const express = require("express");
const control = require("../controlers/llamarcontroler");
const router = express.Router();

router.get("/traer/informacion", (req, res) =>{
    control.getApiInfo(req, res)
});

router.post("/insertar/informacion", (req, res)=>{
    control.postCards(req, res)
});

router.delete("/eliminar/informacion", (req, res) => {
    control.deleteById(req, res)
});

router.put("/modificar/informacion/:id", (req, res) =>{
    control.modify(req, res)
});

router.get("/traer",(req, res) =>{
    control.getDataBaseInfo(req, res)
});

module.exports = router
