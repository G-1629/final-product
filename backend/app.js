//imports
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const zomatoRoutes=require('./routes/zomato')
const paymentRoutes=require('./routes/razorPay')
const mongoose=require('mongoose')

const mongoServer =process.env.MONGO_URI||"mongodb://localhost/zomato"
//connect to mongoDB 
mongoose.connect(mongoServer,
     ()=>{
    console.log("mongoDB connected")},
    e=>console.log(e))


//create express server
var app=express()

//add middleware before routes
app.use(bodyParser.json())
app.use(cors())

//middleware routes 
app.use('/zomato',zomatoRoutes)
app.use('/pay',paymentRoutes)

//heroku configuration
if(process.env.NODE_ENV=="production"){
    app.use(express.static("zomato/build"))
    const path=require("path")
      app.get("*",(req,res)=>{
         res.sendFile(path.resolve(__dirname,"zomato","build","index.html"))
      })

}


//listen to a port 
app.listen( process.env.PORT || 7878,()=>{
    console.log("express app is up and running on port 7878")
})