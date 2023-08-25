import mongoose from "mongoose";
import express from "express";
import Container from "typedi";
import cors from "cors"
import corsOptions from "./src/config/cors";
import cookieParser from "cookie-parser";
require("dotenv").config()

const app = express();
const port = String(process.env.PORT) || 4000;

// Set up your routes and middleware here
app.use(cors(corsOptions));
app.use(express.urlencoded({limit:"50mb", extended: false}))
app.use(express.json({limit:"50mb"}))
app.use(cookieParser())

// Run MongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/dashboard`)
const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')});


app.listen(port, ()=>{
    console.log(`Server is now listening to port ${port}`)
})