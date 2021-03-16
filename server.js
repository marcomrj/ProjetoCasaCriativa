const express = require("express") //Passo o express para a variável express
const server = express()            // Variável chama a função express
server.use(express.static("public")) //Configura uma pasta para usar o estático dela CSS/IMAGENS/SCRIPTS
server.listen(3000) //Porta que eu estou utilizando do host para hospedar o server

//Array com os objetos que será utilizada para simplificar o codigo no índez do html
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque voluptate quod incidun ",
        url: "https://linkedin.com/in/marcomrj"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Lazer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque voluptate quod incidun ",
        url: "https://linkedin.com/in/marcomrj"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditar",
        category: "Hábito",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque voluptate quod incidun ",
        url: "https://linkedin.com/in/marcomrj"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintar",
        category: "Hobbie",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque voluptate quod incidun ",
        url: "https://linkedin.com/in/marcomrj"
    },
]

server.get("/", function(req, res){

    const reversedIdeas = [...ideas].reverse()
    let lastIdeas = []
    for(let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }
    return res.render("index.html",{ideas:lastIdeas}) //dirname busca no teu pc onde ta o arq, renderiza também os objetos ideas
})

server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html",{ideas:reversedIdeas})  //dirname busca no teu pc onde ta o arq
})

const nunjucks= require("nunjucks")//Configuração do nunjucks
nunjucks.configure("views",{
    express: server,
    noCache: true,                  //Não guarda antigos layouts em cash
})