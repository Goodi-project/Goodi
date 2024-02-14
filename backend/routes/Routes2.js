const express =require("express")
const Routes2 = express.Router()
const Controlleur = require('../Controlleur/Controlleur2')

Routes2.get("/get",Controlleur.getAllproduct)
Routes2.get("/getOne/:id",Controlleur.getProduct)
Routes2.post('/add',Controlleur.createOne)
Routes2.delete('/del/:id',Controlleur.remove)
Routes2.put("/upd/:id",Controlleur.renew)

module.exports =Routes2