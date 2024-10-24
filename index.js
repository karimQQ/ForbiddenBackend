import express from 'express'
import router from "./router/index.js";
import * as https from "https";
import * as fs from "fs";

const PORT = 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', router)

async function startApp() {
    try {
        https.createServer({
            key: fs.readFileSync('/cert/key.pem'),
            cert: fs.readFileSync('/cert/cert.pem')
        }, app).listen(PORT, () => {
            console.log("SERVER STARTED ON PORT " + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()