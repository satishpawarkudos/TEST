var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const { studentData, addStudent } = require("../controllers/studentControllers")
const { signup, login } = require("../controllers/loginControllers")
const auth = require("../middlewares/auth")

router.get("/student/data", auth, studentData)
router.post("/student/save", auth, addStudent)
router.post("/student/signup", signup)
router.post("/student/login", login)

module.exports = router;
