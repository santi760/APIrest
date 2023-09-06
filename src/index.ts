import express from 'express'

import comunityRouter from './'

const app = express()
app.use(express.json()) 

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('ping')
    res.send('pong')
} )

app.use('./api/comunities',comunityRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})