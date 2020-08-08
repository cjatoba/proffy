const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "954785224", 
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum magnam eos distinctio, veritatis minus id quis quaerat officiis rerum neque nulla cupiditate laborum sapiente, facilis debitis eum tempore atque?", 
        subject: "Química", 
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Clayton", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "954785224", 
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum magnam eos distinctio, veritatis minus id quis quaerat officiis rerum neque nulla cupiditate laborum sapiente, facilis debitis eum tempore atque?", 
        subject: "Química", 
        cost: "30",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}

function pageStydy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStydy)
.get("/give-classes", pageGiveClasses)

.listen(5500)