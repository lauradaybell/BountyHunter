const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        default: true
    },
    bounty: Number,
    type: {
        type: String,
        enum: ["Jedi", "Sith"],
        required: true
    }
})

module.exports= mongoose.model("Bounty", bountySchema)

