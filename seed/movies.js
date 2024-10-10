const db = require('../db')
const { Movie, Actor, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    await Movie.deleteMany()

    const barbieActors = await Actor.find({projects: {$in: ['Barbie']}})
    const shrekActors = await Actor.find({projects: {$in: ['Shrek']}})
    const spiritedAwayActors = await Actor.find({projects: {$in: ['Spirited Away']}})
    const surfsUpActors = await Actor.find({projects: {$in: ["Surf's Up"]}})
    const ironGiantActors = await Actor.find({projects: {$in: ["The Iron Giant"]}})
    
    const barbieReviews = await Review.find({project: 'Barbie'})
    const shrekReviews = await Review.find({project: 'Shrek'})
    const spiritedAwayReviews = await Review.find({project: 'Spirited Away'})
    const surfsUpReviews = await Review.find({project: "Surf's Up"})
    const ironGiantReviews = await Review.find({project: "The Iron Giant"})
    const movies = [
            {
                title: "Barbie",
                runtimeMins: 114,
                rating: "PG-13",
                yearReleased: 2023,
                description: "Barbie navigates the challenges of being perfect in a not-so-perfect world, all while discovering the meaning of life beyond the plastic world of Barbie Land.",
                laneWatched: true,
                starringActors: barbieActors.map(actor => actor._id),
                reviews: barbieReviews.map(review => review._id)
            },
            {
                title: "Shrek",
                runtimeMins: 90,
                rating: "PG",
                yearReleased: 2001,
                description: "An ogre's peaceful life is disrupted when a group of fairy tale creatures is dumped into his swamp by a corrupt lord, forcing him to go on a quest with a loud-mouthed donkey.",
                laneWatched: true,
                starringActors: shrekActors.map(actor => actor._id),
                reviews: shrekReviews.map(review => review._id)
            },
            {
                title: "Spirited Away",
                runtimeMins: 125,
                rating: "PG",
                yearReleased: 2001,
                description: "A young girl becomes trapped in a mysterious and magical world after her parents are transformed into pigs. She must navigate the spirit world to find a way to free them and herself.",
                laneWatched: true,
                starringActors: spiritedAwayActors.map(actor => actor._id),
                reviews: spiritedAwayReviews.map(review => review._id)
            },
            {
                title: "Surf's Up",
                runtimeMins: 85,
                rating: "PG",
                yearReleased: 2007,
                description: "A documentary-style animation that follows a penguin named Cody as he pursues his dream of becoming a surfing champion.",
                laneWatched: true,
                starringActors: surfsUpActors.map(actor => actor._id),
                reviews: surfsUpReviews.map(review => review._id)
            },
            {
                title: "The Iron Giant",
                runtimeMins: 86,
                rating: "PG",
                yearReleased: 1999,
                description: "A young boy befriends a giant robot from outer space, but a paranoid government agent wants to destroy the robot at all costs.",
                laneWatched: true,
                starringActors: ironGiantActors.map(actor => actor._id),
                reviews: ironGiantReviews.map(review => review._id)
            }
        ]
        await Movie.insertMany(movies)  
        console.log('created movies with actors and reviews')   
}

const run = async () => {
    await main()
    db.close()
}

run()