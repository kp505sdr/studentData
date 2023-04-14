const express=require("express");
const router=express.Router();


const { getAllStudents, createStudent, putStudents, deleteStudent } = require("../controllers/studentController");


router.route("/students").get(getAllStudents);
router.route("/students/new").post(createStudent);
router.route("/students/:id").put(putStudents);
router.route("/students/:id").delete(deleteStudent);



module.exports=router