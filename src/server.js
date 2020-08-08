require('express')()
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.send("pagina study")
})
.listen(5500)