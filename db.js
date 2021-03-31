const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./casa-criativa.db') //Atribui a db o sqlite informando a raiz de onde está o código

db.serialize(function() {   //Criação da tabela por meio do Sqlite3

    //Cria tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
            
            );
    `)

    //Insere dados na tabela
    const query =`
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
        )
        VALUES(?,?,?,?,?);
        `

    const values=[
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque voluptate quod incidun ",
        "Estudo",
        "https://linkedin.com/in/marcomrj"
    ]
    db.run(query,values,function(err){
        if(err) return console.log(err)
        console.log(this)
    })
    /*
    /Consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)

        console.log(rows)
    })

    Deletar dado na tabela
        db.run(`DELETE FROM ideas WHERE id = ?`,[1],function(err){
            if(err) return console.log(err)

            console.log("DELETEI",this)
        })
    */
})

module.exports = db