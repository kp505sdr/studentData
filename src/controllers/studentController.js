const StudentDetails=require("../models/studentModels")



//create student data
exports.createStudent = async (req, res, next) => {
 

    const student= await StudentDetails.create(req.body)
    res.status(201).json({
      success:true,
      student
    })
    // const { name, email, contact } = req.body;
    
    // StudentDetails.findOne({ email: email }, (err, student) => {
    //   if (student) {
    //     res.send({ message: "user Already exsit" });
    //   } else {
    //     const student = new StudentDetails({
    //       name,
    //       email,
    //       contact,
    //     });

      
    //     student.save((err) => {
    //       if (err) {
    //         res.send(err);
    //       } else {
    //         res.status(200)
    //         res.send({ message: "Successfully Created" });
    //       }
    //     });
    //   }
    // });
  
};

//get all student
exports.getAllStudents= async(req,res)=>{
    
  const students=await StudentDetails.find()
    res.status(200).json({
      success:true,
      students
    })
}
// update student details

exports.putStudents=async(req,res)=>{

  let student = await StudentDetails.findById(req.params.id);
  if(!student){
      return res.status(404).json({
      success:false,
      message:"Student not found"
    })
  }
  student=await StudentDetails.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
  res.status(200).json({
    success:true,
    student
  })
}
//delete student
exports.deleteStudent=async(req,res)=>{
   const student=await StudentDetails.findById(req.params.id);
   if(!student){
    return res.status(400).json({
      success:false,
      message:"Student not found"
    })
   }
  await student.remove();
  res.status(200).json({
    success :true,
    message:"Student Deleted Successfully"
  })
}