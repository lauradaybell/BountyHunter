const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path")
require("dotenv").config()
const PORT = process.env.PORT || 6000

app.use(express.json())


app.use(morgan("dev"))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bountydb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: false,
        useUnifiedTopology: true
    
    }, () => console.log("Connected to MongoDB" ))
        

app.use("/bounty", require("./routes/bountyRouter"))
app.use(express.static(path.join(__dirname, "client", "build")))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log('server is running')
})