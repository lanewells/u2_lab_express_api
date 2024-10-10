const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        score: {type: Number, required: true, min: 1, max: 10},
        comment: {type: String, required: true},
        project: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = reviewSchema