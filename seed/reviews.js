const db = require('../db')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    await Review.deleteMany()

    const reviews = [
            {
                score: 10,
                comment: "Barbie is a visually stunning and thought-provoking film that takes a deeper dive into the complexities of self-discovery and womanhood. Margot Robbie and Ryan Gosling's performances are hilarious and heartfelt.",
                project: "Barbie"
            },
            {
                score: 7,
                comment: "A fun and colorful movie with a surprising amount of depth. While it's not perfect, it's definitely a new take on Barbie that hits some strong emotional beats.",
                project: "Barbie"
            },
            {
                score: 4,
                comment: "While it's visually appealing, Barbie fell flat in terms of storytelling for me. It felt more like a marketing exercise than a fully developed film.",
                project: "Barbie"
            },
            {
                score: 10,
                comment: "Shrek is a timeless classic that appeals to both children and adults alike. The humor is sharp, the animation was revolutionary for its time, and the voice acting is top-tier.",
                project: "Shrek"
            },
            {
                score: 5,
                comment: "Shrek is a bit overrated. The humor didn't land for me as an adult, and the animation feels a little dated by today's standards.",
                project: "Shrek"
            },
            {
                score: 8,
                comment: "An enjoyable watch with clever writing and memorable characters. Shrek's message about self-acceptance is still relevant today.",
                project: "Shrek"
            },
            {
                score: 9,
                comment: "Spirited Away is a masterpiece of animation. The world-building is fantastic, and the film delivers a perfect mix of whimsy and dark themes that makes it resonate on so many levels.",
                project: "Spirited Away"
            },
            {
                score: 10,
                comment: "A stunning piece of art that immerses you into a magical world. Spirited Away is a beautiful tale of courage and self-growth, and Hayao Miyazaki's storytelling is unmatched.",
                project: "Spirited Away"
            },
            {
                score: 6,
                comment: "Beautiful animation, but I didn't connect with the story as much as I expected to. It felt a bit long and hard to follow at times.",
                project: "Spirited Away"
            }        
        ]
        await Review.insertMany(reviews)
        console.log('seeded reviews')
}

const run = async () => {
    await main()
    db.close()
}
    run()