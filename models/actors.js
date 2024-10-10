const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: {type: String, requried: true},
        age: {type: Number, required: true},
        alive: {type: Boolean, required: true},
        img: {type: String, required: false},
        projects: {type: [String], required: true}
    },
    { timestamps: true }
)

module.exports = actorSchema