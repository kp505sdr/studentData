const  mongoose=require("mongoose")



const studentSchema=new mongoose.Schema({
   name:{
    type:String,
    required:[true,"Please Enter The Name"]
   },
   email:{
    type:String,
    required:[true,"Please Enter The Email"]
   },
   contact:{
    type:Number,
    require:[true,"Please Enter The Number"],
    minLength: 10,
    maxLength: 10
   },
   gender:{
      type:String,
      required:[true,"Please Select your Gender"]
   },
   image:{
       type:String
   },
   createdAt:{
type:Date,
default:Date.now
   }
})

module.exports=mongoose.model("Student",studentSchema)