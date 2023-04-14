const app =require("./app")
const dotenv=require("dotenv")
const connectDatabase=require("./src/configs/database")

//config
dotenv.config({path:"src/configs/config.env"})
//database connection
connectDatabase()
//server
app.listen(process.env.PORT,()=>{
  console.log(`server is working on http://localhost:${process.env.PORT}`)
})