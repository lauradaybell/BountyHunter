const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())



app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/bountydb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: false,
        useUnifiedTopology: true
    
    }, () => console.log("Connected to MongoDB" ))
        

app.use("/bounty", require("./routes/BountyRouter"))



// app.get("/bounty", (req, res) => {
//     res.send(bounties)
// })

// app.post("/bounty", (req, res) => {
//     res.send(req.body)
//     const newBounty = req.body
//     console.log(req.body)
//     newBounty._id = uuid()
//     newBounty.living = true
//     bounties.push(newBounty)
//     res.send(newBounty)
// })

// app.delete("/bounty/:_id", (req, res) => {
//     const bountyId = req.params._id
//     const bountyIndexToDelete = bounties.findIndex(bounty => bounty._id === bountyId)
//     const bountyName = bounties[bountyIndexToDelete].firstName
//     bounties.splice(bountyIndexToDelete, 1)
//     res.send(`Successfully deleted ${bountyName}`)
// })

// app.put("/bounty/:_id", (req, res) => {
//     const bountyId = req.params._id
//     const bountyToUpdate = bounties.find(bounty => bounty._id === bountyId)
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bountyToUpdate, req.body)
//     console.log(updatedBounty)
//     bounties.splice(bountyIndex, 1, updatedBounty)
//     res.send (bounties)

// })


app.listen(6000, () => {
    console.log('server is running')
})