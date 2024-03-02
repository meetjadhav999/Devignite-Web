const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authApi = require('./api/auth')


const app = express()
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGODB_PATH)

app.use(express.json())

app.use(cors())

app.use('/api/auth',authApi)

app.get("/",(req,res)=>{
    res.send("This thing is working")
})

app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)
})
