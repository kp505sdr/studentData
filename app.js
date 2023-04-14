
const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const app = express()

app.use(bodyParser.json({limit: '25mb'}))
app.use(bodyParser.urlencoded({limit: '25mb', extended: false}))
app.use(cors());
app.set("view engine", "ejs");

//Main Route Import
const all_routs=require("./src/routes/studentRoot")

app.use("/api/v1",all_routs)

module.exports=app