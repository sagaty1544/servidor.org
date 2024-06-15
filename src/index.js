const bodyParser = require("body-parser")
const express = require ("express")
const path = require("path")

const app = express()
const router = express.Router()
app.use(express.static(path.join(__dirname + "/css")))
app.use(bodyParser.urlencoded({
    extended:true
}))

let contador = 0

let usuario = "sagaty15"
let senha = "senha1234"

router.post("/admin", (req, res)=>{
    const user = req.body.username
    const pass = req.body.password
    if (user == usuario && senha == pass){
        res.sendFile(path.join(__dirname + "/pages/comando.html"))
    }else{
        res.status(403).send("ERROR!!")
    }
})

router.get("/admin", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/admin.html"))
})

router.get("/contador", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contador.html"))
})

router.post("/contador", (req, res)=>{
    contador = contador + 1
    res.status(200).send(`O numero do contador é :${contador}`)
})

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)


app.listen(3333, ()=>{
    console.log("Servidor online!!")
})