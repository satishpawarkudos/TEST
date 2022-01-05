const { config } = require("./confiq/confiq")
const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const cookieParser = require("cookie-parser");
var cors = require('cors')

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", studentRoutes);
app.get("/", (req, res) => {
    res.send("hi");
})
app.use(cookieParser())

config(app)