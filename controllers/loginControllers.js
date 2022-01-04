
const LoginModel = require("../model/loginschema");
const jwt = require("jsonwebtoken");

const token = "satishpawartestjwt"
const signup = (req, res) => {
    var signupuser = new LoginModel({ name: req.body.name, email: req.body.email, password: req.body.password });
    signupuser.save(function (err, data) {
        if (err) {
            res.status(400).send(err)
        }
        else {
            res.status(200).send("Data inserted");
        }
    });
}

const login = (req, res) => {
    console.log(" i am here")
    if (req.body.email && req.body.password) {
        LoginModel.findOne({ email: req.body.email })
            .then((data) => {
                if (!data) {
                    return res.json({ msg: "incorect credential" })
                } else {
                    console.log("data --------------", data)
                    const uid = data["_id"];
                    console.log(uid);
                    const signature = jwt.sign({ paylod: uid }, token)
                    res.cookie('login', signature, { httpOnly: true })
                    if (req.body.password === data.password) {
                        res.status(200).json({ msg: "login successfull", data: data })
                    }
                    else {
                        res.status(200).send({ msg: "incorrect password ", data: data.name })
                    }
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }
    else {
        res.status(200).send("please enter emial and password");
    }
}

module.exports = { login, signup };