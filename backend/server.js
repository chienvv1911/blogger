const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.get('/api/posts', (req, res) => {
    res.json([{id: 1, title: 'Promise trong JS', content: 'Promise is wonderful'}])
})

app.get('/api/posts/:id', (req, res) => {
    res.json({id: 1, title: 'Promise trong JS', content: 'Promise is wonderful'})
})

const port = process.env.PORT || 3002
app.listen(port, console.log('Server running on port 3002'))