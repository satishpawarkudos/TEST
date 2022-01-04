
const StudentModel = require("../model/studentschema");

const addStudent = (req, res) => {
    var newStudent = new StudentModel({ StudentId: req.body.StudentId, Name: req.body.Name, Roll: req.body.Roll, Birthday: req.body.Birthday });
    newStudent.save(function (err, data) {
        if (err) {
            res.status(400).send(err)
        }
        else {
            res.status(200).send("Data inserted");
        }
    });
}

const studentData = (req, res) => {
    console.log(" i am here")
    StudentModel.find({})
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = { studentData, addStudent };