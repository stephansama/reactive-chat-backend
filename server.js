const express = require('express')

require('dotenv').config()

const { PORT = 3000 } = process.env

const app = express()

// Middleware
app.use(express.json())

// endpoints
app.get('/', (req, res) => {
	res.send('hello world')
})

// Port
app.listen(PORT, () => console.log('' + PORT))
