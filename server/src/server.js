import express from 'express'
import path from 'path'

import { ENV } from './lib/env.js'

const app = express()

const __dirname = path.resolve()

console.log(process.env.PORT)

app.get("/hello", (req, res) => {
    res.status(200).json({ msg: "hello world from the api new" })
})

app.get("/books", (req, res) => {
    res.status(200).json({ msg: "books endpoint" })
})

//coniguracion para despliegue
if (ENV.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../client/dist")))

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/dist"))
    })
}

app.listen(ENV.PORT, () => console.log("server is running on port 3000"))
