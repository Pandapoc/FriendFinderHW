const express = require('express')
const { join } = require('path')

let PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const routes = require('./app/routing/apiRoutes')
routes(app)


app.listen(PORT)