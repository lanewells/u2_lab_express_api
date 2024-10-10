const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    await Actor.deleteMany()

    const actors = [
            {
                name: "Margot Robbie",
                age: 33,
                alive: true,
                img: "https://i.etsystatic.com/32187220/r/il/5e20da/4132577153/il_794xN.4132577153_gkq2.jpg", 
                projects: ["Barbie"]
            },
            {
                name: "Ryan Gosling",
                age: 43,
                alive: true,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ryan_Gosling_in_2018.jpg/418px-Ryan_Gosling_in_2018.jpg", 
                projects: ["Barbie"]
            },
            {
                name: "Mike Myers",
                age: 61,
                alive: true,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mike_Myers_2011.jpg/480px-Mike_Myers_2011.jpg?20111115212645", 
                projects: ["Shrek"]
            },
            {
                name: "Cameron Diaz",
                age: 52,
                alive: true,
                img: "https://m.media-amazon.com/images/I/61T9es8U3xL._AC_SL1000_.jpg", 
                projects: ["Shrek"]
            },
            {
                name: "Miyu Irino",
                age: 36,
                alive: true,
                img: "https://m.media-amazon.com/images/S/pv-target-images/10237104770b2b90cddc488ca4acaa3fe301157dcabb13b72cb76758752c7b45._SX300_.jpg", 
                projects: ["Spirited Away"]
            },
            {
                name: "Rumi Hiiragi",
                age: 36,
                alive: true,
                img: "https://m.media-amazon.com/images/M/MV5BOTE2ZTYxNjgtNGM0MC00ZmUxLTkwOGMtNTY4ZTFjNTg3MWE5XkEyXkFqcGc@._V1_QL75_UY414_CR12,0,280,414_.jpg", 
                projects: ["Spirited Away"]
            },
            {
                name: "Shia LaBeouf",
                age: 38,
                alive: true,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Shia_LaBeouf_2022.jpg/220px-Shia_LaBeouf_2022.jpg", 
                projects: ["Surf's Up"]
            },
            {
                name: "Vin Diesel",
                age: 57,
                alive: true,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Vin_Diesel_2013_SDCC_%28cropped%29.jpg/449px-Vin_Diesel_2013_SDCC_%28cropped%29.jpg?20230808145300", 
                projects: ["The Iron Giant"]
            },
            {
                name: "Jasper Michaels", 
                age: 40,
                alive: true,
                img: "", 
                projects: ["Shrek", "The Iron Giant"]
            },
            {
                name: "Lena Solstice", 
                age: 29,
                alive: true,
                img: "", 
                projects: ["Barbie", "Spirited Away"]
            }
        ]
        await Actor.insertMany(actors)
        console.log('created actors')
}
const run = async () => {
    await main()
    db.close()
}

run()