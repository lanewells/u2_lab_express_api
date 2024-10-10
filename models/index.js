const mongoose = require('mongoose')
const movieSchema = require('./movies')
const actorSchema = require('./actors')
const reviewSchema = require('./reviews')

const Movie = mongoose.model('Movie', movieSchema)
const Actor = mongoose.model('Actor', actorSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Movie,
    Actor,
    Review
}