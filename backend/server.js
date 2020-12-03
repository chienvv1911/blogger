const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes')

dotenv.config()
connectDB();
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/posts', postRoutes);

const port = process.env.PORT || 3002
app.listen(port, console.log('Server running on port 3002'))