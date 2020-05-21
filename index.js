const express = require('express')
const app = express()
const controller = require('./src/controller')
//const morgan = require('morgan')
const makeExpressCallback = require('./src/express-callback')
app.use(express.json())
//app.use(morgan('tiny'))

/*app.get('/',(req,res)=>{
    res.status(200).send("works fine!")
})*/
app.get('/book', makeExpressCallback(controller.book))
app.post('/book', makeExpressCallback(controller.postBook))
app.put('/book/:id', makeExpressCallback(controller.updatedBook))
app.delete('/book/:id', makeExpressCallback(controller.deletedBook))
app.listen(3000,()=>{
    console.log("server running on port 3000")
})