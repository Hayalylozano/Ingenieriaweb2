const { response } = require("../../app");
const Card = require("../../db/models/cards");
const axios = require("axios");
const Url = "https://rickandmortyapi.com/api/character";

const getApiInfo = async(req, res) =>{
    try {
        const response = await axios.get(Url)
        const data = response.data
        res.status(200).send(data)
    } catch (error) {
        console.log(error)

    }
}

const postCards = async(req, res) =>{
    try {
        const cardsData = req.body;
        const createCard = await Promise.all(cardsData.map(async(card)=>{
            const newCard = await Card.create(card)
            return newCard
        }))
        res.status(201).send(createCard)
    } catch (error) {
        console.log("problemas en el post", error)

    }
}

const deleteById = async(req, res) =>{
    try {
        const id = req.params.id;
        const card = await Card.findByPK(id)
        console.log(card)
        await card.destroy()
        res.status(200)
    } catch (error) {
        console.log("problemas en delete", error)
    }
}


const modify = async (req, res) => {     
    try {         
        const id = req.params.id;         
        const newData = req.body;         
        const card = await Card.findByPk(id); 
        if (!card) {             
            return res.status(404).send("Card not found");        
        }        
        await card.update(newData);         
        res.status(200).json(card);     
    } catch (error) {         
        console.log("problemas en modify", error); res.status(500).send("Server error");
    } }

const getDataBaseInfo = async(req, res) =>{
    try {
        const cards = await Card.findAll()
        res.status(200).json(cards)
    } catch (error) {
        console.log("problemas en modify", error)
    }
}


module.exports ={
    getApiInfo, postCards, deleteById, modify, getDataBaseInfo
}