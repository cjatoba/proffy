module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    //inserir dados na tabela proffys
    //await só funciona dentro de uma função se constar async antes da função
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    //retorna o ID do último registro da tabela
    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule
    //O map possibilita um retorno em formato de array
    const insertedAllClassScheculeValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //executar todos os db.run() da class_schedules
    await Promise.all(insertedAllClassScheculeValues)
}