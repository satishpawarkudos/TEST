const jwt = require("jsonwebtoken")
const token = "satishpawartestjwt"
const auth = (req, res, next) => {
    // console.log("res.cookies.login ======", req.headers.cookie.substring(6))
    if (req.headers.cookie) {
        let isVerified = jwt.verify(req.headers.cookie.substring(6), token)
        if (isVerified) {
            return next()
        }
        else {
            return res.status(400).json({ msg: "invalid token" })
        }
    } else {
        return res.status(400).json({ msg: "please login" });
    }
}
module.exports = auth;