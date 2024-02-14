const express =require("express")
const db = require("./database/index")

const Authroutes = require("./routes/Routes")
const Prodroutes =require("./routes/Routes2")
const Cartroute = require('./routes/Routes3')


const app=express()
const cors = require("cors")
const port=5000

app.use(express.json())
app.use(cors())

app.use("/api/user",Authroutes)
app.use("/api/product",Prodroutes)
app.use("/api/cart",Cartroute)

app.listen(port,()=>{
    console.log(`connected on port ${port}`);
})


module.exports=db