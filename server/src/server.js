import express from 'express'
import { ENV } from './lib/env.js'

const app = express()

console.log(process.env.PORT)

app.get("/", (req, res) => {
    res.status(200).json({msg:"hello world from the api new"})
})

app.listen(ENV.PORT, () => console.log("server is tunning on port 3000"))
