const { log } = require('console')
const express = require('express')
const app = express()

app.use(express.json())
app.get("/home",(req,res)=>{
   return res.status(200).json({message: "Hello"})
})

app.post("/home", (req,res)=>{
    const user = {
        name: "Shabalala Deks",
        age: "27",
        status: "food stack"
    }
    return res.status(201).json()
})
app.listen(3000,()=>{
    console.log('Server is running');
})
