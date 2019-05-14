const match = require('../data/friends')

module.exports = app => {

    app.get('/api/friends', (req, res) => {
        res.json(match)
    })

    app.post('/api/friends', (req, res) => {
        let newFriend = req.body
        let newScore = newFriend.scores

        let name = ''
        let img = ''

        let totalDif = 1000

        for (let i = 0; match.length; i++) {
            let dif = 0

            for (let j = 0; newScore.length; j++) {
                dif += Math.abs(match[i].scores[j] - newScore.scores[j])
            }

            if (dif < totalDif) {
                let name = match[i].name
                let img = match[i].photo

                let totalDif = dif
            }
        }
        match.push(newFriend)

        res.json({ status: 'OK', name: name, img: img })
    })

}