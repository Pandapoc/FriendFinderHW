const express = require('express')
const { join } = require('path')

let PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)



app.listen(PORT)