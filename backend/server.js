import express from 'express'
import cors from 'cors'
import data from './data.js'

const app1 = express()

app.use(cors())

app.get("/api/products", (req, res) => {
    res.send(data.products)
})

app.listen(5000, () => {
    console.log("Serving at 5000");
})