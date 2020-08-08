//Dados
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
    },
    {
        name: "Clayton", 
        avatar: "https://avatars0.githubusercontent.com/u/52887959?s=460&u=52a66156ddfcce7d54f7de2f684c3c7ef5e49ec5&v=4", 
        whatsapp: "954785224", 
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum magnam eos distinctio, veritatis minus id quis quaerat officiis rerum neque nulla cupiditate laborum sapiente, facilis debitis eum tempore atque?", 
        subject: "Química", 
        cost: "30",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
    
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStydy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query; 
    
    // Object.keys(data) transforma as chaves do objeto data em um array assim [name, avatar, whatsapp...]
    const isNotEmpty = Object.keys(data).length > 0;

    //Se tiver dados adicionar
    if (isNotEmpty) {

        data.subject = getSubject(data.subject);

        //Adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    //Caso não existam dados volta para a página give-classes
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//Configurar o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configuração do servidor
server
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStydy)
.get("/give-classes", pageGiveClasses)
.listen(5500)