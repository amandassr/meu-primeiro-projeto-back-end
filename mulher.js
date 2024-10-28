const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({ 
        nome: 'Amanda Ribeiro',
        imagem: 'https://carnavalesco.com.br/wp-content/uploads/2023/08/chegou_o_que_faltava_2023-5.jpg',
        minibio: 'Aspirante a Dev, apaixonada pela cultura popular e tecnologia'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
