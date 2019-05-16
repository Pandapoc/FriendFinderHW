const { join } = require('path')

module.exports = app => {

    app.get('/survey', (req, res) => {
        res.sendFile(join(__dirname, '../public/survey.html'))
    })

    app.get('/', (req, res) => {
        res.sendFile(join(__dirname, '../public/home.html'))
    })

}