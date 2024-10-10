const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true},
        runtimeMins: { type: Number, required: true},
        rating: { type: String, required: true},
        yearReleased: { type: Number, required: true},
        description: { type: String, required: true},
        laneWatched: { type: Boolean, required: true},
        starringActors: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
        reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
    },
    { timestamps: true }
)

module.exports = movieSchema