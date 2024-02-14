const express =require("express")
const Routes3 = express.Router()
const Controlleur = require('../Controlleur/Controlleur3')

Routes3.get("/getone/:idu",Controlleur.getAllproduct)
Routes3.post('/add',Controlleur.addto)
Routes3.delete('/del/:id',Controlleur.remove)

module.exports =Routes3