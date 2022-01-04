const port = 3000;
const mongoose = require('mongoose');

const config = (app) => {
    mongoose.connect("mongodb+srv://satishpawar:satishpawar@cluster0.rmit4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to db")
        app.listen(port, function () {
            console.log("Server is listening at port:" + port);
        });
    }).catch((err) => {
        console.log(err)
    });
}

module.exports = { config };