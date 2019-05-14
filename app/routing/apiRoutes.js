const match = require('../data/friends')

module.exports = app => {

    app.get('/api/friends', (req, res) => {
        res.json(match)
    })

    app.post('/api/friends', (req, res) => {
        let newFriend = req.body
    })

}