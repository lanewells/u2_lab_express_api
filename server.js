const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()
const { Movie } = require('./models')
const { Actor } = require('./models')
const { Review } = require('./models')

app.use(cors())
app.use(express.json())

//index of parent data, per assignment instructions (movies)
app.get('/', async (req, res) => {
  const movies = await Movie.find({})
  res.json(movies)
})

//reviews by score sorted in descending order
app.get('/reviews/highest', async (req, res)=> { 
  const reviews = await Review.find().sort({score: -1})
  res.json(reviews)
})

//reviews by score sorted in ascending order
app.get('/reviews/lowest', async (req, res)=> { 
  const reviews = await Review.find().sort({score: +1})
  res.json(reviews)
})

//index of movies with actors + reviews populated
app.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  .populate('starringActors')
  .populate('reviews')
})

//index of all actors
app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
})

//index of all reviews
app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
})

//find actor by id
app.get('/actors/:id', async (req, res) => {
    try {
      const { id } = req.params
      const actors = await Actor.findById(id)
      if (!actors) throw Error('actor not found...')
      res.json(actors)
    } catch (e) {
      console.log(e)
      res.send('actor not found!!!')
    }
})

//find review by id
app.get('/reviews/:id', async (req, res) => {
    try {
      const { id } = req.params
      const reviews = await Review.findById(id)
      if (!reviews) throw Error('review not found...')
      res.json(reviews)
    } catch (e) {
      console.log(e)
      res.send('review not found!!!')
    }
})

//find movie by id
app.get('/movies/:id', async (req, res) => {
    try {
      const { id } = req.params
      const movies = await Movie.findById(id)
      if (!movies) throw Error('movie not found...')
      res.json(movies)
    } catch (e) {
      console.log(e)
      res.send('movie not found!!!')
    }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})