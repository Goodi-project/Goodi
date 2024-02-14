const express = require ("express")
const Routes = express.Router()
const controlleur = require("../Controlleur/Controlleur")


Routes.get("/getAll",controlleur.getAll)
Routes.post("/login",controlleur.getone)
Routes.post("/register",controlleur.adduser)


module.exports= Routes