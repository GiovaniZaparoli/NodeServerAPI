import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// Configuração do server para usar o body-parser
app.use(bodyParser.urlencoded( { extended:true } ))
app.use(bodyParser.json())

// Definindo a porta via arquivo de configuração
let port = process.env.port || 3000

// Definindo Rotas
let router = express.Router() // Intercepta todas as rotas

// Middlewares
router.use(function (req, res, next) {
    console.log("Intercpetação pelo Middleware")
    next()
    
})

router.get('/',
 (req, res) => res.json( 
    {
        'message': 'Fala Consagrado!'
    }
 ))

 // Vincular app com as routes
 app.use('/api', router)

app.listen(port, () => {
    console.log("Yeah You Are On Node!")
})