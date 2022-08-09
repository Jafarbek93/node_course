import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const app = express();
const DB_URL = 'mongodb+srv://<name>:<pasword>@cluster0.kccxxdz.mongodb.net/?retryWrites=true&w=majority'

const port = 8000;

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlPArser: true})
        app.listen(port, () => {console.log('server listening')
            
        })
    } catch (e){
        console.log(e)
    }
}

startApp()
