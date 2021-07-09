const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const data = require('./news.json')

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

app.set('view engine', "ejs")

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: "Home", data: data })
})
