const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    
    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "954785224", 
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum magnam eos distinctio, veritatis minus id quis quaerat officiis rerum neque nulla cupiditate laborum sapiente, facilis debitis eum tempore atque?", 
    }

    classValue = {
        subject: "Química", 
        cost: "20"        
    }

    classScheduleValues = [
        //class_id virá pelo banco após o cadastro
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
})