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

//show route - reviews by score order, descending
app.get('/reviews/highest', async (req, res)=> { 
    const reviews = await Review.find().sort({score: -1})
    res.json(reviews)
})

//show route - reviews by score order, ascending
app.get('/reviews/lowest', async (req, res)=> { 
    const reviews = await Review.find().sort({score: +1})
    res.json(reviews)
})

// index route - actors
app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
})

// index route - reviews
app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
})

// index route - movies
app.get('/', async (req, res) => {
    const movies = await Movie.find({})
        .populate('starringActors')
        .populate('reviews')
    res.json(movies)
})

//show route - actor
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

//show route - review
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

//show route - movie
app.get('/:id', async (req, res) => {
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